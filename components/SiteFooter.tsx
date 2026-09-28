import Link from 'next/link';

export default function SiteFooter({ locale = 'fr' }: { locale?: string }) {
  const fr = locale === 'fr';
  return (
    <footer className="border-t border-[#1e2a1e]/60 bg-[#0a0f0a]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1fr_auto]">
        <div className="max-w-md">
          <p className="text-[#f5f0e8] font-bold text-lg">
            Experts<span className="text-[#e07b39]">IA</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#b8b3ab]">
            {fr
              ? "Conseil IA pour PME et ETI. Audit, automatisation de processus, agents IA et formation. Basés à Bordeaux, interventions dans toute la France."
              : 'AI consulting for SMBs. Audits, process automation, AI agents and training. Based in Bordeaux, working across France.'}
          </p>
          <p className="mt-4 text-xs text-[#7a756d]">
            {fr
              ? 'Fondé par Cyril Marchand · Auteur de « L\'IA pour Commerçants et Artisans »'
              : 'Founded by Cyril Marchand · Author of the AI book for shop owners'}
          </p>
        </div>
        <div className="flex gap-14">
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#f5f0e8]">
              {fr ? 'Services' : 'Services'}
            </h3>
            <ul className="flex list-none flex-col gap-3 text-sm">
              <li><a href={fr ? '/fr/tarifs' : '/en/pricing'} className="text-[#b8b3ab] hover:text-[#e07b39] transition-colors">{fr ? 'Tarifs' : 'Pricing'}</a></li>
              <li><a href="/fr/consultant-ia-bordeaux" className="text-[#b8b3ab] hover:text-[#e07b39] transition-colors">Consultant IA Bordeaux</a></li>
              <li><a href="/fr/financer-son-projet-ia" className="text-[#b8b3ab] hover:text-[#e07b39] transition-colors">{fr ? 'Financer son projet IA' : 'Funding'}</a></li>
              <li><a href="/fr/commerce-agentique" className="text-[#b8b3ab] hover:text-[#e07b39] transition-colors">{fr ? 'Commerce agentique' : 'Agentic commerce'}</a></li>
              <li><a href="/fr/livre" className="text-[#b8b3ab] hover:text-[#e07b39] transition-colors">{fr ? 'Notre livre' : 'Our book'}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#f5f0e8]">
              {fr ? 'Explorer' : 'Explore'}
            </h3>
            <ul className="flex list-none flex-col gap-3 text-sm">
              <li><a href="/fr/blog" className="text-[#b8b3ab] hover:text-[#e07b39] transition-colors">Blog</a></li>
              <li><a href="/fr/about" className="text-[#b8b3ab] hover:text-[#e07b39] transition-colors">{fr ? 'À propos' : 'About'}</a></li>
              <li><a href={fr ? '/fr/book' : '/en/book'} className="text-[#b8b3ab] hover:text-[#e07b39] transition-colors">{fr ? 'Audit gratuit' : 'Free audit'}</a></li>
              <li>
                <a href="https://www.linkedin.com/in/marchandcyril/" className="text-[#b8b3ab] hover:text-[#e07b39] transition-colors" rel="me noopener">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[#1e2a1e]/50 py-5 text-center text-xs text-[#7a756d]">
        © {new Date().getFullYear()} ExpertsIA · Bordeaux, France
      </div>
    </footer>
  );
}
