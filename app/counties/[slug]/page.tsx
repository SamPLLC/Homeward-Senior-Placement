import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  counties,
  countyCities,
  countyDescription,
  countyPath,
  countyTitle,
  getCountyBySlug,
} from '@/lib/counties';
import { careTypes, countyCarePath } from '@/lib/care-types';
import { cityPath } from '@/lib/cities';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return counties.map((county) => ({ slug: county.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const county = getCountyBySlug(slug);
  if (!county) {
    return { title: 'Counties' };
  }
  const title = `${countyTitle(county)} | Homeward Senior Placement`;
  const description = countyDescription(county);
  const path = countyPath(county.slug);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: 'website' },
  };
}

export default async function CountyPage({ params }: PageProps) {
  const { slug } = await params;
  const county = getCountyBySlug(slug);
  if (!county) {
    notFound();
  }
  const localCities = countyCities(county);

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
          <li className="text-gray-700">{county.name}</li>
        </ol>
      </nav>

      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-900">Southeast Michigan</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Senior care in {county.name}
        </h1>
        <p className="mt-6 text-lg text-gray-600">{county.intro}</p>
        <p className="mt-4 text-lg text-gray-600">{county.details}</p>
        <p className="mt-4 text-lg text-gray-600">
          Hospitals families in this county often use include {county.hospitals}.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {county.notes.map((note) => (
          <div key={note} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-lg text-gray-700">{note}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">{county.name} by care type</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {careTypes.map((care) => (
            <Link
              key={care.slug}
              href={countyCarePath(county.slug, care.slug)}
              className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-gray-800 bg-white hover:border-blue-900 hover:text-blue-900"
            >
              {care.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Cities we serve in {county.name}</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {localCities.map((city) => (
            <Link
              key={city.slug}
              href={cityPath(city.slug)}
              className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-gray-800 bg-white hover:border-blue-900 hover:text-blue-900"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-xl bg-blue-50 p-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          Looking for senior care in {county.name}?
        </h2>
        <p className="mt-2 text-lg text-gray-700">There is no cost to families. We compare options and set up tours.</p>
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
