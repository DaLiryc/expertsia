import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ExpertsIA - AI Business Transformation',
  description: 'AI Business Transformation for Startups & Corporations. We help organizations optimize business processes, implement agentic workflows, and train teams for the AI era. Grounded in business operations, powered by technology.',
  keywords: 'AI business transformation, AI consulting, AI strategy, agentic workflows, RAG systems, n8n automation, AI training, change management, data infrastructure, machine learning, data science, corporate AI, startup AI',
  authors: [{ name: 'Cyril Marchand' }],
  openGraph: {
    type: 'website',
    siteName: 'ExpertsIA',
    title: 'ExpertsIA - AI Business Transformation',
    description: 'AI Business Transformation for Startups & Corporations. We help organizations optimize business processes, implement agentic workflows, and train teams for the AI era. Grounded in business operations, powered by technology.',
    url: 'https://expertsia.dev',
    images: [
      {
        url: 'https://expertsia.dev/logo-og.png',
        width: 1200,
        height: 630,
        alt: 'ExpertsIA - AI Business Transformation'
      }
    ],
    locale: 'en_US'
  },
  twitter: {
    card: {
      type: 'summary',
      title: 'ExpertsIA - AI Business Transformation',
      description: 'AI Business Transformation for Startups & Corporations. We help organizations optimize business processes, implement agentic workflows, and train teams for the AI era.',
      images: [
        {
          url: 'https://expertsia.dev/logo-og.png',
          width: 1200,
          height: 630,
          alt: 'ExpertsIA Logo'
        }
      ],
      site: '@expertsia'
    }
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/png',
        url: '/favicon.ico'
      }
    ]
  },
  manifest: '/manifest.json'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content={metadata.viewport} />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.authors.map(a => a.name).join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitter.card.type} />
        <meta name="twitter:title" content={metadata.twitter.card.title} />
        <meta name="twitter:description" content={metadata.twitter.card.description} />
        <meta name="twitter:image" content={metadata.twitter.card.images[0].url} />
        <meta name="twitter:image:width" content={metadata.twitter.card.images[0].width.toString()} />
        <meta name="twitter:image:height" content={metadata.twitter.card.images[0].height.toString()} />
        <meta name="twitter:site" content={metadata.twitter.card.site} />
        
        {/* Robots */}
        <meta name="robots" content={metadata.robots} />
        
        {/* Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href={metadata.manifest} />
      </head>
      <body>{children}</body>
    </html>
  );
}
