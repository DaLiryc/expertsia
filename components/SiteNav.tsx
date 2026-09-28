import Link from 'next/link';
import Logo from './Logo';

type NavLink = {
  href: string;
  labelFr: string;
  labelEn: string;
  raw?: boolean;
  enHref?: string;
};

const NAV_LINKS: NavLink[] = [
  { href: '/#approach', labelFr: 'Approche', labelEn: 'Approach' },
  { href: '/#services', labelFr: 'Services', labelEn: 'Services' },
  { href: '/fr/blog', labelFr: 'Blog', labelEn: 'Blog', raw: true },
  { href: '/fr/tarifs', labelFr: 'Tarifs', labelEn: 'Pricing', raw: true, enHref: '/en/pricing' },
  { href: '/fr/financer-son-projet-ia', labelFr: 'Financement IA', labelEn: 'Funding', raw: true },
  { href: '/fr/commerce-agentique', labelFr: 'Commerce agentique', labelEn: 'Agentic commerce', raw: true },
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
          <Logo />
        </Link>
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={fr ? l.href : (l.enHref ?? l.href)}
              className="text-sm text-[#b8b3ab] hover:text-[#e07b39] transition-colors"
            >
              {fr ? l.labelFr : l.labelEn}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={fr ? '/fr/book' : '/en/book'}
            className="rounded-lg bg-[#e07b39] px-5 py-2 text-sm font-semibold text-[#0a0f0a] hover:-translate-y-0.5 transition-transform"
          >
            {fr ? 'Audit gratuit' : 'Free audit'}
          </a>
        </div>
      </div>
    </nav>
  );
}
