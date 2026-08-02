import Logo from '@/components/Logo';
import ContactForm from '@/components/ContactForm';
import NewsletterCapture from '@/components/NewsletterCapture';
import { dictionaries, type Locale } from '@/lib/dictionaries';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = dictionaries[locale as Locale] || dictionaries.en;

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-[60px] py-5 bg-[rgba(10,15,10,0.9)] backdrop-blur-[10px] border-b border-[#2a3a2a]">
        <Logo />
        <ul className="hidden md:flex gap-8 list-none items-center">
          <li>
            <a href="#approach" className="text-[#b8b3ab] font-medium text-base hover:text-[#e07b39]">
              {t.nav.approach}
            </a>
          </li>
          <li>
            <a href="#services" className="text-[#b8b3ab] font-medium text-base hover:text-[#e07b39]">
              {t.nav.services}
            </a>
          </li>
          <li>
            <a href="#industries" className="text-[#b8b3ab] font-medium text-base hover:text-[#e07b39]">
              {t.nav.industries}
            </a>
          </li>
          <li>
            <a href={`/${locale}/blog`} className="text-[#b8b3ab] font-medium text-base hover:text-[#e07b39]">
              {locale === 'fr' ? 'Blog' : 'Blog'}
            </a>
          </li>
          <li>
            <a href="#contact" className="text-[#b8b3ab] font-medium text-base hover:text-[#e07b39]">
              {t.nav.contact}
            </a>
          </li>
          {/* Language switcher */}
          <li>
            <a
              href={t.nav.languageSwitchHref}
              className="text-[#b8b3ab] font-medium text-base hover:text-[#e07b39] border border-[#2a3a2a] px-2 py-1 rounded text-xs"
            >
              {t.nav.languageSwitch}
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="bg-[#e07b39] text-[#0a0f0a] px-6 py-3 rounded-lg font-semibold text-sm md:text-base hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[rgba(224,123,57,0.15)] border-none transition-all"
        >
          {t.nav.cta}
        </a>
      </nav>

      {/* Hero Section — clean, spacious */}
      <section className="px-6 md:px-10 py-20 md:py-32 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
          <span className="bg-gradient-to-br from-[#f5f0e8] to-[#d4a574] bg-clip-text text-transparent">
            {t.hero.title}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-[#b8b3ab] max-w-2xl mx-auto mb-12 leading-relaxed">
          {t.hero.subtitle}
        </p>
        <a
          href="#contact"
          className="bg-[#e07b39] text-[#0a0f0a] px-10 py-4 rounded-xl font-semibold text-lg hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[rgba(224,123,57,0.15)] border-none inline-block transition-all"
        >
          {t.hero.cta}
        </a>
      </section>

      {/* Why ExpertsIA + Process (merged into one section) */}
      <section id="approach" className="py-24 md:py-32 bg-[#111a11]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Why */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.approach.title}</h2>
              <p className="text-[#b8b3ab] mb-4 leading-relaxed">{t.approach.p1}</p>
              <p className="text-[#b8b3ab] mb-8 leading-relaxed">{t.approach.p2}</p>
              <ul className="flex flex-col gap-4">
                {t.approach.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span className="text-[#e07b39] text-xl flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Right: Process steps */}
            <div>
              <div className="bg-[#1a261a] px-8 py-10 rounded-2xl border border-[#2a3a2a]">
                <h3 className="text-xl md:text-2xl mb-8">{t.approach.processTitle}</h3>
                <div className="flex flex-col gap-8">
                  {t.approach.steps.map((step, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="bg-gradient-to-br from-[#e07b39] to-[#d4a574] w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold text-[#0a0f0a] flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <strong className="block mb-1">{step.title}</strong>
                        <p className="text-[#b8b3ab] text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-[#b8b3ab] max-w-xl mx-auto">{t.services.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, index) => (
            <div
              key={index}
              className="bg-[#111a11] px-6 py-8 rounded-2xl border border-[#2a3a2a] hover:-translate-y-1 hover:border-[#e07b39] hover:shadow-lg hover:shadow-[rgba(224,123,57,0.1)] transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#e07b39] to-[#d4a574] rounded-xl mx-auto mb-5 flex items-center justify-center text-2xl">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">{service.title}</h3>
              <p className="text-[#b8b3ab] text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.industries.title}</h2>
          <p className="text-[#b8b3ab] max-w-xl mx-auto">{t.industries.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.industries.items.map((industry, index) => (
            <div
              key={index}
              className="bg-[#1a261a] px-4 py-6 rounded-xl border border-[#2a3a2a] text-center hover:-translate-y-1 hover:border-[#e07b39] transition-all"
            >
              <span className="text-3xl mb-2 block">{industry.icon}</span>
              <span className="font-semibold text-sm">{industry.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-[#111a11]">
        <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-[#b8b3ab] mb-12">{t.contact.subtitle}</p>
          <ContactForm locale={locale} labels={{
            namePlaceholder: t.contact.namePlaceholder,
            emailPlaceholder: t.contact.emailPlaceholder,
            companyPlaceholder: t.contact.companyPlaceholder,
            messagePlaceholder: t.contact.messagePlaceholder,
            submit: t.contact.submit,
          }} />
          <a
            href="https://www.linkedin.com/in/marchandcyril/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[#b8b3ab] hover:text-[#e07b39] mt-10"
          >
            <span>🔗</span>
            {t.contact.linkedin}
          </a>
        </div>
      </section>

      {/* Footer with newsletter */}
      <footer className="px-6 md:px-10 py-16 border-t border-[#2a3a2a] text-[#b8b3ab]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-10">
            <h3 className="text-[#f5f0e8] font-bold text-lg mb-2">
              {locale === 'fr' ? 'La Veille IA Décideurs' : 'The AI Briefing'}
            </h3>
            <p className="text-sm mb-4">
              {locale === 'fr'
                ? "1 email par semaine. Actualité IA, outils et retours d'expérience. Sans spam."
                : '1 email per week. AI news, tools and case studies. No spam.'}
            </p>
            <NewsletterCapture locale={locale} />
          </div>
          <div className="border-t border-[#2a3a2a] pt-8">
            <p className="text-sm">{t.footer}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
