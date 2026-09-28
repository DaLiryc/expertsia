import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

const BASE_URL = 'https://www.expertsia.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['fr', 'en'];
  const lastModified = new Date();

  // Static pages
  const staticRoutes = locales.map((locale) => ({
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

  // Blog hub pages
  const blogHubRoutes = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}/blog`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // About page (AI-search key facts)
  const aboutRoutes = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}/about`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Funding page (high-value SEO target for French government aid keywords)
  const fundingRoutes = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}/financer-son-projet-ia`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const bookRoutes = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}/livre`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Booking/audit landing page
  const bookingRoutes = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}/book`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Pricing page (FR only — top commercial page, was missing from sitemap)
  const pricingRoutes = [
    {
      url: `${BASE_URL}/fr/tarifs`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  // Local landing page (Bordeaux — map pack + local keyword target)
  const localRoutes = [
    {
      url: `${BASE_URL}/fr/consultant-ia-bordeaux`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  // Agentic commerce governance landing page (FR+EN — new offer, high commercial priority)
  const agenticRoutes = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}/commerce-agentique`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
    alternates: {
      languages: {
        fr: `${BASE_URL}/fr/commerce-agentique`,
        en: `${BASE_URL}/en/commerce-agentique`,
      },
    },
  }));

  // Blog posts
  const allPosts = getAllPosts();
  const blogPostRoutes = allPosts.map((post) => ({
    url: `${BASE_URL}/${post.locale}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...aboutRoutes, ...fundingRoutes, ...bookRoutes, ...bookingRoutes, ...pricingRoutes, ...localRoutes, ...agenticRoutes, ...blogHubRoutes, ...blogPostRoutes];
}
