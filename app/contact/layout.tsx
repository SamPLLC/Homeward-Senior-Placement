import type { Metadata } from 'next';
import {
  BUSINESS_ID,
  BUSINESS_PHONE_DISPLAY,
  SITE_URL,
  socialMetadata,
} from '@/lib/business';

const title = 'Contact Homeward Senior Placement | Farmington Hills, MI';
const description = `Call ${BUSINESS_PHONE_DISPLAY} or message a local senior placement advisor in Farmington Hills. Free consultations Monday–Sunday, 8am–7pm for assisted living and memory care in Southeast Michigan.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact' },
  ...socialMetadata({ title, description, path: '/contact' }),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: title,
  description,
  url: `${SITE_URL}/contact`,
  mainEntity: { '@id': BUSINESS_ID },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
