import { NextResponse } from 'next/server';
import { INBOX_COOKIE } from '@/lib/inbox-auth';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(INBOX_COOKIE, '', { httpOnly: true, path: '/', maxAge: 0 });
  return response;
}
