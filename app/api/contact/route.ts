import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const CONTACT_EMAIL = 'homewardseniors@gmail.com';

async function sendWithWeb3Forms({
  name,
  email,
  phone,
  message,
  accessKey,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
  accessKey: string;
}) {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      name,
      email,
      phone: phone || 'Not provided',
      message,
      subject: `New Homeward contact from ${name}`,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Failed to send message');
  }

  return data;
}

async function sendWithResend({
  name,
  email,
  phone,
  message,
  apiKey,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
  apiKey: string;
}) {
  const resend = new Resend(apiKey);

  const { data, error } = await resend.emails.send({
    from: 'Homeward Senior Placement <onboarding@resend.dev>',
    to: [CONTACT_EMAIL],
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
    text: `
      New Contact Form Submission

      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}

      Message:
      ${message}
    `,
  });

  if (error) {
    throw new Error(error.message || 'Failed to send email');
  }

  return data;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').trim();
    const message = String(body.message || '').trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (resendKey?.startsWith('re_')) {
      const data = await sendWithResend({ name, email, phone, message, apiKey: resendKey });
      return NextResponse.json({ success: true, provider: 'resend', id: data?.id }, { status: 200 });
    }

    if (web3formsKey) {
      const data = await sendWithWeb3Forms({ name, email, phone, message, accessKey: web3formsKey });
      return NextResponse.json({ success: true, provider: 'web3forms', id: data?.message }, { status: 200 });
    }

    return NextResponse.json(
      { error: 'Email service is not configured on the server.' },
      { status: 503 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      {
        error: 'Failed to send your message. Please try again or call us directly.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}
