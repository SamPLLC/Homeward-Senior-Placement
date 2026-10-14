import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { cities, cityPath } from '@/lib/cities';
import { services, servicePath } from '@/lib/services';
import { counties, countyPath } from '@/lib/counties';
import { guides, guidePath } from '@/lib/guides';

export const metadata: Metadata = {
  title: 'Free Assisted Living & Memory Care Placement in Southeast Michigan',
  description:
    'Homeward Senior Placement helps Michigan families compare assisted living, memory care, residential care homes, and hospital-to-home options at no cost. Serving Farmington Hills, Novi, Bloomfield Hills, Troy, Ann Arbor, and more.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Free Assisted Living & Memory Care Placement in Southeast Michigan',
    description:
      'Compare senior living options with a local advisor. No cost to families. Serving Southeast Michigan.',
    url: '/',
    type: 'website',
  },
};

const steps = [
  {
    n: '1',
    title: 'Consultation',
    body: 'We learn your loved one’s needs, budget, location, and timeline—by phone or in person.',
    href: '/services/personalized-care-assessments',
  },
  {
    n: '2',
    title: 'Matching',
    body: 'We compare communities that fit, including care, pricing, and availability.',
    href: '/services/community-comparisons',
  },
  {
    n: '3',
    title: 'Tours',
    body: 'We arrange visits and help you ask the right questions at each community.',
    href: '/how-it-works',
  },
  {
    n: '4',
    title: 'Placement',
    body: 'We help with next steps so the transition is organized, not rushed.',
    href: '/contact',
  },
];

const faqs = [
  {
    question: 'Is this service really free for families?',
    answer:
      'Yes. There is no cost to families. Homeward Senior Placement is paid by partner communities, so you can get comparisons and placement help without a family fee.',
  },
  {
    question: 'How fast can you find senior living options?',
    answer:
      'Many families receive 3–5 tailored options within 24 hours of a consultation, depending on care needs, budget, and which communities have availability.',
  },
  {
    question: 'Do you only help with assisted living?',
    answer:
      'No. We help with personalized care assessments, assisted living, memory care, residential care homes, hospital and rehabilitation transitions, and community comparisons.',
  },
  {
    question: 'What if my parent is leaving the hospital or rehab this week?',
    answer:
      'We can help on a short timeline. We look at which communities can admit soon, what paperwork they need, and which setting is the safer next step after discharge.',
  },
  {
    question: 'Which cities in Michigan do you serve?',
    answer:
      'We help families across Southeast Michigan, including Farmington Hills, Northville, Plymouth, Livonia, West Bloomfield, Bloomfield Hills, Bloomfield Township, Novi, Ann Arbor, Troy, Sterling Heights, Rochester Hills, Canton, Southfield, and Royal Oak.',
  },
  {
    question: 'Do you work for one community, or compare several?',
    answer:
      'We compare multiple communities. Our role is to help you understand the differences in care, cost, and fit—not to fill a single building.',
  },
];

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: 'Homeward Senior Placement',
        url: 'https://homewardseniors.com',
        telephone: '+1-248-996-4637',
        email: 'homewardseniors@gmail.com',
        areaServed: 'Southeast Michigan',
        description:
          'Free local senior placement help for assisted living, memory care, residential care homes, and hospital-to-home transitions.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-blue-50">
        <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative z-20 order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Free local help finding assisted living and memory care in Southeast Michigan.
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl">
                We compare communities, explain the differences, and guide your family step by step—at no cost to you.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-6 py-3 text-white font-medium hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Get Help
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-lg border border-blue-900 text-blue-900 px-6 py-3 font-medium hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  See our services
                </Link>
              </div>
              <p className="mt-5 text-base md:text-lg text-gray-800">
                Call{' '}
                <a className="font-semibold text-blue-900 underline underline-offset-4" href="tel:2489964637">
                  (248) 996-4637
                </a>
                <span className="text-gray-600"> · 8am–7pm</span>
              </p>
            </div>

            <div className="order-1 md:order-2 bg-blue-50">
              <Image
                src="/homeward new image.png"
                alt="Homeward Senior Placement helping Michigan families find assisted living and memory care"
                width={1688}
                height={1126}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto">
            There is no cost to families. Partner communities pay for our service, so we can compare options and recommend what fits your loved one—not a single building.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Senior placement services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              From the first conversation through move-in, we help you understand the options and choose with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={servicePath(service.slug)}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <h3 className="text-xl font-semibold tracking-tight text-gray-900">{service.name}</h3>
                <p className="mt-2 text-gray-600">{service.summary}</p>
                <p className="mt-4 text-blue-900 font-medium">Learn more</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">How it works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              A straightforward process designed for families who need clear options, not a stack of brochures.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <Link
                key={step.n}
                href={step.href}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <p className="text-sm font-medium uppercase tracking-wide text-blue-900">Step {step.n}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.body}</p>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/how-it-works" className="text-blue-900 font-medium underline underline-offset-4">
              See the full process
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Areas we serve</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Local guidance for families across Southeast Michigan. Choose a city to see how we help there.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={cityPath(city.slug)}
                className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-gray-800 bg-white hover:border-blue-900 hover:text-blue-900"
              >
                {city.name}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
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
          <p className="mt-8 text-center">
            <Link href="/areas" className="text-blue-900 font-medium underline underline-offset-4">
              View all service areas
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Guides for families</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Answers to the searches families make before they know who to call—cost, memory care, hospital discharge, and how placement works.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.slice(0, 6).map((guide) => (
              <Link
                key={guide.slug}
                href={guidePath(guide.slug)}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-900"
              >
                <h3 className="text-xl font-semibold tracking-tight text-gray-900">{guide.title}</h3>
                <p className="mt-2 text-gray-600">{guide.description}</p>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/guides" className="text-blue-900 font-medium underline underline-offset-4">
              See all guides
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Common questions about senior placement
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-xl font-semibold tracking-tight text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-lg text-gray-600">{faq.answer}</p>
              </div>
            ))}
            <p className="text-lg text-gray-600">
              Learn more about{' '}
              <Link href="/services/assisted-living" className="text-blue-900 underline underline-offset-4">
                assisted living
              </Link>
              ,{' '}
              <Link href="/services/memory-care" className="text-blue-900 underline underline-offset-4">
                memory care
              </Link>
              ,{' '}
              <Link href="/services/hospital-rehab-transitions" className="text-blue-900 underline underline-offset-4">
                hospital transitions
              </Link>
              ,{' '}
              <Link href="/areas" className="text-blue-900 underline underline-offset-4">
                the cities we serve
              </Link>
              , and our{' '}
              <Link href="/guides" className="text-blue-900 underline underline-offset-4">
                family guides
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
          <div className="rounded-2xl bg-blue-50 px-6 py-10 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
              Get 3–5 tailored options within 24 hours
            </h2>
            <p className="mt-2 text-lg text-gray-600">Speak with a local advisor who understands Michigan communities.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:2489964637"
                className="inline-flex items-center justify-center rounded-lg border border-blue-900 text-blue-900 px-6 py-3 font-medium hover:bg-white"
              >
                Call (248) 996-4637
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-6 py-3 text-white font-medium hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Schedule a free consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50">
        <div className="max-w-screen-xl mx-auto px-4 py-3 text-center text-sm md:text-base text-blue-900">
          Talk to a local advisor today:{' '}
          <a className="underline underline-offset-4" href="tel:2489964637">
            (248) 996-4637
          </a>{' '}
          •{' '}
          <a className="underline underline-offset-4" href="mailto:homewardseniors@gmail.com">
            homewardseniors@gmail.com
          </a>{' '}
          • 8am–7pm
        </div>
      </section>
    </div>
  );
}
