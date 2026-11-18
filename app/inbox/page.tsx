'use client';

import { useCallback, useEffect, useState, type FormEvent } from 'react';
import type { StoredLead } from '@/lib/assessment';

function formatWhen(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Detroit',
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

export default function LeadInbox() {
  const [password, setPassword] = useState('');
  const [leads, setLeads] = useState<StoredLead[] | null>(null);
  const [error, setError] = useState('');
  const [locked, setLocked] = useState(true);
  const [unconfigured, setUnconfigured] = useState(false);
  const [emailOnly, setEmailOnly] = useState(false);
  const [deliveryEmail, setDeliveryEmail] = useState('');
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    const response = await fetch('/api/leads', { cache: 'no-store' });
    if (response.status === 401) {
      setLocked(true);
      setUnconfigured(false);
      setLeads(null);
      setLoading(false);
      return;
    }
    if (response.status === 503) {
      setLocked(true);
      setUnconfigured(true);
      setLeads(null);
      setLoading(false);
      return;
    }
    const data = (await response.json().catch(() => ({}))) as {
      storage?: string;
      email?: string;
      leads?: StoredLead[];
      error?: string;
    };
    if (response.ok && data.storage === 'email-only') {
      setEmailOnly(true);
      setDeliveryEmail(data.email || '');
      setLeads(null);
      setLocked(false);
      setUnconfigured(false);
      setLoading(false);
      return;
    }
    if (!response.ok) {
      setEmailOnly(false);
      setError(data.error || 'Could not load leads.');
      setLoading(false);
      return;
    }
    setEmailOnly(false);
    setLeads(data.leads ?? []);
    setLocked(false);
    setUnconfigured(false);
    setLoading(false);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void load();
    }, 0);
    return () => window.clearTimeout(timer);
  }, [load]);

  async function onLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    const response = await fetch('/api/inbox/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    const data = (await response.json().catch(() => ({}))) as { error?: string };
    if (!response.ok) {
      setUnconfigured(response.status === 503);
      setError(data.error || 'Could not sign in.');
      return;
    }
    setPassword('');
    await load();
  }

  async function onLogout() {
    await fetch('/api/inbox/logout', { method: 'POST' });
    setLeads(null);
    setLocked(true);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:py-16">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">Lead inbox</h1>
      <p className="mt-3 text-lg text-gray-600">
        Family assessments for Homeward Senior Placement. Times are Eastern. This page is not indexed.
      </p>

      {loading && <p className="mt-8 text-gray-600">Loading…</p>}

      {!loading && emailOnly && (
        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-2xl font-semibold text-gray-900">Leads are not stored on this server</h2>
          <p className="mt-3 text-lg text-gray-800">
            Assessments and contact messages are emailed to {deliveryEmail || 'the Homeward Gmail address'}. They are
            not stored here, so this page does not list them. Check that inbox for new families.
          </p>
        </div>
      )}

      {!loading && !emailOnly && locked && (
        <form onSubmit={onLogin} className="mt-8 max-w-md rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900">Sign in</h2>
          {unconfigured ? (
            <p className="mt-3 text-base text-gray-700">
              The inbox password is not set. Add <code>LEAD_INBOX_PASSWORD</code> to <code>.env.local</code> and
              restart. Choose your own password. There is no default.
            </p>
          ) : (
            <p className="mt-3 text-base text-gray-700">
              For Sam. Use the password in <code>LEAD_INBOX_PASSWORD</code>.
            </p>
          )}
          <label htmlFor="inbox-password" className="mt-4 block text-base font-medium text-gray-800">
            Password
          </label>
          <input
            id="inbox-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-base"
          />
          {error && (
            <p role="alert" className="mt-3 text-base font-medium text-red-800">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="mt-4 inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-900 px-5 py-3 text-base font-semibold text-white"
          >
            Open inbox
          </button>
        </form>
      )}

      {!loading && !emailOnly && !locked && (
        <div className="mt-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-base text-gray-700">{leads?.length ?? 0} saved</p>
            <div className="flex gap-3">
              <button type="button" onClick={() => void load()} className="text-base font-semibold text-blue-900 underline">
                Refresh
              </button>
              <button type="button" onClick={() => void onLogout()} className="text-base font-semibold text-gray-700 underline">
                Sign out
              </button>
            </div>
          </div>
          {error && (
            <p role="alert" className="mt-3 text-base font-medium text-red-800">
              {error}
            </p>
          )}
          {leads && leads.length === 0 && (
            <p className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 text-lg text-gray-700">
              No leads yet. When a family finishes the assessment, it shows up here and stays in{' '}
              <code>data/leads.json</code> across restarts.
            </p>
          )}
          <ul className="mt-4 space-y-4">
            {leads?.map((lead) => (
              <li key={lead.id} className="rounded-2xl border border-gray-200 bg-white p-5">
                <p className="text-sm font-medium uppercase tracking-wide text-blue-900">
                  {lead.timeline} · {lead.careNeed}
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-gray-900">{lead.name}</h2>
                <p className="mt-2 text-base text-gray-800">
                  {lead.city}
                  {lead.budget && lead.budget !== 'Not specified' ? ` · ${lead.budget}` : ''}
                </p>
                <p className="mt-3 text-lg">
                  <a className="font-semibold text-blue-900 underline underline-offset-4" href={`tel:${lead.phone}`}>
                    {lead.phone}
                  </a>
                </p>
                <p className="mt-1 text-base text-gray-700">
                  {lead.email ? (
                    <a className="underline underline-offset-4" href={`mailto:${lead.email}`}>
                      {lead.email}
                    </a>
                  ) : (
                    'No email'
                  )}
                </p>
                {lead.notes && <p className="mt-3 whitespace-pre-wrap text-base text-gray-800">{lead.notes}</p>}
                <p className="mt-3 text-sm text-gray-500">
                  {formatWhen(lead.createdAt)} Eastern · {lead.source}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
