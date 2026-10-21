import type { Metadata } from 'next';
import { counties } from '@/lib/counties';
import { services } from '@/lib/services';

export const SITE_URL = 'https://homewardseniors.com';
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const BUSINESS_NAME = 'Homeward Senior Placement';
export const BUSINESS_PHONE_DISPLAY = '(248) 996-4637';
export const BUSINESS_PHONE_TEL = '2489964637';
export const BUSINESS_PHONE_E164 = '+1-248-996-4637';
export const BUSINESS_EMAIL = 'homewardseniors@gmail.com';
export const BUSINESS_HOURS_DISPLAY = 'Monday–Sunday, 8am–7pm';
export const BUSINESS_CITY = 'Farmington Hills';
export const BUSINESS_REGION = 'MI';
export const BUSINESS_COUNTRY = 'US';
export const BUSINESS_AREA = 'Southeast Michigan';
export const BUSINESS_LOCALITY = `${BUSINESS_CITY}, ${BUSINESS_REGION}`;
export const LOGO_PATH = '/google-pic.png';
export const OG_IMAGE_PATH = '/homeward new image.png';
export const WORDMARK_PATH = '/logo.png';

export const BUSINESS_DESCRIPTION =
  'Free senior placement help for assisted living, memory care, residential care homes, and hospital-to-home transitions in Farmington Hills and Southeast Michigan.';

export const DEFAULT_TITLE = 'Homeward Senior Placement | Free Assisted Living Help in Michigan';
export const DEFAULT_DESCRIPTION =
  'Free senior placement in Farmington Hills and Southeast Michigan. Compare assisted living, memory care, and residential care with a local advisor. Call (248) 996-4637.';

export const ogImages = [
  {
    url: OG_IMAGE_PATH,
    width: 1688,
    height: 1126,
    alt: 'Homeward Senior Placement helping Michigan families find assisted living and memory care',
  },
  {
    url: WORDMARK_PATH,
    width: 1200,
    height: 630,
    alt: 'Homeward Senior Placement',
  },
];

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized.replace(/ /g, '%20')}`;
}

export function providerRef() {
  return {
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': BUSINESS_ID,
    name: BUSINESS_NAME,
  };
}

export function businessJsonLd() {
  return {
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': BUSINESS_ID,
    name: BUSINESS_NAME,
    legalName: BUSINESS_NAME,
    url: SITE_URL,
    image: [absoluteUrl(LOGO_PATH), absoluteUrl(OG_IMAGE_PATH)],
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl(LOGO_PATH),
      contentUrl: absoluteUrl(LOGO_PATH),
    },
    telephone: BUSINESS_PHONE_E164,
    email: BUSINESS_EMAIL,
    description: BUSINESS_DESCRIPTION,
    slogan: '#1 senior advisor service in Michigan',
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS_CITY,
      addressRegion: BUSINESS_REGION,
      addressCountry: BUSINESS_COUNTRY,
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: BUSINESS_AREA,
        containedInPlace: { '@type': 'State', name: 'Michigan' },
      },
      ...counties.map((county) => ({
        '@type': 'AdministrativeArea',
        name: county.name,
        containedInPlace: { '@type': 'State', name: 'Michigan' },
      })),
    ],
    openingHours: 'Mo-Su 08:00-19:00',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: DAYS,
      opens: '08:00',
      closes: '19:00',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS_PHONE_E164,
      email: BUSINESS_EMAIL,
      contactType: 'customer service',
      areaServed: 'US-MI',
      availableLanguage: ['English'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: DAYS,
        opens: '08:00',
        closes: '19:00',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Senior placement services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.summary,
          url: absoluteUrl(`/services/${service.slug}`),
        },
        price: '0',
        priceCurrency: 'USD',
      })),
    },
    knowsAbout: [
      'Assisted living placement',
      'Memory care placement',
      'Residential care homes',
      'Adult foster care',
      'Hospital discharge planning',
      'Senior living in Southeast Michigan',
    ],
  };
}

export function websiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: BUSINESS_NAME,
    description: DEFAULT_DESCRIPTION,
    inLanguage: 'en-US',
    publisher: { '@id': BUSINESS_ID },
  };
}

export function siteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [businessJsonLd(), websiteJsonLd()],
  };
}

export function socialMetadata({
  title,
  description,
  path,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
}: {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}): Pick<Metadata, 'openGraph' | 'twitter'> {
  const openGraph =
    type === 'article'
      ? {
          title,
          description,
          url: path,
          type: 'article' as const,
          siteName: BUSINESS_NAME,
          locale: 'en_US' as const,
          images: ogImages,
          publishedTime,
          modifiedTime,
          authors,
        }
      : {
          title,
          description,
          url: path,
          type: 'website' as const,
          siteName: BUSINESS_NAME,
          locale: 'en_US' as const,
          images: ogImages,
        };

  return {
    openGraph,
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}
