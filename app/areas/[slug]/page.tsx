import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  cities,
  cityDescription,
  cityPath,
  cityTitle,
  getCityBySlug,
} from '@/lib/cities';
import { careTypes, cityCarePath } from '@/lib/care-types';
import { countyPath } from '@/lib/counties';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) {
    return { title: 'Service Area' };
  }

  const title = `${cityTitle(city)} | Homeward Senior Placement`;
  const description = cityDescription(city);
  const path = cityPath(city.slug);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) {
    notFound();
  }

  const nearbyCities = city.nearby
    .map((nearbySlug) => getCityBySlug(nearbySlug))
    .filter((nearby): nearby is NonNullable<typeof nearby> => Boolean(nearby));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Senior placement in ${city.name}, Michigan`,
    serviceType: ['Assisted living placement', 'Memory care placement', 'Home care referral'],
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: city.county,
      },
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Homeward Senior Placement',
      telephone: '+1-248-996-4637',
      email: 'homewardseniors@gmail.com',
      url: 'https://homewardseniors.com',
      areaServed: 'Southeast Michigan',
    },
    description: cityDescription(city),
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-blue-800 underline-offset-4 hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/areas" className="hover:text-blue-800 underline-offset-4 hover:underline">
              Areas we serve
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-700">{city.name}</li>
        </ol>
      </nav>

      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-900">
          <Link href={countyPath(city.countySlug)} className="hover:underline underline-offset-4">
            {city.county}
          </Link>
        </p>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Senior care in {city.name}, Michigan
        </h1>
        <p className="mt-6 text-lg text-gray-600">{city.intro}</p>
        <p className="mt-4 text-lg text-gray-600">{city.details}</p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {city.notes.map((note) => (
          <div key={note} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-lg text-gray-700">{note}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {careTypes.map((care) => (
          <Link
            key={care.slug}
            href={cityCarePath(city.slug, care.slug)}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-blue-900"
          >
            <h2 className="text-xl font-semibold tracking-tight text-gray-900">
              {care.name} in {city.name}
            </h2>
            <p className="mt-2 text-lg text-gray-600">{care.intro(city)}</p>
            <p className="mt-4 text-blue-900 font-medium">Learn more</p>
          </Link>
        ))}
      </div>

      {nearbyCities.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Nearby areas we also serve</h2>
          <p className="mt-2 text-gray-600">
            If {city.name} is full, over budget, or not the right care level, these nearby cities are often a strong next look.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {nearbyCities.map((nearby) => (
              <Link
                key={nearby.slug}
                href={cityPath(nearby.slug)}
                className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-gray-800 bg-white hover:border-blue-900 hover:text-blue-900"
              >
                {nearby.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 rounded-xl bg-blue-50 p-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          Looking for senior care in {city.name}?
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          Talk with a local advisor. There is no cost to families—we compare options and set up tours for you.
        </p>
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
