import type { MetadataRoute } from 'next';
import { mainLocations } from '@/data/locations';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = ['', '/services', '/locations', '/about', '/contact', '/our-auto-glass-shop'].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.7
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }));

  const locationRoutes = mainLocations.map((location) => ({
    url: `${siteConfig.siteUrl}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85
  }));

  return [...baseRoutes, ...serviceRoutes, ...locationRoutes];
}
