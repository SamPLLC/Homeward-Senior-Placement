import Link from 'next/link';
import type { Metadata } from 'next';
import { services, servicePath } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Senior Placement Services in Michigan | Homeward Senior Placement',
  description:
    'Free help with personalized care assessments, assisted living, memory care, residential care homes, hospital transitions, and community comparisons in Southeast Michigan.',
  alternates: { canonical: '/services' },
};

export default function Services() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Services</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We compare options, coordinate tours, and guide your family through each decision—at no cost to you. Choose a service to learn more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link
            key={service.slug}
            href={servicePath(service.slug)}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <p className="text-sm font-medium uppercase tracking-wide text-blue-900">{index + 1}</p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-gray-900">{service.name}</h2>
            <p className="mt-2 text-lg text-gray-600">{service.summary}</p>
            <p className="mt-4 text-blue-900 font-medium">Learn more</p>
          </Link>
        ))}
      </div>

      <div className="mt-16 rounded-xl bg-blue-50 p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
          Guidance You Can Trust, at No Cost to Families
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Our mission is to make finding senior care simpler, more transparent, and less stressful.
        </p>
        <p className="mt-3 text-lg text-gray-700 max-w-3xl mx-auto">
          Whether you&apos;re planning for future care or searching for an immediate solution, Homeward Senior Placement is here to help you make a confident, informed decision.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-6 py-3 text-white font-medium hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Schedule Your Free Consultation Today
          </Link>
        </div>
      </div>
    </div>
  );
}
