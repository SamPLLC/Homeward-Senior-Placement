import type { Metadata } from 'next';
import AssessmentForm from '@/components/AssessmentForm';
import { cityNameForSlug } from '@/lib/assessment';
import {
  BUSINESS_HOURS_DISPLAY,
  BUSINESS_LICENSE,
  BUSINESS_NAME,
  BUSINESS_OWNER,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
  socialMetadata,
} from '@/lib/business';

const title = 'Find senior care in Oakland County | Homeward Senior Placement';
const description =
  'A short assessment for adult children looking at assisted living, memory care, independent living, or residential care in Oakland County, Michigan. Share the city, timeline, and budget band. We call you back.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/start' },
  ...socialMetadata({ title, description, path: '/start' }),
};

type PageProps = {
  searchParams: Promise<{ city?: string }>;
};

export default async function StartPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const city = Array.isArray(params.city) ? params.city[0] : params.city;
  const cityName = cityNameForSlug(city);

  return (
    <div className="bg-blue-50">
      <div className="mx-auto max-w-xl px-4 py-10 md:py-16">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-900">Oakland County senior placement</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">Tell us what your family needs.</h1>
        <p className="mt-4 text-lg text-gray-700">
          {BUSINESS_OWNER} at {BUSINESS_NAME}, based in Farmington Hills, helps adult children compare assisted living,
          memory care, independent living, and smaller residential homes across Oakland County.
          {cityName ? ` This form starts with ${cityName}.` : ''} There is no cost to families. Partner communities pay
          for the service.
        </p>
        {BUSINESS_LICENSE ? (
          <p className="mt-3 text-base text-gray-700">License: {BUSINESS_LICENSE}</p>
        ) : null}
        <p className="mt-3 text-base text-gray-700">
          Prefer to talk now? Call{' '}
          <a className="font-semibold text-blue-900 underline underline-offset-4" href={`tel:${BUSINESS_PHONE_TEL}`}>
            {BUSINESS_PHONE_DISPLAY}
          </a>
          . {BUSINESS_HOURS_DISPLAY}.
        </p>
        <div className="mt-8">
          <AssessmentForm initialCitySlug={cityName ? city : ''} />
        </div>
      </div>
    </div>
  );
}
