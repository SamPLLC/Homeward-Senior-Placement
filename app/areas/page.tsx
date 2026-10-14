import Link from 'next/link';
import type { Metadata } from 'next';
import { cities, cityPath } from '@/lib/cities';

export const metadata: Metadata = {
  title: 'Senior Care Service Areas in Southeast Michigan | Homeward Senior Placement',
  description:
    'Homeward Senior Placement helps families find assisted living, memory care, and home care in Farmington Hills, Bloomfield Hills, Bloomfield Township, Northville, Plymouth, Livonia, Novi, Ann Arbor, Troy, and more of Southeast Michigan.',
  alternates: { canonical: '/areas' },
};

export default function Areas() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Service Areas</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We help families across Southeast Michigan find the right assisted living, memory care, and home care—fast and locally. Choose a city to learn how we help there.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={cityPath(city.slug)}
            className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-gray-800 bg-white hover:border-blue-900 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <strong className="mr-1">{city.name}</strong>
          </Link>
        ))}
        <span className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-gray-700 bg-white">
          and more across SE Michigan
        </span>
      </div>

      <div className="mt-12 rounded-xl bg-blue-50 p-6 text-center">
        <p className="text-lg text-gray-700">Not sure where to start? Talk to a local advisor.</p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:2489964637"
            className="inline-flex items-center justify-center rounded-lg border border-blue-900 text-blue-900 px-6 py-3 font-medium hover:bg-blue-50"
          >
            Call (248) 996-4637
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-6 py-3 text-white font-medium hover:bg-blue-800"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
