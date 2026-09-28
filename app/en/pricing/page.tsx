import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const BASE_URL = 'https://www.expertsia.dev';

export const metadata: Metadata = {
  title: 'Pricing — AI audit, automation, RAG, training | ExpertsIA',
  description:
    'Our packages: AI audit of one process (from €1,200 excl. VAT), end-to-end automation, RAG on your knowledge base, team AI training. Delivered in 2 to 4 weeks. Based in France, working across Europe.',
  alternates: {
    canonical: `${BASE_URL}/en/pricing`,
    languages: {
      fr: `${BASE_URL}/fr/tarifs`,
      en: `${BASE_URL}/en/pricing`,
      'x-default': `${BASE_URL}/fr/tarifs`,
    },
  },
  openGraph: {
    title: 'ExpertsIA pricing — AI audit, automation, RAG, training',
    description:
      'AI audit from €1,200 excl. VAT, end-to-end automation from €2,500, RAG and training. Delivered in 2 to 4 weeks.',
    url: `${BASE_URL}/en/pricing`,
    siteName: 'ExpertsIA',
    type: 'website',
    images: [{ url: 'https://www.expertsia.dev/og-card.png', width: 1200, height: 630, alt: 'ExpertsIA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExpertsIA pricing — AI audit, automation, RAG, training',
    description: 'AI audit from €1,200 excl. VAT, automation from €2,500. Delivered in 2 to 4 weeks.',
  },
};

// JSON-LD: pricing offers in schema.org format (LLM-citable)
const pricingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'ExpertsIA offers',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'AI Audit',
        description: 'Process mapping, AI feasibility, costed action plan with estimated ROI.',
        offers: { '@type': 'Offer', price: '1200', priceCurrency: 'EUR', priceSpecification: { '@type': 'PriceSpecification', minPrice: '1200', priceCurrency: 'EUR' } },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Starter Automation',
        description: 'Audit of one target process + 1 end-to-end automation deployed in your tools, full documentation.',
        offers: { '@type': 'Offer', price: '2500', priceCurrency: 'EUR' },
      },
    },
  ],
};

const PACKS = [
  {
    id: 'audit',
    name: 'AI Audit',
    price: 'from €1,200 excl. VAT',
    delay: '1 field day + report within a week',
    items: [
      'Map your processes and identify the 3 to 5 highest-impact initiatives',
      'AI feasibility analysis (data, tools, team)',
      'Costed action plan with estimated ROI per initiative',
      '2-hour readout with your leadership team',
    ],
  },
  {
    id: 'starter',
    name: 'Starter Automation',
    price: 'from €2,500 excl. VAT',
    delay: 'Delivered in 2 weeks',
    popular: true,
    items: [
      'Audit of one target process (1 day)',
      '1 end-to-end automation deployed in your tools',
      'Full documentation',
      'Team training (2h)',
      '30 days of support included',
    ],
  },
  {
    id: 'growth',
    name: 'Growth Pack',
    price: 'from €6,000 excl. VAT',
    delay: 'Delivered in 4 weeks',
    items: [
      'Complete mapping of your processes',
      '3 interconnected automations',
      'Custom internal AI agent',
      'RAG on your business knowledge',
      'Steering dashboard',
      'Team training + 60 days of support',
    ],
  },
  {
    id: 'training',
    name: 'AI Training',
    price: 'from €1,500 excl. VAT / day',
    delay: '1 to 3 days, on site or remote',
    items: [
      'Leadership: understand AI, decide, prioritize',
      'Teams: hands-on tools on YOUR use cases',
      'Sales / support: prompts and agents in daily work',
      'Course material given to every participant',
    ],
  },
  {
    id: 'retainer',
    name: 'Retainer',
    price: 'from €1,200 excl. VAT / month',
    delay: 'No minimum commitment',
    items: [
      'Maintenance of your automations and agents',
      '1 new automation per month',
      'Unlimited support (email / Slack)',
      'Monthly report of measured gains',
    ],
  },
];

const FAQ = [
  {
    q: 'Do you only work in France?',
    a: 'We are based in Bordeaux, France. Most engagements run fine remotely, with on-site workshops when the project calls for it (kickoff, team training, sensitive contexts). For international clients, English-language delivery is standard.',
  },
  {
    q: 'Where should I start?',
    a: 'With the audit. One field day and a report within a week, and you know which processes to automate first, what it costs, and what it returns. The initial 15-minute call is free.',
  },
  {
    q: 'Do we need to change tools?',
    a: 'No. We work inside your existing tools: Microsoft 365, Google Workspace, Notion, n8n, Make, HubSpot, your CRM or ERP. We build on what you have, we do not replace it.',
  },
  {
    q: 'Is my data safe?',
    a: 'Yes. For sensitive projects we deploy RAG and agents on your own servers or with a European host. Your data never leaves your perimeter without written approval.',
  },
];

export default function PricingPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <SiteNav locale='en' />
    <div className='min-h-screen bg-[#0a0f0a] text-[#f5f0e8]'>
      <main className='mx-auto max-w-6xl px-6 py-20'>
        <p className='text-[#e07b39] font-semibold uppercase tracking-wide text-sm'>Offers and pricing</p>
        <h1 className='mt-3 text-4xl md:text-5xl font-bold leading-tight'>
          Fixed-length engagements, clear deliverables, measurable results.
        </h1>
        <p className='mt-4 text-lg text-[#b8b3ab] max-w-3xl'>
          Based in Bordeaux, France, we work across France and remotely. On-site workshops remain possible when the project justifies it. Every engagement starts with a{' '}
          <a href='https://cal.com/expertsia/audit' className='text-[#e07b39] underline underline-offset-4'>
            free 15-minute diagnostic
          </a>
          .
        </p>

        <div className='mt-14 flex flex-wrap justify-center gap-6'>
          {PACKS.map((p) => (
            <div
              key={p.id}
              className={`flex w-full flex-col rounded-2xl border p-8 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${
                p.popular
                  ? 'border-[#e07b39] bg-[#111a11] shadow-lg shadow-[#e07b39]/10'
                  : 'border-[#2a3a2a] bg-[#111a11]/60'
              }`}
            >
              {p.popular && (
                <span className='mb-3 inline-block self-start rounded-full border border-[#e07b39]/40 px-3 py-1 text-xs font-semibold text-[#e07b39]'>
                  Most requested
                </span>
              )}
              <h2 className='text-xl font-bold text-[#f5f0e8]'>{p.name}</h2>
              <p className='mt-2 bg-gradient-to-r from-[#e07b39] to-[#d4a574] bg-clip-text text-2xl font-extrabold text-transparent'>
                {p.price}
              </p>
              <p className='mt-1 text-sm text-[#b8b3ab]'>{p.delay}</p>
              <ul className='mt-5 flex-1 space-y-2 text-sm text-[#d8d3c8]'>
                {p.items.map((it) => (
                  <li key={it} className='flex gap-2'>
                    <span className='text-[#e07b39]'>✓</span> {it}
                  </li>
                ))}
              </ul>
              <a
                href='https://cal.com/expertsia/audit'
                className='mt-6 inline-block rounded-lg bg-[#e07b39] px-5 py-3 text-center font-semibold text-[#0a0f0a] hover:-translate-y-0.5 transition-transform'
              >
                Book the free diagnostic
              </a>
            </div>
          ))}
        </div>

        <section className='mt-24'>
          <h2 className='text-2xl font-bold'>Frequently asked questions</h2>
          <div className='mt-6 space-y-4'>
            {FAQ.map((f) => (
              <details key={f.q} className='rounded-xl border border-[#2a3a2a] bg-[#111a11]/60 p-6'>
                <summary className='cursor-pointer font-semibold text-[#f5f0e8] list-none [&::-webkit-details-marker]:hidden'>
                  <span className='text-[#e07b39] mr-2'>→</span>{f.q}
                </summary>
                <p className='mt-3 text-[#b8b3ab]'>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className='mt-24 rounded-2xl border border-[#2a3a2a] bg-gradient-to-r from-[#e07b39]/10 to-transparent p-10'>
          <h2 className='text-2xl font-bold'>Ready to identify your best automation opportunities?</h2>
          <p className='mt-2 text-[#b8b3ab]'>
            15 minutes, free, no jargon. You leave with 2-3 concrete leads, even if you never work with us afterwards.
          </p>
          <a
            href='https://cal.com/expertsia/audit'
            className='mt-6 inline-block rounded-lg bg-[#e07b39] px-6 py-3 font-semibold text-[#0a0f0a] hover:-translate-y-0.5 transition-transform'
          >
            Book my free diagnostic
          </a>
        </section>
      </main>
    </div>
    <SiteFooter locale='en' />
    </>
  );
}
