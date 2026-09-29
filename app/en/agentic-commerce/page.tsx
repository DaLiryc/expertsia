import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const BASE_URL = 'https://www.expertsia.dev';

export const metadata: Metadata = {
  title: 'Agentic checkout: exposure audit for e-commerce merchants | ExpertsIA',
  description:
    'Shopify and Google enabled AI-agent checkout on your store without asking. Exposure audit, chargeback liability mapping, per-channel guardrails. Diagnostic delivered in 5 days.',
  alternates: {
    canonical: `${BASE_URL}/en/agentic-commerce`,
    languages: {
      fr: `${BASE_URL}/fr/commerce-agentique`,
      en: `${BASE_URL}/en/agentic-commerce`,
      'x-default': `${BASE_URL}/fr/commerce-agentique`,
    },
  },
  openGraph: {
    title: 'Agentic checkout: exposure audit for merchants',
    description:
      'AI-agent checkout was switched on in your store without consent. Map your exposure in 5 days.',
    url: `${BASE_URL}/en/agentic-commerce`,
    siteName: 'ExpertsIA',
    type: 'website',
    images: [{ url: 'https://www.expertsia.dev/og-card.png', width: 1200, height: 630, alt: 'ExpertsIA' }],
  },
  robots: 'index, follow',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Should I turn agentic checkout off completely?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. Discovery and checkout are separate settings in Shopify (Sales channels, then Agentic). Many merchants keep discovery on to capture AI traffic and only switch off native checkout while they secure their procedures. The audit exists to make that call channel by channel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is liable when an AI agent buys and the buyer disputes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The merchant stays merchant of record: the sale, the fraud, and the chargeback stay with them. No card network had published an agent-specific dispute rule as of mid-2026, and classic evidence (click trails, device fingerprints) does not exist in this journey. That is the main risk our deliverables cover.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Shopify or Google protect merchants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They position themselves as infrastructure and leave liability with the merchant, who stays merchant of record. Scheme protections (Amex Agent Purchase Protection, Visa Intelligent Commerce, Mastercard Agent Pay) are being built but do not yet cover the general case.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this legal advice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. ExpertsIA delivers operational governance: channel configuration, procedures, documentation, monitoring. Contract clauses we produce are meant to be reviewed by your lawyer before going live.',
      },
    },
  ],
};

const events = [
  {
    date: 'September 21, 2026',
    title: 'Shopify turned on agent checkout',
    body: 'Shop Pay was enabled by default for Meta\'s Muse agent on eligible stores. The opt-out setting hides in Shopify Admin, Sales channels, Agentic. If you never touched it, your store is in.',
  },
  {
    date: 'September 18-22, 2026',
    title: 'Google did the same in AI Mode and Gemini',
    body: 'Affected merchants received a Merchant Center email on September 22: eligible products are automatically included in native checkout, "there\'s nothing for you to set up". The purchase completes inside Google\'s interface, with no redirect to your site.',
  },
  {
    date: 'What it means',
    title: 'You are still merchant of record',
    body: 'The sale, the fraud, and the chargeback stay with you, even when the purchase happens inside Gemini or Muse. And when the buyer disputes, the classic defense evidence (click trails, behavioral data) does not exist in an agentic journey.',
  },
];

const risks = [
  {
    title: 'Blank-slate liability',
    body: 'Card networks had published no agent-specific dispute rules as of mid-2026. Until they do, the default outcome is unchanged: as merchant of record, the sale, the fraud and the chargeback stay on your side of the table.',
  },
  {
    title: 'Undefendable chargebacks',
    body: 'Visa and Mastercard confirm your dispute rights still apply. The problem sits elsewhere: your defense evidence (click trail, behavioral data) points at the agent\'s server, not at your customer. Rights intact, proof gone.',
  },
  {
    title: 'Invisible traffic',
    body: 'Only 23% of merchants can tell AI traffic from human traffic (PYMNTS/Visa survey). If you cannot tell which sales come from agents, you can neither track nor defend them.',
  },
  {
    title: 'Brand missing from AI recommendations',
    body: 'The agent shrinks a whole market to three buyable options. Not being selected becomes as much of a visibility problem as not ranking on page one of Google.',
  },
];

const tiers = [
  {
    name: 'Diagnostic',
    price: '€990 excl. VAT',
    unit: 'one-off · 5 days',
    best: false,
    items: [
      'Map of agent channels active on your store',
      'Merchant-of-record liability map per channel',
      'Snapshot of your current chargeback exposure',
      'Argued opt-in / opt-out decision, channel by channel',
      '30-day action plan',
    ],
  },
  {
    name: 'Governance',
    price: '€1,490 excl. VAT',
    unit: 'setup + €490/mo',
    best: true,
    items: [
      'Everything in Diagnostic',
      'ToS / T&C clause pack for your lawyer to review',
      'Agentic chargeback dispute playbook',
      'Agent traffic segregation in your analytics',
      'Monthly channel monitoring and EU/US regulatory watch',
    ],
  },
  {
    name: 'Steering',
    price: 'Custom quote',
    unit: 'brands with €5-20M GMV',
    best: false,
    items: [
      'Full governance',
      'Quarterly re-audit and tracking dashboard',
      'Interface with your PSP and insurer',
      'Board reporting',
    ],
  },
];

const faqs = [
  {
    q: 'Should I turn agentic checkout off completely?',
    a: 'Not necessarily. Discovery and checkout are separate settings in Shopify (Sales channels, then Agentic). Many merchants keep discovery on to capture AI traffic and only switch off native checkout while they secure their procedures. The audit exists to make that call channel by channel.',
  },
  {
    q: 'Who is liable when an AI agent buys and the buyer disputes?',
    a: 'The merchant stays merchant of record: the sale, the fraud, and the chargeback stay with them. No card network had published an agent-specific dispute rule as of mid-2026, and classic evidence (click trails, device fingerprints) does not exist in this journey.',
  },
  {
    q: 'Do Shopify or Google protect merchants?',
    a: 'They position themselves as infrastructure and leave liability with the merchant, who stays merchant of record. Scheme protections (Amex Agent Purchase Protection, Visa Intelligent Commerce, Mastercard Agent Pay) are being built but do not yet cover the general case.',
  },
  {
    q: 'Is this legal advice?',
    a: 'No. ExpertsIA delivers operational governance: channel configuration, procedures, documentation, monitoring. Contract clauses we produce are meant to be reviewed by your lawyer before going live.',
  },
];

export default function AgenticCommercePage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteNav locale='en' />
      <div className='min-h-screen bg-[#0a0f0a] text-[#f5f0e8]'>
        <main className='mx-auto max-w-4xl px-6 py-20'>
          {/* Header */}
          <header className='mb-16'>
            <p className='inline-flex items-center gap-2 text-[#e07b39] text-xs md:text-sm font-medium mb-6 px-4 py-2 rounded-full border border-[#e07b39]/20 bg-[#e07b39]/5'>
              <span className='w-1.5 h-1.5 rounded-full bg-[#e07b39]' />
              Agentic commerce · E-commerce · 2026
            </p>
            <h1 className='text-4xl md:text-5xl font-bold mb-6' style={{ letterSpacing: '-0.03em' }}>
              Agentic checkout was switched on in your store. Nobody asked you.
            </h1>
            <p className='text-xl text-[#b8b3ab] max-w-2xl leading-relaxed font-light'>
              On September 21, 2026, Shopify enabled AI-agent payments (Meta Muse) by default. On the 22nd, Google enrolled eligible Shopify products into native checkout in AI Mode and Gemini. You still own the sales, the fraud, and the chargebacks. We map your exposure in 5 days.
            </p>
            <div className='mt-8 flex flex-wrap items-center gap-6'>
              <a
                href='https://cal.com/expertsia/audit'
                className='inline-block rounded-lg bg-[#e07b39] px-6 py-3 font-semibold text-[#0a0f0a] hover:-translate-y-0.5 transition-transform'
              >
                Book my diagnostic →
              </a>
              <a href='#offers' className='text-sm text-[#b8b3ab] hover:text-[#e07b39] transition-colors'>
                See the offers
              </a>
            </div>
          </header>

          {/* Timeline */}
          <section className='mb-16'>
            <h2 className='text-3xl font-bold mb-8'>What happened</h2>
            <div className='flex flex-col gap-6'>
              {events.map((e, i) => (
                <div key={i} className='bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-8'>
                  <p className='text-[#e07b39] text-sm font-medium mb-2'>{e.date}</p>
                  <h3 className='text-xl font-bold mb-3'>{e.title}</h3>
                  <p className='text-[#b8b3ab] leading-relaxed'>{e.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Risks */}
          <section className='mb-16'>
            <h2 className='text-3xl font-bold mb-8'>Why this is a problem now</h2>
            <div className='grid md:grid-cols-2 gap-6'>
              {risks.map((r, i) => (
                <div key={i} className='bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-8'>
                  <h3 className='text-lg font-bold mb-3'>{r.title}</h3>
                  <p className='text-[#b8b3ab] leading-relaxed'>{r.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Offers */}
          <section id='offers' className='mb-16'>
            <h2 className='text-3xl font-bold mb-8'>Our agentic governance offers</h2>
            <div className='flex flex-col gap-6'>
              {tiers.map((tier, i) => (
                <div
                  key={i}
                  className={`relative bg-[#111a11] border rounded-2xl p-8 ${tier.best ? 'border-[#e07b39]/60' : 'border-[#2a3a2a]'}`}
                >
                  {tier.best && (
                    <span className='absolute -top-3 left-8 rounded-full border border-[#e07b39]/40 bg-[#0a0f0a] px-3 py-1 text-xs font-semibold text-[#e07b39]'>
                      Recommended
                    </span>
                  )}
                  <div className='flex items-start justify-between mb-6'>
                    <div>
                      <h3 className='text-2xl font-bold mb-1'>{tier.name}</h3>
                      <p className='text-sm text-[#e07b39] font-medium'>{tier.unit}</p>
                    </div>
                    <span className={`text-right text-lg ${tier.best ? 'text-[#e07b39] font-bold' : 'font-semibold'}`}>
                      {tier.price}
                    </span>
                  </div>
                  <ul className='flex flex-col gap-2'>
                    {tier.items.map((item, j) => (
                      <li key={j} className='text-[#b8b3ab] flex gap-3 leading-relaxed'>
                        <span className='text-[#e07b39]'>·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className='text-sm text-[#b8b3ab] mt-6'>
              The diagnostic fee is credited against the Governance setup if you continue.{' '}
              <Link href='/en/book' className='text-[#e07b39] hover:underline'>
                See how we work
              </Link>
              .
            </p>
          </section>

          {/* Why now */}
          <section className='mb-16'>
            <h2 className='text-3xl font-bold mb-8'>Why now</h2>
            <div className='flex flex-col gap-4 text-[#b8b3ab] leading-relaxed'>
              <p>
                The US CFPB confirmed in January 2026 that agent-placed purchases fall under the existing dispute regime. Amex launched protection for registered agents in April, and Visa and Mastercard are building their frameworks. The rules are being rewritten right now, without merchants at the table.
              </p>
              <p>
                In Europe, PSD3 passed but defers agentic payments to a later review. The regulatory vacuum will last another year or two. Platform and Big-Four productized audits will arrive within 6 to 18 months: brands that get structured now pay for expertise, not for crisis.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className='mb-16'>
            <h2 className='text-3xl font-bold mb-8'>FAQ</h2>
            <div className='flex flex-col gap-6'>
              {faqs.map((f, i) => (
                <div key={i} className='bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-8'>
                  <h3 className='text-lg font-bold mb-3'>{f.q}</h3>
                  <p className='text-[#b8b3ab] leading-relaxed'>{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className='p-8 bg-[#111a11] border border-[#2a3a2a] rounded-2xl text-center'>
            <h3 className='text-2xl font-bold mb-3'>
              Know where you stand before the first chargeback lands
            </h3>
            <p className='text-[#b8b3ab] mb-6'>
              Diagnostic delivered in 5 days. Response within 24h. No commitment.
            </p>
            <a
              href='https://cal.com/expertsia/audit'
              className='inline-block bg-[#e07b39] text-[#0a0f0a] px-8 py-[14px] rounded-lg font-semibold hover:-translate-y-0.5 transition-transform'
            >
              Book my diagnostic
            </a>
          </div>

          {/* Disclaimer */}
          <p className='text-xs text-[#b8b3ab]/70 mt-10 leading-relaxed'>
            ExpertsIA provides operational governance services and does not provide legal advice. Contract documents produced during our engagements are meant to be reviewed and approved by the client\'s legal counsel. Information verified September 28, 2026.
          </p>
        </main>
        <SiteFooter locale='en' />
      </div>
    </>
  );
}
