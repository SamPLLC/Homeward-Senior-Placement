import Link from 'next/link';
import type { Metadata } from 'next';
import {
  formatGuideDate,
  getGuideBySlug,
  guidePath,
  guideTopics,
  guideUpdated,
} from '@/lib/guides';
import { hospitalPath, hospitals } from '@/lib/hospitals';

export const metadata: Metadata = {
  title: 'Senior Care Guides for Michigan Families | Homeward Senior Placement',
  description:
    'Practical guides on assisted living cost, memory care, hospital discharge, Michigan licensing, VA Aid and Attendance, and how senior placement works in Southeast Michigan.',
  alternates: { canonical: '/guides' },
};

export default function GuidesIndex() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Guides for families</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Straight answers to the questions families ask before they tour a community. Written and updated by local senior placement advisors in Southeast Michigan.
        </p>
      </div>

      <div className="space-y-14">
        {guideTopics.map((topic) => (
          <section key={topic.name}>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">{topic.name}</h2>
            <p className="mt-2 text-gray-600">{topic.description}</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {topic.slugs.map((slug) => {
                const guide = getGuideBySlug(slug);
                if (!guide) {
                  return null;
                }
                return (
                  <Link
                    key={guide.slug}
                    href={guidePath(guide.slug)}
                    className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900">{guide.title}</h3>
                    <p className="mt-2 text-gray-600">{guide.description}</p>
                    <p className="mt-4 text-sm text-gray-500">Updated {formatGuideDate(guideUpdated(guide))}</p>
                    <p className="mt-2 text-blue-900 font-medium">Read the guide</p>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16 rounded-2xl border border-gray-200 bg-gray-50 p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Leaving a hospital or rehab?</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          These pages are written around actual Metro Detroit discharge timelines—not a generic statewide directory.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {hospitals.map((hospital) => (
            <Link
              key={hospital.slug}
              href={hospitalPath(hospital.slug)}
              className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-gray-800 hover:border-blue-900 hover:text-blue-900"
            >
              {hospital.shortName}
            </Link>
          ))}
        </div>
        <p className="mt-4">
          <Link href="/hospitals" className="text-blue-900 font-medium underline underline-offset-4">
            See all hospital discharge pages
          </Link>
        </p>
      </section>
    </div>
  );
}
