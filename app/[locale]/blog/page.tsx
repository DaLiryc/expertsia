import Link from 'next/link';
import { getAllPosts, getCategories } from '@/lib/blog';
import { dictionaries, type Locale } from '@/lib/dictionaries';

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = dictionaries[locale as Locale] || dictionaries.en;
  const posts = getAllPosts(locale);
  const categories = getCategories(locale);

  return (
    <div className="min-h-screen">
      {/* Simple nav */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-[60px] py-[25px] bg-[rgba(10,15,10,0.9)] backdrop-blur-[10px] border-b border-[#2a3a2a]">
        <Link href={`/${locale}`}>
          <span className="text-[#f5f0e8] font-bold text-xl">ExpertsIA</span>
        </Link>
        <Link
          href={`/${locale}`}
          className="text-[#b8b3ab] hover:text-[#e07b39]"
        >
          ← {locale === 'fr' ? 'Retour au site' : 'Back to site'}
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-10 py-20">
        <h1 className="text-4xl font-bold mb-4">
          {locale === 'fr' ? 'Le Blog' : 'Blog'}
        </h1>
        <p className="text-[#b8b3ab] text-lg mb-10">
          {locale === 'fr'
            ? "Conseils, guides et retours d'expérience sur l'IA et l'automatisation pour les entreprises."
            : 'Insights, guides and case studies on AI and automation for businesses.'}
        </p>

        {/* Category filter */}
        {categories.length > 0 && (
          <div className="flex gap-3 mb-10 flex-wrap">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 bg-[#111a11] border border-[#2a3a2a] rounded-lg text-sm text-[#b8b3ab]"
              >
                {cat}
              </span>
            ))}
          </div>
        )}

        {/* Posts list */}
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#b8b3ab] text-lg mb-4">
              {locale === 'fr'
                ? 'Aucun article pour le moment. Revenez bientôt !'
                : 'No articles yet. Check back soon!'}
            </p>
            <p className="text-[#b8b3ab] text-sm">
              {locale === 'fr'
                ? 'En attendant, demandez votre audit IA gratuit.'
                : 'In the meantime, request your free AI audit.'}
            </p>
            <Link
              href={`/${locale}#contact`}
              className="inline-block mt-6 bg-[#e07b39] text-[#0a0f0a] px-8 py-[14px] rounded-lg font-semibold hover:-translate-y-0.5 transition-transform"
            >
              {locale === 'fr' ? 'Audit Gratuit' : 'Free Audit'}
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-8 hover:border-[#e07b39] transition-all"
              >
                <div className="flex items-center gap-3 mb-3 text-sm text-[#b8b3ab]">
                  <span className="text-[#e07b39] font-semibold">{post.category}</span>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">
                  <Link href={`/${locale}/blog/${post.slug}`} className="hover:text-[#e07b39]">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-[#b8b3ab] mb-4">{post.description}</p>
                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="text-[#e07b39] font-medium hover:underline"
                >
                  {locale === 'fr' ? "Lire l'article →" : 'Read more →'}
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
