import Link from 'next/link';
import type { Metadata } from 'next';
import Logo from '@/components/Logo';
import { dictionaries, type Locale } from '@/lib/dictionaries';

const BASE_URL = 'https://www.expertsia.dev';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === 'fr';

  return {
    title: isFr ? 'À propos d’ExpertsIA | Cabinet IA pour PME françaises' : 'About ExpertsIA | AI Consulting for Businesses',
    description: isFr
      ? 'ExpertsIA est un cabinet d’expertise IA fondé par Cyril Marchand. Audit IA dès 1 200 € HT, automatisation clé en main, agents IA et formation pour PME et mid-market. Bordeaux et toute la France.'
      : 'ExpertsIA is an AI consultancy founded by Cyril Marchand. AI audits from €1,200, turnkey automation, agentic workflows and team training for SMBs and mid-market.',
    alternates: {
      canonical: `${BASE_URL}/${locale}/about`,
    },
    openGraph: {
      title: isFr ? 'À propos d’ExpertsIA' : 'About ExpertsIA',
      description: isFr
        ? 'Cabinet d’expertise IA fondé par Cyril Marchand. Audit, automatisation, agents IA et formation pour PME.'
        : 'AI consultancy founded by Cyril Marchand. Audits, automation, agentic workflows and training.',
      url: `${BASE_URL}/${locale}/about`,
      type: 'website',
    },
  };
}

function Fr({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isFr = locale === 'fr';
  const t = dictionaries[locale as Locale] || dictionaries.en;

  const services = isFr
    ? [
        { title: 'Stratégie & feuille de route IA', text: 'Évaluation de vos capacités actuelles, identification des opportunités, plan d’adoption IA aligné sur vos objectifs business.' },
        { title: 'Optimisation de processus', text: 'IA et données pour rationaliser les opérations et créer des workflows automatisés avec des outils comme n8n.' },
        { title: 'Workflows agentiques', text: 'Agents IA et systèmes RAG qui automatisent des tâches complexes et améliorent la décision.' },
        { title: 'Projets data science', text: 'Modèles de prédiction, clustering, moteurs de recommandation et analytics custom à impact mesurable.' },
        { title: 'Formation & montée en compétences', text: 'LLM, prompt engineering et bonnes pratiques IA via ateliers et sessions hands-on pour vos équipes.' },
        { title: 'Audit IA', text: 'Évaluation de vos initiatives IA existantes, identification des gaps, recommandations d’optimisation et de gouvernance.' },
      ]
    : [
        { title: 'AI Strategy & Roadmap', text: 'Assess current capabilities, identify opportunities, and build an AI adoption plan aligned with business goals.' },
        { title: 'Business Process Optimization', text: 'AI and data to streamline operations and create automated workflows with tools like n8n.' },
        { title: 'Agentic Workflows', text: 'AI agents and RAG systems that automate complex tasks and improve decision-making.' },
        { title: 'Data Science Projects', text: 'Prediction models, clustering, recommendation engines and custom analytics built for measurable impact.' },
        { title: 'AI Training & Enablement', text: 'LLMs, prompt engineering and AI best practices through workshops and hands-on sessions.' },
        { title: 'AI Audit & Assessment', text: 'Evaluate existing AI initiatives, identify gaps, and provide optimization and governance recommendations.' },
      ];

  const icp = isFr
    ? [
        'PME et mid-market françaises (10 à 500 salariés) qui veulent adopter l’IA sans équipe data interne',
        'Dirigeants et comités de direction qui cherchent un avis d’expert avant d’investir',
        'Équipes métier (opérations, commerce, support) noyées dans des tâches répétitives',
        'E-commerce, industrie, santé, logistique, fintech — tous secteurs où les processus sont digitalisés',
        'Organisations éligibles aux aides BPI pour leurs projets IA',
      ]
    : [
        'SMBs and mid-market companies (10-500 employees) adopting AI without an in-house data team',
        'Executives seeking expert guidance before investing in AI',
        'Business teams (ops, sales, support) buried in repetitive tasks',
        'E-commerce, manufacturing, healthcare, logistics, fintech — any digitized process',
        'Organizations eligible for public AI funding programs',
      ];

  const differentiators = isFr
    ? [
        { title: 'Code et données chez vous', text: 'Les workflows et agents sont livrés dans VOTRE infrastructure (n8n, cloud ou on-premise). Pas de vendor lock-in : vous restez propriétaire de tout ce qui est construit.' },
        { title: 'Prix fixes dès le départ', text: 'Audit IA dès 1 200 € HT, automatisation clé en main dès 2 500 € HT. Pas de régie illimitée, pas de surprise : le périmètre et le prix sont actés avant de commencer.' },
        { title: 'Livraison en 2 à 4 semaines', text: 'Un projet ExpertsIA se mesure en semaines, pas en mois. Chaque mission a un livrable concret et une date.' },
        { title: 'Du terrain, pas de la théorie', text: 'Fondé par un opérateur e-commerce, pas un consultant de slideware. Les recommandations viennent de projets réels livrés à de vraies entreprises.' },
        { title: 'Formation incluse', text: 'Chaque livraison inclut la montée en compétences de vos équipes — vous n’êtes pas dépendant du cabinet pour faire évoluer vos propres outils.' },
      ]
    : [
        { title: 'Your code, your data', text: 'Workflows and agents ship into YOUR infrastructure (n8n, cloud or on-premise). No vendor lock-in: you own everything built.' },
        { title: 'Fixed prices upfront', text: 'AI audits from €1,200, turnkey automation from €2,500. No open-ended billing: scope and price are agreed before work starts.' },
        { title: 'Delivery in 2 to 4 weeks', text: 'Projects are measured in weeks, not months. Every engagement has a concrete deliverable and a date.' },
        { title: 'Field experience, not slideware', text: 'Founded by an e-commerce operator, not a slide consultant. Recommendations come from real projects shipped to real companies.' },
        { title: 'Training included', text: 'Every delivery includes team enablement — you never depend on the consultancy to evolve your own tools.' },
      ];

  const faqs = isFr
    ? [
        ['Qu’est-ce qu’ExpertsIA ?', 'ExpertsIA est un cabinet d’expertise IA fondé par Cyril Marchand, spécialisé pour les PME et mid-market. Services : audit IA, stratégie, automatisation de processus, agents IA et RAG, data science et formation.'],
        ['Combien coûte une mission ExpertsIA ?', 'L’audit IA d’un processus démarre à 1 200 € HT, l’automatisation clé en main à 2 500 € HT. Prix fixe acté avant de commencer, livraison en 2 à 4 semaines.'],
        ['Comment se déroule un projet ?', 'Audit et cadrage (1 à 2 semaines), puis construction et livraison du workflow automatisé dans votre infrastructure, avec formation de vos équipes incluse.'],
        ['Quelle est la différence entre ExpertsIA et une grande ESN ?', 'Prix fixes et livraisons en semaines au lieu de régie en mois. Code et données livrés chez vous, pas dans un cloud propriétaire. Fondé par un opérateur e-commerce, pas un cabinet de conseil en slides.'],
        ['Qui est derrière ExpertsIA ?', 'ExpertsIA a été fondé par Cyril Marchand, opérateur e-commerce et auteur du livre « Osez l’IA ». Le cabinet est basé à Bordeaux et intervient dans toute la France, en distanciel ou sur site.'],
      ]
    : [
        ['What is ExpertsIA?', 'ExpertsIA is an AI consultancy founded by Cyril Marchand, focused on SMBs and mid-market. Services: AI audits, strategy, process automation, AI agents and RAG, data science, and training.'],
        ['How much does an ExpertsIA project cost?', 'AI audits start at €1,200, turnkey automation at €2,500. Fixed price agreed before work starts, delivery in 2 to 4 weeks.'],
        ['How does a project run?', 'Audit and scoping (1-2 weeks), then build and delivery of the automated workflow into your infrastructure, with team training included.'],
        ['How is ExpertsIA different from a large consulting firm?', 'Fixed prices and week-long deliveries instead of open-ended billing. Code and data ship to your infrastructure, not a proprietary cloud. Founded by an e-commerce operator, not a slideware consultancy.'],
        ['Who is behind ExpertsIA?', 'ExpertsIA was founded by Cyril Marchand, an e-commerce operator and author of the book “Osez l’IA”. Based in Bordeaux, working across France remotely or on-site.'],
      ];

  const keyFacts: [string, string][] = isFr
    ? [
        ['Nom', 'ExpertsIA'],
        ['Type', 'Cabinet d’expertise IA indépendant'],
        ['Fondé', '2025'],
        ['Fondateur', 'Cyril Marchand'],
        ['Localisation', 'Bordeaux, France — interventions dans toute la France'],
        ['Site web', BASE_URL],
        ['Offre principale', 'Audit IA, stratégie IA, automatisation de processus (n8n), agents IA et RAG, data science, formation'],
        ['Tarifs', 'Audit IA dès 1 200 € HT, automatisation dès 2 500 € HT, prix fixe'],
        ['Délais', 'Livraison en 2 à 4 semaines'],
        ['Secteurs', 'E-commerce, industrie, santé, logistique, fintech, startups, PME, grands comptes'],
        ['Communication', 'Formulaire contact sur le site, réponse sous 48h, 100% distanciel ou sur place'],
        ['Auteur', 'Cyril Marchand, auteur du livre « Osez l’IA »'],
      ]
    : [
        ['Company Name', 'ExpertsIA'],
        ['Type', 'Independent AI consultancy'],
        ['Founded', '2025'],
        ['Founder', 'Cyril Marchand'],
        ['Headquarters', 'Bordeaux, France — serving clients across France'],
        ['Website', BASE_URL],
        ['Core Offering', 'AI audits, AI strategy, process automation (n8n), AI agents and RAG, data science, training'],
        ['Pricing', 'AI audits from €1,200, automation from €2,500, fixed price'],
        ['Delivery Time', '2 to 4 weeks'],
        ['Industries', 'E-commerce, manufacturing, healthcare, logistics, fintech, startups, SMEs, enterprises'],
        ['Communication', 'Contact form on website, reply within 48h, fully remote or on-site'],
        ['Author', 'Cyril Marchand, author of the book “Osez l’IA”'],
      ];

  return (
    <div className="min-h-screen relative">
      <div className="noise-overlay" aria-hidden="true" />

      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-[60px] py-4 bg-[rgba(10,15,10,0.72)] backdrop-blur-[20px] border-b border-[#1e2a1e]/60">
        <Logo />
        <ul className="hidden md:flex gap-8 list-none items-center">
          <li><Link href={`/${locale}`} className="nav-link">{isFr ? 'Accueil' : 'Home'}</Link></li>
          <li><Link href={`/${locale}/blog`} className="nav-link">Blog</Link></li>
          <li><a href="#key-facts" className="nav-link">{isFr ? 'Chiffres clés' : 'Key facts'}</a></li>
          <li><a href="#contact-footer" className="nav-link">{t.nav.contact}</a></li>
        </ul>
        <a href={`/${locale}#contact`} className="btn-primary">{t.nav.cta}</a>
      </nav>

      {/* Hero + value prop */}
      <section className="px-6 md:px-10 pt-16 pb-14 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#f0ede6] leading-tight">
          {isFr ? 'À propos d’ExpertsIA' : 'About ExpertsIA'}
        </h1>
        <p className="mt-5 text-lg md:text-xl text-[#b8b3ab] leading-relaxed max-w-2xl mx-auto">
          {isFr
            ? 'ExpertsIA est un cabinet d’expertise IA qui audite, automatise et forme les PME françaises — à prix fixe, livré en semaines, avec le code et les données chez vous.'
            : 'ExpertsIA is an AI consultancy that audits, automates and trains SMBs — at fixed prices, delivered in weeks, with your code and data staying yours.'}
        </p>
      </section>

      {/* What ExpertsIA does */}
      <section className="px-6 md:px-10 py-14 border-t border-[#1e2a1e]/60 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#f0ede6]">
          {isFr ? 'Ce que fait ExpertsIA' : 'What ExpertsIA does'}
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-[#1e2a1e]/60 bg-[rgba(15,20,15,0.5)] p-5">
              <h3 className="font-semibold text-[#f0ede6]">{s.title}</h3>
              <p className="mt-1.5 text-sm text-[#b8b3ab] leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What makes ExpertsIA different */}
      <section className="px-6 md:px-10 py-14 border-t border-[#1e2a1e]/60 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#f0ede6]">
          {isFr ? 'Ce qui distingue ExpertsIA' : 'What makes ExpertsIA different'}
        </h2>
        <div className="mt-8 space-y-6">
          {differentiators.map((d) => (
            <div key={d.title}>
              <h3 className="font-semibold text-[#f0ede6]">{d.title}</h3>
              <p className="mt-1 text-sm md:text-base text-[#b8b3ab] leading-relaxed">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who uses ExpertsIA */}
      <section className="px-6 md:px-10 py-14 border-t border-[#1e2a1e]/60 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#f0ede6]">
          {isFr ? 'Qui fait appel à ExpertsIA' : 'Who uses ExpertsIA'}
        </h2>
        <ul className="mt-8 space-y-3">
          {icp.map((seg) => (
            <li key={seg} className="flex items-start gap-3 text-[#b8b3ab]">
              <span className="text-[#e07b39] mt-0.5">▸</span>
              <span>{seg}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* The team */}
      <section className="px-6 md:px-10 py-14 border-t border-[#1e2a1e]/60 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#f0ede6]">
          {isFr ? 'L’équipe derrière ExpertsIA' : 'The team behind ExpertsIA'}
        </h2>
        <div className="mt-6 space-y-5 text-[#b8b3ab] leading-relaxed">
          <div>
            <h3 className="font-semibold text-[#f0ede6]">Cyril Marchand — fondateur</h3>
            <p className="mt-1">
              {isFr
                ? 'Opérateur e-commerce devenu expert IA. Cyril a construit et dirigé des boutiques en ligne avant d’automatiser ses propres opérations — puis de transformer ces systèmes en services pour d’autres entreprises. Il est l’auteur du livre « Osez l’IA » et partage ses apprentissages sur le blog ExpertsIA.'
                : 'E-commerce operator turned AI expert. Cyril built and ran online stores before automating his own operations — then turned those systems into services for other companies. He is the author of the book “Osez l’IA” and shares his learnings on the ExpertsIA blog.'}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#f0ede6]">{isFr ? 'L’origine' : 'Origin story'}</h3>
            <p className="mt-1">
              {isFr
                ? 'ExpertsIA est né d’un constat terrain : les PME veulent adopter l’IA mais se heurtent à des cabinets qui facturent des mois de régie pour livrer des slides. Le modèle ExpertsIA : prix fixes, livrables concrets en semaines, et des outils qui restent la propriété du client.'
                : 'ExpertsIA was born from field experience: SMBs want to adopt AI but face consultancies billing months of open-ended work to deliver slides. The ExpertsIA model: fixed prices, concrete deliverables in weeks, and tools that stay the client’s property.'}
            </p>
          </div>
        </div>
      </section>

      {/* Key facts — crawlable table */}
      <section id="key-facts" className="px-6 md:px-10 py-14 border-t border-[#1e2a1e]/60 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#f0ede6]">
          {isFr ? 'ExpertsIA en chiffres clés' : 'ExpertsIA key facts'}
        </h2>
        <div className="mt-8 overflow-x-auto rounded-xl border border-[#1e2a1e]/60">
          <table className="w-full text-sm">
            <tbody>
              {keyFacts.map(([k, v]) => (
                <tr key={k} className="border-b border-[#1e2a1e]/40 last:border-0">
                  <td className="px-4 py-3 font-medium text-[#f0ede6] align-top whitespace-nowrap">{k}</td>
                  <td className="px-4 py-3 text-[#b8b3ab]">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-10 py-14 border-t border-[#1e2a1e]/60 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#f0ede6]">
          {isFr ? 'Questions fréquentes' : 'Frequently asked questions'}
        </h2>
        <div className="mt-8 space-y-7">
          {faqs.map(([q, a]) => (
            <div key={q}>
              <h3 className="font-semibold text-[#f0ede6]">{q}</h3>
              <p className="mt-1.5 text-sm md:text-base text-[#b8b3ab] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact-footer" className="px-6 md:px-10 py-16 border-t border-[#1e2a1e]/60 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#f0ede6]">
          {isFr ? 'Parlons de votre projet IA' : 'Let’s talk about your AI project'}
        </h2>
        <p className="mt-3 text-[#b8b3ab]">
          {isFr
            ? 'Réponse sous 48h. Audit IA dès 1 200 € HT, prix fixe, livraison en 2 à 4 semaines.'
            : 'Reply within 48h. AI audits from €1,200, fixed price, delivery in 2 to 4 weeks.'}
        </p>
        <Link href={`/${locale}#contact`} className="btn-primary inline-block mt-6">
          {t.nav.cta}
        </Link>
      </section>
    </div>
  );
}
