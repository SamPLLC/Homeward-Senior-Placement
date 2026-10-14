import type { MetadataRoute } from 'next';
import { cities, cityPath } from '@/lib/cities';
import { services, servicePath } from '@/lib/services';

const SITE_URL = 'https://homewardseniors.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/services', '/how-it-works', '/areas', '/about', '/contact', '/privacy'];

  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.7,
    })),
    ...cities.map((city) => ({
      url: `${SITE_URL}${cityPath(city.slug)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...services.map((service) => ({
      url: `${SITE_URL}${servicePath(service.slug)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
