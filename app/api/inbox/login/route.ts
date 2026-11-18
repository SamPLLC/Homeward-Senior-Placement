import { NextRequest, NextResponse } from 'next/server';
import { INBOX_COOKIE, inboxCookieOptions, inboxPassword, inboxToken, safeEqual } from '@/lib/inbox-auth';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const password = inboxPassword();
  if (!password) {
    return NextResponse.json(
      { error: 'Set LEAD_INBOX_PASSWORD in the server environment, then restart.' },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Enter the inbox password.' }, { status: 400 });
  }

  const given = String((body as { password?: unknown })?.password ?? '');
  if (!given || !safeEqual(given, password)) {
    return NextResponse.json({ error: 'That password is not right.' }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(INBOX_COOKIE, inboxToken(password), inboxCookieOptions());
  return response;
}
