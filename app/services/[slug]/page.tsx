import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  getServiceBySlug,
  serviceDescription,
  servicePath,
  serviceTitle,
  services,
} from '@/lib/services';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: 'Services' };
  }

  const title = `${serviceTitle(service)} | Homeward Senior Placement`;
  const description = serviceDescription(service);
  const path = servicePath(service.slug);

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

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }

  const otherServices = services.filter((item) => item.slug !== service.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: serviceDescription(service),
    provider: {
      '@type': 'LocalBusiness',
      name: 'Homeward Senior Placement',
      telephone: '+1-248-996-4637',
      email: 'homewardseniors@gmail.com',
      url: 'https://homewardseniors.com',
      areaServed: 'Southeast Michigan',
    },
    areaServed: 'Southeast Michigan',
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
            <Link href="/services" className="hover:text-blue-800 underline-offset-4 hover:underline">
              Services
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-700">{service.name}</li>
        </ol>
      </nav>

      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">{service.name}</h1>
        {service.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-6 text-lg text-gray-600">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {service.points.map((point) => (
          <div key={point} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-lg text-gray-700">{point}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Other services</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {otherServices.map((item) => (
            <Link
              key={item.slug}
              href={servicePath(item.slug)}
              className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-gray-800 bg-white hover:border-blue-900 hover:text-blue-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-xl bg-blue-50 p-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          Guidance You Can Trust, at No Cost to Families
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          Schedule your free consultation today. There is no cost to families—we help you compare options and take the next step.
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
            Schedule Your Free Consultation Today
          </Link>
        </div>
      </div>
    </div>
  );
}
