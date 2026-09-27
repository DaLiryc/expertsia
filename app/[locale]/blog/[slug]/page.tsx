import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getAllPosts, getPost } from '@/lib/blog';
import { dictionaries, type Locale } from '@/lib/dictionaries';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    locale: post.locale,
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const BASE_URL = 'https://www.expertsia.dev';
  const url = `${BASE_URL}/${post.locale}/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: 'https://www.expertsia.dev/og-card.png', width: 1200, height: 630, alt: 'ExpertsIA' }],
      siteName: 'ExpertsIA',
      locale: post.locale === 'fr' ? 'fr_FR' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    robots: 'index, follow',
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  const t = dictionaries[locale as Locale] || dictionaries.en;

  if (!post || post.locale !== locale) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://www.expertsia.dev',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ExpertsIA',
      url: 'https://www.expertsia.dev',
    },
    inLanguage: locale,
  };

  const relatedPosts = getAllPosts(locale)
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aScore = a.category === post.category ? 1 : 0;
      const bScore = b.category === post.category ? 1 : 0;
      if (aScore !== bScore) return bScore - aScore;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0a0f0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <SiteNav locale={locale} />

      <article className="max-w-3xl mx-auto px-10 py-20">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4 text-sm text-[#b8b3ab]">
            <span className="text-[#e07b39] font-semibold">{post.category}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-[#b8b3ab]">{post.description}</p>
          <div className="flex items-center gap-3 mt-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#e07b39] to-[#d4a574] rounded-full" />
            <div>
              <p className="font-semibold text-sm">{post.author}</p>
              <p className="text-[#b8b3ab] text-xs">ExpertsIA</p>
            </div>
          </div>
        </header>

        {/* MDX Content */}
        <div className="prose-custom">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
              },
            }}
          />
        </div>

        {/* Related posts — internal linking / mesh */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-[#f5f0e8]">
              {locale === 'fr' ? 'À lire ensuite' : 'Read next'}
            </h2>
            <div className="grid gap-4">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/${locale}/blog/${related.slug}`}
                  className="block p-6 bg-[#111a11]/60 border border-[#2a3a2a] rounded-xl hover:border-[#e07b39] transition-colors"
                >
                  <span className="text-[#e07b39] text-sm font-semibold">{related.category}</span>
                  <p className="text-lg font-semibold mt-1 text-[#f5f0e8]">{related.title}</p>
                  <p className="text-[#b8b3ab] text-sm mt-2">{related.description}</p>
                </Link>
              ))}
              <Link
                href="/fr/tarifs"
                className="block p-6 bg-gradient-to-r from-[#e07b39]/10 to-transparent border border-[#e07b39]/30 rounded-xl hover:border-[#e07b39] transition-colors"
              >
                <span className="text-[#e07b39] text-sm font-semibold">
                  {locale === 'fr' ? 'Tarifs' : 'Pricing'}
                </span>
                <p className="text-lg font-semibold mt-1 text-[#f5f0e8]">
                  {locale === 'fr'
                    ? 'Audit IA dès 1 200 € HT — voir les formules'
                    : 'AI audits from €1,200 — see pricing'}
                </p>
              </Link>
            </div>
          </div>
        )}

        {/* CTA at bottom */}
        <div className="mt-16 p-8 bg-[#111a11] border border-[#2a3a2a] rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-3">
            {locale === 'fr' ? 'Prêt à automatiser votre entreprise ?' : 'Ready to automate your business?'}
          </h3>
          <p className="text-[#b8b3ab] mb-6">
            {locale === 'fr'
              ? 'Obtenez un audit IA gratuit. Réponse sous 24h.'
              : 'Get a free AI audit. Response within 24h.'}
          </p>
          <Link
            href={`/${locale}#contact`}
            className="inline-block bg-[#e07b39] text-[#0a0f0a] px-8 py-[14px] rounded-lg font-semibold hover:-translate-y-0.5 transition-transform"
          >
            {locale === 'fr' ? 'Audit Gratuit' : 'Free Audit'}
          </Link>
        </div>

        {/* Back to blog */}
        <div className="mt-8 text-center">
          <Link
            href={`/${locale}/blog`}
            className="text-[#b8b3ab] hover:text-[#e07b39]"
          >
            ← {locale === 'fr' ? 'Tous les articles' : 'All articles'}
          </Link>
        </div>
      </article>
      <SiteFooter locale={locale} />
    </div>
  );
}
