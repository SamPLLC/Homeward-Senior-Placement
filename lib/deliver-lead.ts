import type { LeadInput } from '@/lib/assessment';
import { BUSINESS_EMAIL, SITE_URL } from '@/lib/business';

export type DeliveryResult = {
  ok: boolean;
  detail: string;
};

function leadMessage(lead: LeadInput): string {
  return [
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email || 'Not provided'}`,
    `City: ${lead.city}`,
    `Care need: ${lead.careNeed}`,
    `Timeline: ${lead.timeline}`,
    `Budget: ${lead.budget || 'Not specified'}`,
    `Notes: ${lead.notes || 'None'}`,
    `Source: ${lead.source}`,
  ].join('\n');
}

/**
 * Email the lead through FormSubmit to the Gmail address already used by the live site.
 * A true result means FormSubmit accepted the message. An activation request is not delivery.
 */
export async function sendLeadViaFormSubmit(lead: LeadInput, pageUrl?: string): Promise<DeliveryResult> {
  const url = `https://formsubmit.co/ajax/${encodeURIComponent(BUSINESS_EMAIL)}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      referrerPolicy: 'origin',
      body: JSON.stringify({
        name: lead.name,
        email: lead.email || 'not-provided@homewardseniors.com',
        phone: lead.phone,
        city: lead.city,
        care_need: lead.careNeed,
        timeline: lead.timeline,
        budget: lead.budget || 'Not specified',
        notes: lead.notes || 'None',
        source: lead.source,
        message: leadMessage(lead),
        _subject: `New Homeward lead from ${lead.name} (${lead.city})`,
        _template: 'table',
        _captcha: 'false',
        _url: pageUrl || `${SITE_URL}/start`,
      }),
      signal: AbortSignal.timeout(20000),
    });

    const data = (await response.json().catch(() => ({}))) as { success?: unknown; message?: unknown };
    const detail = String(data.message || '');
    const accepted = data.success === true || data.success === 'true';
    if (response.ok && accepted && !/activation/i.test(detail)) {
      return { ok: true, detail: detail || 'FormSubmit accepted the message.' };
    }
    return {
      ok: false,
      detail: detail || `FormSubmit returned HTTP ${response.status}.`,
    };
  } catch (error) {
    const detail = error instanceof Error ? error.message : 'FormSubmit request failed.';
    return { ok: false, detail };
  }
}
