import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { cities, cityPath, getCityBySlug } from '@/lib/cities';
import { careTypes, cityCarePath, getCareTypeBySlug } from '@/lib/care-types';
import { countyPath } from '@/lib/counties';
import { guidePath } from '@/lib/guides';
import { servicePath } from '@/lib/services';
import { socialMetadata } from '@/lib/business';

type PageProps = {
  params: Promise<{ slug: string; care: string }>;
};

export function generateStaticParams() {
  return cities.flatMap((city) => careTypes.map((care) => ({ slug: city.slug, care: care.slug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, care: careSlug } = await params;
  const city = getCityBySlug(slug);
  const care = getCareTypeBySlug(careSlug);
  if (!city || !care) {
    return { title: 'Service Area' };
  }

  const title = `${care.metaName} in ${city.name}, MI | Homeward Senior Placement`;
  const description = `${care.intro(city)} Free local placement help from Homeward Senior Placement.`;
  const path = cityCarePath(city.slug, care.slug);

  return {
    title,
    description,
    alternates: { canonical: path },
    ...socialMetadata({ title, description, path }),
  };
}

export default async function CityCarePage({ params }: PageProps) {
  const { slug, care: careSlug } = await params;
  const city = getCityBySlug(slug);
  const care = getCareTypeBySlug(careSlug);
  if (!city || !care) {
    notFound();
  }

  const nearbyCities = city.nearby
    .map((nearbySlug) => getCityBySlug(nearbySlug))
    .filter((nearby): nearby is NonNullable<typeof nearby> => Boolean(nearby));
  const otherCares = careTypes.filter((item) => item.slug !== care.slug);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
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
          <li>
            <Link href={cityPath(city.slug)} className="hover:text-blue-800 underline-offset-4 hover:underline">
              {city.name}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-700">{care.name}</li>
        </ol>
      </nav>

      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-900">{city.county}</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          {care.name} in {city.name}, Michigan
        </h1>
        <p className="mt-6 text-lg text-gray-600">{care.intro(city)}</p>
        <p className="mt-4 text-lg text-gray-600">{care.details(city)}</p>
        <p className="mt-4 text-lg text-gray-600">
          Medical follow-up in this area often involves {city.hospitals}. We keep that in the match so the community is workable for family and for appointments—not only close on a map.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {care.points(city).map((point) => (
          <div key={point} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-lg text-gray-700">{point}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Other {city.name} care types</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {otherCares.map((item) => (
            <Link
              key={item.slug}
              href={cityCarePath(city.slug, item.slug)}
              className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-gray-800 bg-white hover:border-blue-900 hover:text-blue-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {nearbyCities.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Nearby {care.noun} searches
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {nearbyCities.map((nearby) => (
              <Link
                key={nearby.slug}
                href={cityCarePath(nearby.slug, care.slug)}
                className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-gray-800 bg-white hover:border-blue-900 hover:text-blue-900"
              >
                {nearby.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 text-lg text-gray-600 space-y-2">
        <p>
          Related:{' '}
          <Link href={servicePath(care.serviceSlug)} className="text-blue-900 underline underline-offset-4">
            {care.name} placement
          </Link>
          {' · '}
          <Link href={countyPath(city.countySlug)} className="text-blue-900 underline underline-offset-4">
            {city.county}
          </Link>
          {' · '}
          <Link href={guidePath(care.guideSlug)} className="text-blue-900 underline underline-offset-4">
            Family guide
          </Link>
        </p>
      </div>

      <div className="mt-12 rounded-xl bg-blue-50 p-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          Looking for {care.noun} in {city.name}?
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          Talk with a local advisor. There is no cost to families.
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
