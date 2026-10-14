import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getGuideBySlug, guidePath, guides } from '@/lib/guides';
import { getServiceBySlug, servicePath } from '@/lib/services';

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
  return {
    title,
    description: guide.description,
    alternates: { canonical: guidePath(guide.slug) },
    openGraph: { title, description: guide.description, url: guidePath(guide.slug), type: 'article' },
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    author: { '@type': 'Organization', name: 'Homeward Senior Placement' },
    publisher: { '@type': 'Organization', name: 'Homeward Senior Placement' },
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
      </article>

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
