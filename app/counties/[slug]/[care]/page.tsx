import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { counties, countyCities, countyPath, getCountyBySlug } from '@/lib/counties';
import { careTypes, cityCarePath, countyCarePath, getCareTypeBySlug } from '@/lib/care-types';
import { guidePath } from '@/lib/guides';
import { servicePath } from '@/lib/services';

type PageProps = {
  params: Promise<{ slug: string; care: string }>;
};

export function generateStaticParams() {
  return counties.flatMap((county) => careTypes.map((care) => ({ slug: county.slug, care: care.slug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, care: careSlug } = await params;
  const county = getCountyBySlug(slug);
  const care = getCareTypeBySlug(careSlug);
  if (!county || !care) {
    return { title: 'Counties' };
  }
  const title = `${care.metaName} in ${county.name}, MI | Homeward Senior Placement`;
  const localCities = countyCities(county);
  const cityNames = localCities.map((city) => city.name).join(', ');
  const description = care.countyIntro(county.name, cityNames);
  const path = countyCarePath(county.slug, care.slug);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: 'website' },
  };
}

export default async function CountyCarePage({ params }: PageProps) {
  const { slug, care: careSlug } = await params;
  const county = getCountyBySlug(slug);
  const care = getCareTypeBySlug(careSlug);
  if (!county || !care) {
    notFound();
  }
  const localCities = countyCities(county);
  const cityNames = localCities.map((city) => city.name).join(', ');
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
            <Link href={countyPath(county.slug)} className="hover:text-blue-800 underline-offset-4 hover:underline">
              {county.name}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-700">{care.name}</li>
        </ol>
      </nav>

      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-900">{county.name}</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          {care.name} in {county.name}
        </h1>
        <p className="mt-6 text-lg text-gray-600">{care.countyIntro(county.name, cityNames)}</p>
        <p className="mt-4 text-lg text-gray-600">{care.countyDetails(county.name)}</p>
        <p className="mt-4 text-lg text-gray-600">
          Families in this county often use {county.hospitals}. We keep medical access and visit distance in the same comparison as cost and care.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          {care.name} by city in {county.name}
        </h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {localCities.map((city) => (
            <Link
              key={city.slug}
              href={cityCarePath(city.slug, care.slug)}
              className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-gray-800 bg-white hover:border-blue-900 hover:text-blue-900"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Other {county.name} searches</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {otherCares.map((item) => (
            <Link
              key={item.slug}
              href={countyCarePath(county.slug, item.slug)}
              className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-gray-800 bg-white hover:border-blue-900 hover:text-blue-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <p className="mt-6 text-lg text-gray-600">
          See all{' '}
          <Link href={countyPath(county.slug)} className="text-blue-900 underline underline-offset-4">
            {county.name} cities
          </Link>
          , our{' '}
          <Link href={servicePath(care.serviceSlug)} className="text-blue-900 underline underline-offset-4">
            {care.name.toLowerCase()} service
          </Link>
          , and the guide{' '}
          <Link href={guidePath(care.guideSlug)} className="text-blue-900 underline underline-offset-4">
            for families
          </Link>
          .
        </p>
      </div>

      <div className="mt-12 rounded-xl bg-blue-50 p-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          Need {care.noun} in {county.name}?
        </h2>
        <p className="mt-2 text-lg text-gray-700">Free local help. We compare communities and coordinate next steps.</p>
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
