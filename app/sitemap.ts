import type { MetadataRoute } from 'next';
import { cities, cityPath } from '@/lib/cities';
import { services, servicePath } from '@/lib/services';
import { careTypes, cityCarePath, countyCarePath } from '@/lib/care-types';
import { counties, countyPath } from '@/lib/counties';
import { guides, guidePath } from '@/lib/guides';
import { hospitals, hospitalPath } from '@/lib/hospitals';

const SITE_URL = 'https://homewardseniors.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/services', '/how-it-works', '/areas', '/about', '/contact', '/privacy', '/guides', '/hospitals'];

  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.7,
    })),
    ...guides.map((guide) => ({
      url: `${SITE_URL}${guidePath(guide.slug)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...hospitals.map((hospital) => ({
      url: `${SITE_URL}${hospitalPath(hospital.slug)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...counties.map((county) => ({
      url: `${SITE_URL}${countyPath(county.slug)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...counties.flatMap((county) =>
      careTypes.map((care) => ({
        url: `${SITE_URL}${countyCarePath(county.slug, care.slug)}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.75,
      })),
    ),
    ...cities.map((city) => ({
      url: `${SITE_URL}${cityPath(city.slug)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...cities.flatMap((city) =>
      careTypes.map((care) => ({
        url: `${SITE_URL}${cityCarePath(city.slug, care.slug)}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.75,
      })),
    ),
    ...services.map((service) => ({
      url: `${SITE_URL}${servicePath(service.slug)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
