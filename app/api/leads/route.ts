import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { parseLeadBody, type StoredLead } from '@/lib/assessment';
import { BUSINESS_EMAIL, BUSINESS_NAME } from '@/lib/business';
import { isInboxAuthed } from '@/lib/inbox-auth';
import { createLead, listLeads } from '@/lib/lead-store';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 8;

function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]?.trim() || 'local';
  return request.headers.get('x-real-ip') ?? 'local';
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((stamp) => now - stamp < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function notify(lead: StoredLead) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey?.startsWith('re_')) return;

  const resend = new Resend(apiKey);
  const lines = [
    ['Name', lead.name],
    ['Phone', lead.phone],
    ['Email', lead.email || 'Not provided'],
    ['City', lead.city],
    ['Care need', lead.careNeed],
    ['Timeline', lead.timeline],
    ['Budget', lead.budget],
    ['Notes', lead.notes || 'None'],
    ['Source', lead.source],
    ['Received', lead.createdAt],
  ];

  const { error } = await resend.emails.send({
    from: `${BUSINESS_NAME} <onboarding@resend.dev>`,
    to: [BUSINESS_EMAIL],
    ...(lead.email ? { replyTo: lead.email } : {}),
    subject: `New ${lead.city} lead: ${lead.name}`,
    html: `<h2>New family lead</h2>${lines
      .map(([label, value]) => `<p><strong>${label}:</strong> ${escapeHtml(value).replace(/\n/g, '<br>')}</p>`)
      .join('')}`,
    text: lines.map(([label, value]) => `${label}: ${value}`).join('\n'),
  });

  if (error) {
    throw new Error(error.message || 'Email notification failed');
  }
}

export async function GET(request: NextRequest) {
  if (!process.env.LEAD_INBOX_PASSWORD?.trim()) {
    return NextResponse.json(
      { error: 'Set LEAD_INBOX_PASSWORD before opening the inbox.' },
      { status: 503 },
    );
  }

  if (!isInboxAuthed(request)) {
    return NextResponse.json({ error: 'Sign in to view leads.' }, { status: 401 });
  }

  const leads = await listLeads();
  return NextResponse.json(
    { leads },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}

export async function POST(request: NextRequest) {
  if (rateLimited(clientIp(request))) {
    return NextResponse.json(
      { error: 'Too many submissions from this network. Call us if you need help right now.' },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Enter your details and try again.' }, { status: 400 });
  }

  const parsed = parseLeadBody(body);
  if (!parsed.ok) {
    if (parsed.error === 'honeypot') {
      return NextResponse.json({ success: true }, { status: 200 });
    }
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  try {
    const lead = await createLead(parsed.value);
    try {
      await notify(lead);
    } catch (error) {
      console.error('Lead saved, email notification failed:', error);
    }
    return NextResponse.json({ success: true, id: lead.id }, { status: 201 });
  } catch (error) {
    console.error('Lead store error:', error);
    return NextResponse.json(
      { error: 'We could not save your request. Please call us and we will take it down by phone.' },
      { status: 500 },
    );
  }
}
