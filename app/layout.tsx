import './globals.css';

export const metadata = {
  title: 'ExpertsIA - AI Business Transformation',
  description: 'AI Business Transformation for Startups & Corporations. We help organizations optimize business processes, implement agentic workflows, and train teams for the AI era.',
  keywords: 'AI business transformation, AI consulting, AI strategy, agentic workflows, RAG systems, AI training, data science, corporate AI, startup AI',
  authors: [{ name: 'Cyril Marchand' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
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
        <meta name="robots" content={metadata.robots} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
