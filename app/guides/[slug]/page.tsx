import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  formatGuideDate,
  getGuideBySlug,
  GUIDE_AUTHOR,
  GUIDE_AUTHOR_ROLE,
  guidePath,
  guidePublished,
  guideUpdated,
  guides,
} from '@/lib/guides';
import { getServiceBySlug, servicePath } from '@/lib/services';
import { hospitalPath, hospitals } from '@/lib/hospitals';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) {
    return { title: 'Guides' };
  }
  const title = `${guide.title} | Homeward Senior Placement`;
  const published = guidePublished(guide);
  const updated = guideUpdated(guide);
  return {
    title,
    description: guide.description,
    alternates: { canonical: guidePath(guide.slug) },
    openGraph: {
      title,
      description: guide.description,
      url: guidePath(guide.slug),
      type: 'article',
      publishedTime: published,
      modifiedTime: updated,
      authors: [GUIDE_AUTHOR],
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) {
    notFound();
  }

  const relatedGuides = guide.relatedGuideSlugs
    .map((relatedSlug) => getGuideBySlug(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const relatedServices = guide.relatedServiceSlugs
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const published = guidePublished(guide);
  const updated = guideUpdated(guide);
  const showHospitals =
    guide.slug === 'hospital-discharge-to-assisted-living' || guide.slug === 'after-a-fall-next-48-hours';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    datePublished: published,
    dateModified: updated,
    author: {
      '@type': 'Organization',
      name: GUIDE_AUTHOR,
      description: GUIDE_AUTHOR_ROLE,
    },
    publisher: { '@type': 'Organization', name: GUIDE_AUTHOR },
    mainEntityOfPage: `https://homewardseniors.com${guidePath(guide.slug)}`,
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
            <Link href="/guides" className="hover:text-blue-800 underline-offset-4 hover:underline">
              Guides
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-700">{guide.title}</li>
        </ol>
      </nav>

      <article className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">{guide.title}</h1>
        <p className="mt-4 text-sm text-gray-500">
          By {GUIDE_AUTHOR}
          <span className="text-gray-400"> · </span>
          {GUIDE_AUTHOR_ROLE}
          <span className="text-gray-400"> · </span>
          Updated {formatGuideDate(updated)}
        </p>
        <p className="mt-6 text-lg text-gray-600">{guide.intro}</p>
        {guide.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-lg text-gray-600">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
        {guide.slug === 'michigan-assisted-living-licensing' && (
          <p className="mt-8 text-lg text-gray-600">
            Confirm a current license on the state site:{' '}
            <a
              href="https://www.michigan.gov/lara/bureau-list/bchs"
              className="text-blue-900 underline underline-offset-4"
              rel="noopener noreferrer"
            >
              LARA Bureau of Community and Health Systems
            </a>
            , including{' '}
            <a
              href="https://www.michigan.gov/lara/bureau-list/bchs/adult"
              className="text-blue-900 underline underline-offset-4"
              rel="noopener noreferrer"
            >
              adult foster care lookup
            </a>
            .
          </p>
        )}
      </article>

      {showHospitals && (
        <div className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Hospital discharge pages</h2>
          <p className="mt-2 text-gray-600">
            If your loved one is leaving one of these campuses, start with the local page.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {hospitals.map((hospital) => (
              <Link
                key={hospital.slug}
                href={hospitalPath(hospital.slug)}
                className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-gray-800 bg-white hover:border-blue-900 hover:text-blue-900"
              >
                {hospital.shortName}
              </Link>
            ))}
          </div>
        </div>
      )}

      {(relatedServices.length > 0 || relatedGuides.length > 0) && (
        <div className="mt-12 max-w-3xl">
          {relatedServices.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Related services</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={servicePath(service.slug)}
                    className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-gray-800 bg-white hover:border-blue-900 hover:text-blue-900"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
          {relatedGuides.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Related guides</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {relatedGuides.map((item) => (
                  <Link
                    key={item.slug}
                    href={guidePath(item.slug)}
                    className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-gray-800 bg-white hover:border-blue-900 hover:text-blue-900"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-12 max-w-3xl rounded-xl bg-blue-50 p-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Want help applying this to your family?</h2>
        <p className="mt-2 text-lg text-gray-700">
          A free consultation can turn this into a short list of communities in the cities you can actually visit.
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
