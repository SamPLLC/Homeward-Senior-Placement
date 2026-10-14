import Link from 'next/link';
import type { Metadata } from 'next';
import { cityPath } from '@/lib/cities';
import { counties, countyCities, countyPath } from '@/lib/counties';
import { careTypes, countyCarePath } from '@/lib/care-types';

export const metadata: Metadata = {
  title: 'Senior Care Service Areas in Southeast Michigan | Homeward Senior Placement',
  description:
    'Homeward Senior Placement helps families find assisted living, memory care, and residential care across Oakland, Wayne, Macomb, Washtenaw, and Livingston counties—including Farmington Hills, Novi, Troy, Ann Arbor, Dearborn, and more.',
  alternates: { canonical: '/areas' },
};

export default function Areas() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Service Areas</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We help families across Southeast Michigan find assisted living, memory care, and residential care. Choose a county or a city to see local pages built for those searches.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {counties.map((county) => (
          <Link
            key={county.slug}
            href={countyPath(county.slug)}
            className="inline-flex items-center rounded-full border border-blue-900 px-4 py-2 text-blue-900 bg-white hover:bg-blue-50"
          >
            {county.name}
          </Link>
        ))}
      </div>

      <div className="space-y-12">
        {counties.map((county) => {
          const localCities = countyCities(county);
          return (
            <section key={county.slug}>
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                  <Link href={countyPath(county.slug)} className="hover:text-blue-900">
                    {county.name}
                  </Link>
                </h2>
                <div className="flex flex-wrap gap-2 text-sm">
                  {careTypes.map((care) => (
                    <Link
                      key={care.slug}
                      href={countyCarePath(county.slug, care.slug)}
                      className="text-blue-900 underline underline-offset-4"
                    >
                      {care.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {localCities.map((city) => (
                  <Link
                    key={`${county.slug}-${city.slug}`}
                    href={cityPath(city.slug)}
                    className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-gray-800 bg-white hover:border-blue-900 hover:text-blue-900"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
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
