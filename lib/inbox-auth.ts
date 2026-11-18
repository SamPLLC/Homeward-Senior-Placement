import { createHmac, timingSafeEqual } from 'crypto';
import type { NextRequest } from 'next/server';

export const INBOX_COOKIE = 'hw_inbox';

export function inboxPassword(): string | undefined {
  const value = process.env.LEAD_INBOX_PASSWORD?.trim();
  return value || undefined;
}

export function inboxToken(password: string): string {
  return createHmac('sha256', password).update('homeward-lead-inbox-v1').digest('base64url');
}

export function safeEqual(given: string, expected: string): boolean {
  const left = Buffer.from(given);
  const right = Buffer.from(expected);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export function isInboxAuthed(request: NextRequest): boolean {
  const password = inboxPassword();
  if (!password) return false;
  const token = request.cookies.get(INBOX_COOKIE)?.value;
  if (!token) return false;
  return safeEqual(token, inboxToken(password));
}

export function inboxCookieOptions() {
  return {
    httpOnly: true,
    sameSite: 'lax' as const,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 14,
  };
}
