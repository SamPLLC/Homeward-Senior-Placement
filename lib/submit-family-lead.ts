import { parseLeadBody, type LeadInput } from '@/lib/assessment';
import { DELIVERY_FAILURE_MESSAGE } from '@/lib/business';
import { sendLeadViaFormSubmit } from '@/lib/deliver-lead';

export async function submitFamilyLead(
  input: LeadInput & { company?: string },
): Promise<{ ok: true } | { ok: false; error: string }> {
  const parsed = parseLeadBody(input);
  if (!parsed.ok) {
    if (parsed.error === 'honeypot') return { ok: true };
    return { ok: false, error: parsed.error };
  }

  const pageUrl = typeof window === 'undefined' ? undefined : window.location.href;
  const delivered = await sendLeadViaFormSubmit(parsed.value, pageUrl);
  if (!delivered.ok) {
    console.error('FormSubmit did not accept the lead:', delivered.detail);
    return { ok: false, error: DELIVERY_FAILURE_MESSAGE };
  }

  void fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ ...parsed.value, storeOnly: true }),
  }).catch(() => undefined);

  return { ok: true };
}
