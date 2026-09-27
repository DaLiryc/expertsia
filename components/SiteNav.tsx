import Link from 'next/link';
import Logo from './Logo';

const NAV_LINKS = [
  { href: '/#approach', labelFr: 'Approche', labelEn: 'Approach' },
  { href: '/#services', labelFr: 'Services', labelEn: 'Services' },
  { href: '/fr/blog', labelFr: 'Blog', labelEn: 'Blog', raw: true },
  { href: '/fr/tarifs', labelFr: 'Tarifs', labelEn: 'Pricing', raw: true },
  { href: '/fr/financer-son-projet-ia', labelFr: 'Financement IA', labelEn: 'Funding', raw: true },
];

export default function SiteNav({ locale = 'fr' }: { locale?: string }) {
  const fr = locale === 'fr';
  const homeHref = fr ? '/fr' : '/en';
  return (
    <nav
      className="sticky top-0 z-50 border-b border-[#1e2a1e]/60 bg-[rgba(10,15,10,0.92)] backdrop-blur-[10px]"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href={homeHref} className="flex items-center gap-2" aria-label="ExpertsIA — accueil">
          <span className="hidden sm:block [&_svg]:h-10 [&_svg]:w-auto"><Logo /></span>
          <span className="text-[#f5f0e8] font-bold text-lg">
            Experts<span className="text-[#e07b39]">IA</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#b8b3ab] hover:text-[#e07b39] transition-colors"
            >
              {fr ? l.labelFr : l.labelEn}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/fr/book"
            className="rounded-lg bg-[#e07b39] px-5 py-2 text-sm font-semibold text-[#0a0f0a] hover:-translate-y-0.5 transition-transform"
          >
            {fr ? 'Audit gratuit' : 'Free audit'}
          </a>
        </div>
      </div>
    </nav>
  );
}
