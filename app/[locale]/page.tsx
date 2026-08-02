import Logo from '@/components/Logo';
import ContactForm from '@/components/ContactForm';
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
      <nav className="sticky top-0 z-50 flex justify-between items-center px-[60px] py-[25px] bg-[rgba(10,15,10,0.9)] backdrop-blur-[10px] border-b border-[#2a3a2a]">
        <Logo />
        <ul className="flex gap-8 list-none">
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
          className="bg-[#e07b39] text-[#0a0f0a] px-8 py-[14px] rounded-lg font-semibold text-base hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[rgba(224,123,57,0.15)] border-none"
        >
          {t.nav.cta}
        </a>
      </nav>

      {/* Hero Section */}
      <section className="px-10 py-[60px] pb-20 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
          <span className="bg-gradient-to-br from-[#f5f0e8] to-[#d4a574] bg-clip-text text-transparent">
            {t.hero.title}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-[#b8b3ab] max-w-2xl mx-auto mb-10">
          {t.hero.subtitle}
        </p>
        <a
          href="#contact"
          className="bg-[#e07b39] text-[#0a0f0a] px-8 py-[14px] rounded-lg font-semibold text-base hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[rgba(224,123,57,0.15)] border-none inline-block"
        >
          {t.hero.cta}
        </a>

        {/* Process Flow */}
        <div className="flex items-center justify-center gap-8 px-10 py-10 bg-[#111a11] rounded-2xl border border-[#2a3a2a] max-w-4xl mx-auto mt-10">
          <div className="flex items-center gap-3 flex-1 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-[#e07b39] to-[#d4a574] rounded-full flex items-center justify-center font-bold text-base flex-shrink-0">
              1
            </div>
            <span className="text-[#f5f0e8] text-base">{t.process.step1}</span>
          </div>
          <span className="text-[#e07b39] text-2xl flex-shrink-0">→</span>
          <div className="flex items-center gap-3 flex-1 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-[#e07b39] to-[#d4a574] rounded-full flex items-center justify-center font-bold text-base flex-shrink-0">
              2
            </div>
            <span className="text-[#f5f0e8] text-base">{t.process.step2}</span>
          </div>
          <span className="text-[#e07b39] text-2xl flex-shrink-0">→</span>
          <div className="flex items-center gap-3 flex-1 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-[#e07b39] to-[#d4a574] rounded-full flex items-center justify-center font-bold text-base flex-shrink-0">
              3
            </div>
            <span className="text-[#f5f0e8] text-base">{t.process.step3}</span>
          </div>
          <span className="text-[#e07b39] text-2xl flex-shrink-0">→</span>
          <div className="flex items-center gap-3 flex-1 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-[#e07b39] to-[#d4a574] rounded-full flex items-center justify-center font-bold text-base flex-shrink-0">
              4
            </div>
            <span className="text-[#f5f0e8] text-base">{t.process.step4}</span>
          </div>
        </div>
      </section>

      {/* Why ExpertsIA Section */}
      <section id="approach" className="py-[100px] bg-[#111a11]">
        <div className="max-w-6xl mx-auto px-10 grid md:grid-cols-2 gap-[60px] items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">{t.approach.title}</h2>
            <p className="text-[#b8b3ab] mb-4">{t.approach.p1}</p>
            <p className="text-[#b8b3ab] mb-6">{t.approach.p2}</p>
            <ul className="flex flex-col gap-4">
              {t.approach.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="text-[#e07b39] text-xl">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="bg-[#1a261a] px-10 py-10 rounded-2xl border border-[#2a3a2a]">
              <h3 className="text-xl md:text-2xl mb-5">{t.approach.processTitle}</h3>
              <div className="flex flex-col gap-5">
                {t.approach.steps.map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="bg-[#e07b39] w-[30px] h-[30px] rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <strong className="block">{step.title}</strong>
                      <p className="text-[#b8b3ab] text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-[100px] px-10 max-w-6xl mx-auto">
        <div className="text-center mb-[60px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-[#b8b3ab] max-w-xl mx-auto">{t.services.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {t.services.items.map((service, index) => (
            <div
              key={index}
              className="bg-[#111a11] px-10 py-10 rounded-2xl border border-[#2a3a2a] hover:-translate-y-1 hover:border-[#e07b39] hover:shadow-lg hover:shadow-[rgba(224,123,57,0.1)] transition-all"
            >
              <div className="w-[50px] h-[50px] bg-gradient-to-br from-[#e07b39] to-[#d4a574] rounded-xl mx-auto mb-5 flex items-center justify-center text-2xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{service.title}</h3>
              <p className="text-[#b8b3ab] text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-[100px] px-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.industries.title}</h2>
          <p className="text-[#b8b3ab] max-w-xl mx-auto">{t.industries.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {t.industries.items.map((industry, index) => (
            <div
              key={index}
              className="bg-[#1a261a] px-5 py-5 rounded-xl border border-[#2a3a2a] text-center hover:-translate-y-1 hover:border-[#e07b39] transition-all"
            >
              <span className="text-3xl mb-3 block">{industry.icon}</span>
              <span className="font-semibold">{industry.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-[100px] bg-[#111a11] text-center px-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">{t.contact.title}</h2>
          <p className="text-[#b8b3ab] mb-10">{t.contact.subtitle}</p>
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
            className="inline-flex items-center gap-3 text-[#b8b3ab] hover:text-[#e07b39] mt-8"
          >
            <span>🔗</span>
            {t.contact.linkedin}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-10 py-10 text-center border-t border-[#2a3a2a] text-[#b8b3ab] text-sm">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}
