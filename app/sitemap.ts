import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.expertsia.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['fr', 'en'];
  const lastModified = new Date();

  const routes = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: locale === 'fr' ? 1.0 : 0.8,
    alternates: {
      languages: {
        fr: `${BASE_URL}/fr`,
        en: `${BASE_URL}/en`,
      },
    },
  }));

  return routes;
}
