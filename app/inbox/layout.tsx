import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lead inbox | Homeward Senior Placement',
  description: 'Private inbox for Homeward Senior Placement family assessments.',
  robots: { index: false, follow: false },
};

export default function InboxLayout({ children }: { children: React.ReactNode }) {
  return children;
}
