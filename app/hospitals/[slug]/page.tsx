import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  getHospitalBySlug,
  hospitalDescription,
  hospitalPath,
  hospitalTitle,
  hospitals,
} from '@/lib/hospitals';
import { cityPath, getCityBySlug } from '@/lib/cities';
import { getGuideBySlug, guidePath } from '@/lib/guides';
import { servicePath } from '@/lib/services';
import { LOGO_PATH, SITE_URL, providerRef, socialMetadata } from '@/lib/business';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return hospitals.map((hospital) => ({ slug: hospital.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const hospital = getHospitalBySlug(slug);
  if (!hospital) {
    return { title: 'Hospital discharge' };
  }
  const title = `${hospitalTitle(hospital)} | Homeward Senior Placement`;
  const description = hospitalDescription(hospital);
  const path = hospitalPath(hospital.slug);
  return {
    title,
    description,
    alternates: { canonical: path },
    ...socialMetadata({
      title,
      description,
      path,
      type: 'article',
      publishedTime: '2026-10-14',
      modifiedTime: '2026-10-14',
      authors: ['Homeward Senior Placement'],
    }),
  };
}

export default async function HospitalPage({ params }: PageProps) {
  const { slug } = await params;
  const hospital = getHospitalBySlug(slug);
  if (!hospital) {
    notFound();
  }

  const nearbyCities = hospital.nearbyCitySlugs
    .map((citySlug) => getCityBySlug(citySlug))
    .filter((city): city is NonNullable<typeof city> => Boolean(city));
  const relatedGuides = hospital.relatedGuideSlugs
    .map((guideSlug) => getGuideBySlug(guideSlug))
    .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));
  const otherHospitals = hospitals.filter((item) => item.slug !== hospital.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: hospitalTitle(hospital),
    description: hospitalDescription(hospital),
    datePublished: '2026-10-14',
    dateModified: '2026-10-14',
    author: providerRef(),
    publisher: providerRef(),
    image: `${SITE_URL}${LOGO_PATH}`,
    mainEntityOfPage: `${SITE_URL}${hospitalPath(hospital.slug)}`,
    about: {
      '@type': 'Hospital',
      name: hospital.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: hospital.city,
        addressRegion: 'MI',
      },
    },
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-blue-800 underline-offset-4 hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/hospitals" className="hover:text-blue-800 underline-offset-4 hover:underline">
              Hospital discharge
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-700">{hospital.shortName}</li>
        </ol>
      </nav>

      <article className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-900">{hospital.system}</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          {hospitalTitle(hospital)}
        </h1>
        <p className="mt-4 text-sm text-gray-500">
          By Homeward Senior Placement
          <span className="text-gray-400"> · </span>
          Local senior placement advisors in Southeast Michigan
          <span className="text-gray-400"> · </span>
          Updated October 14, 2026
        </p>
        <p className="mt-6 text-lg text-gray-600">{hospital.intro}</p>
        <p className="mt-4 text-lg text-gray-600">{hospital.details}</p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            What a discharge from {hospital.shortName} usually means
          </h2>
          <p className="mt-4 text-lg text-gray-600">{hospital.discharge}</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Paperwork and timing</h2>
          <p className="mt-4 text-lg text-gray-600">{hospital.paperwork}</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Where families usually look next</h2>
          <p className="mt-4 text-lg text-gray-600">{hospital.nearby}</p>
        </section>
      </article>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {hospital.notes.map((note) => (
          <div key={note} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-lg text-gray-700">{note}</p>
          </div>
        ))}
      </div>

      {nearbyCities.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Cities families often consider</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {nearbyCities.map((city) => (
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
      )}

      <div className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Related guides and services</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={servicePath('hospital-rehab-transitions')}
            className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-gray-800 bg-white hover:border-blue-900 hover:text-blue-900"
          >
            Hospital &amp; rehab transitions
          </Link>
          {relatedGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={guidePath(guide.slug)}
              className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-gray-800 bg-white hover:border-blue-900 hover:text-blue-900"
            >
              {guide.title}
            </Link>
          ))}
        </div>
      </div>

      {otherHospitals.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Other Metro Detroit hospitals</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {otherHospitals.map((item) => (
              <Link
                key={item.slug}
                href={hospitalPath(item.slug)}
                className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-gray-800 bg-white hover:border-blue-900 hover:text-blue-900"
              >
                {item.shortName}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 max-w-3xl rounded-xl bg-blue-50 p-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          Need a next setting before the discharge date?
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          Call us while your loved one is still in the hospital. We check openings and paperwork around {hospital.shortName} at no cost to families.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:2489964637"
            className="inline-flex items-center justify-center rounded-lg border border-blue-900 text-blue-900 px-6 py-3 font-medium hover:bg-white"
          >
            Call (248) 996-4637
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-6 py-3 text-white font-medium hover:bg-blue-800"
          >
            Schedule a free consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
