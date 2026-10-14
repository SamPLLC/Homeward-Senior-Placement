import Link from 'next/link';
import type { Metadata } from 'next';
import { hospitalDescription, hospitalPath, hospitals } from '@/lib/hospitals';
import { guidePath } from '@/lib/guides';

export const metadata: Metadata = {
  title: 'Hospital Discharge to Assisted Living in Metro Detroit | Homeward Senior Placement',
  description:
    'Free help finding assisted living or memory care after a discharge from Beaumont Royal Oak, Trinity Health Livonia, Henry Ford West Bloomfield, Michigan Medicine, or Trinity Health Ann Arbor.',
  alternates: { canonical: '/hospitals' },
};

export default function HospitalsIndex() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Senior living after a hospital or rehab discharge
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          When a Metro Detroit hospital says a parent cannot go home, the timeline is days, not months. We help families compare assisted living, memory care, and licensed residential care around the discharge date—at no cost to you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hospitals.map((hospital) => (
          <Link
            key={hospital.slug}
            href={hospitalPath(hospital.slug)}
            className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <p className="text-sm font-medium uppercase tracking-wide text-blue-900">{hospital.system}</p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-gray-900">{hospital.name}</h2>
            <p className="mt-2 text-gray-600">{hospitalDescription(hospital)}</p>
            <p className="mt-4 text-blue-900 font-medium">Read the discharge page</p>
          </Link>
        ))}
      </div>

      <p className="mt-10 text-center text-lg text-gray-600">
        Also see our guides on{' '}
        <Link href={guidePath('hospital-discharge-to-assisted-living')} className="text-blue-900 underline underline-offset-4">
          hospital discharge
        </Link>
        {' '}and{' '}
        <Link href={guidePath('after-a-fall-next-48-hours')} className="text-blue-900 underline underline-offset-4">
          the 48 hours after a fall
        </Link>
        .
      </p>
    </div>
  );
}
