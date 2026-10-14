import Link from 'next/link';
import type { Metadata } from 'next';
import { guides, guidePath } from '@/lib/guides';

export const metadata: Metadata = {
  title: 'Senior Care Guides for Michigan Families | Homeward Senior Placement',
  description:
    'Practical guides on assisted living cost, memory care, hospital discharge, Medicaid, adult foster care, and how senior placement works in Southeast Michigan.',
  alternates: { canonical: '/guides' },
};

export default function GuidesIndex() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Guides for families</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Straight answers to the questions families ask before they tour a community. Written for Southeast Michigan—Oakland, Wayne, Macomb, Washtenaw, and Livingston counties.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={guidePath(guide.slug)}
            className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <h2 className="text-xl font-semibold tracking-tight text-gray-900">{guide.title}</h2>
            <p className="mt-2 text-gray-600">{guide.description}</p>
            <p className="mt-4 text-blue-900 font-medium">Read the guide</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
