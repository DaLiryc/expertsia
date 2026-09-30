import type { Metadata } from 'next';
import { dictionaries, type Locale } from '@/lib/dictionaries';

const BASE_URL = 'https://www.expertsia.dev';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = dictionaries[locale as Locale] || dictionaries.en;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: 'Cyril Marchand' }],
    robots: 'index, follow',
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        'en': `${BASE_URL}/en`,
        'fr': `${BASE_URL}/fr`,
        'x-default': `${BASE_URL}/en`,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${BASE_URL}/${locale}`,
      siteName: 'ExpertsIA',
      type: 'website',
      images: [{ url: `${BASE_URL}/og-card.png`, width: 1200, height: 630, alt: 'ExpertsIA' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: [`${BASE_URL}/og-card.png`],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = dictionaries[locale as Locale] || dictionaries.en;

  // Schema.org structured data
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ExpertsIA',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: dict.meta.description,
    founder: {
      '@type': 'Person',
      name: 'Cyril Marchand',
      jobTitle: 'AI Consultant & Founder',
      url: 'https://www.linkedin.com/in/marchandcyril/',
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Business Process Automation',
      'Machine Learning',
      'Data Science',
      'AI Training',
      'RAG Systems',
      'Process Optimization',
    ],
    offers: dict.services.items.map((s) => ({
      '@type': 'Service',
      name: s.title,
      description: s.description,
    })),
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ExpertsIA',
    url: BASE_URL,
    inLanguage: locale,
  };

  // Brand schema (Microsoft AEO/GEO pilier 1) — entite brand separee.
  const brandSchema = {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    name: 'ExpertsIA',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      'ExpertsIA is an AI consulting agency based in Bordeaux, France, helping SMBs audit processes, deploy agentic automations, and train their teams.',
  };

  return (
    <html lang={locale}>
      <head>
        {/* hreflang: set ONCE via generateMetadata alternates.languages.
            Manual <link> tags removed Sep 2 — they duplicated the metadata
            ones (every hreflang appeared 2x per page, seo report finding). */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
