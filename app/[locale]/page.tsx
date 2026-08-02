import {
  Zap, RefreshCw, Bot, BarChart3, GraduationCap,
  TrendingUp, Search, Wrench,
  Rocket, Building2, Landmark, ShoppingCart, Factory, HeartPulse, Package,
  Check, ArrowRight, Clock, ShieldCheck, MapPin,
} from 'lucide-react';
import Logo from '@/components/Logo';
import ContactForm from '@/components/ContactForm';
import NewsletterCapture from '@/components/NewsletterCapture';
import { dictionaries, type Locale } from '@/lib/dictionaries';

const serviceIcons = [Zap, RefreshCw, Bot, BarChart3, GraduationCap, TrendingUp, Search, Wrench];
const industryIcons = [Rocket, TrendingUp, Building2, Landmark, ShoppingCart, Factory, HeartPulse, Package];

const trustBadges = [
  { icon: Clock, fr: 'Réponse sous 48h', en: 'Reply within 48h' },
  { icon: ShieldCheck, fr: 'Code & données chez vous', en: 'Code & data stay yours' },
  { icon: MapPin, fr: '100% distanciel', en: '100% remote' },
];

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = dictionaries[locale as Locale] || dictionaries.en;

  return (
    <div className="min-h-screen relative">
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-[60px] py-4 bg-[rgba(10,15,10,0.72)] backdrop-blur-[20px] border-b border-[#1e2a1e]/60">
        <Logo />
        <ul className="hidden md:flex gap-8 list-none items-center">
          <li><a href="#approach" className="nav-link">{t.nav.approach}</a></li>
          <li><a href="#services" className="nav-link">{t.nav.services}</a></li>
          <li><a href="#industries" className="nav-link">{t.nav.industries}</a></li>
          <li><a href={`/${locale}/blog`} className="nav-link">{locale === 'fr' ? 'Blog' : 'Blog'}</a></li>
          <li><a href="#contact" className="nav-link">{t.nav.contact}</a></li>
          <li>
            <a
              href={t.nav.languageSwitchHref}
              className="text-[#b8b3ab] font-medium text-sm hover:text-[#e07b39] border border-[#2a3a2a]/60 hover:border-[#e07b39]/40 px-2.5 py-1 rounded-md text-xs tracking-wide transition-colors"
            >
              {t.nav.languageSwitch}
            </a>
          </li>
        </ul>
        <a href="#contact" className="btn-primary">{t.nav.cta}</a>
      </nav>

      {/* Hero */}
      <section className="relative px-6 md:px-10 pt-20 pb-24 md:pt-28 md:pb-32 max-w-4xl mx-auto text-center overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(224,123,57,0.12) 0%, rgba(224,123,57,0.04) 30%, transparent 70%)', filter: 'blur(60px)' }}
          aria-hidden="true"
        />
        <div className="relative z-10">
          {/* Eyebrow */}
          <p className="inline-flex items-center gap-2 text-[#e07b39] text-xs md:text-sm font-medium mb-8 px-4 py-2 rounded-full border border-[#e07b39]/20 bg-[#e07b39]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e07b39] animate-pulse" />
            {locale === 'fr' ? 'Agence IA · France · Disponible sous 48h' : 'AI Agency · France · Available within 48h'}
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-[#f5f0e8]" style={{ letterSpacing: '-0.03em' }}>
            {t.hero.title}
          </h1>

          <p className="text-lg md:text-xl text-[#b8b3ab] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {t.hero.subtitle}
          </p>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="btn-primary text-lg inline-flex items-center gap-2">
              {t.hero.cta}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="text-[#b8b3ab] hover:text-[#f5f0e8] font-medium text-base transition-colors px-6 py-3">
              {locale === 'fr' ? 'Voir nos services' : 'See our services'}
            </a>
          </div>

          {/* Trust badges row */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-14">
            {trustBadges.map((badge, i) => {
              const BadgeIcon = badge.icon;
              return (
                <div key={i} className="flex items-center gap-2 text-[#b8b3ab] text-sm">
                  <BadgeIcon className="w-4 h-4 text-[#e07b39]" strokeWidth={1.5} />
                  {locale === 'fr' ? badge.fr : badge.en}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      {/* Why + Process */}
      <section id="approach" className="py-20 md:py-24 bg-[#0d130d]/60 relative">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Why */}
            <div>
              <h2 className="heading-2 mb-6">{t.approach.title}</h2>
              <p className="text-[#b8b3ab] mb-4 leading-relaxed font-light">{t.approach.p1}</p>
              <p className="text-[#b8b3ab] mb-8 leading-relaxed font-light">{t.approach.p2}</p>
              <ul className="flex flex-col gap-4">
                {t.approach.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#e07b39]/10 border border-[#e07b39]/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#e07b39]" strokeWidth={3} />
                    </span>
                    <span className="text-[#f5f0e8] font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Process steps — vertical timeline */}
            <div className="relative">
              <div
                className="absolute left-[19px] top-2 bottom-2 w-px"
                style={{ background: 'linear-gradient(to bottom, rgba(224,123,57,0.4) 0%, rgba(224,123,57,0.1) 50%, transparent 100%)' }}
                aria-hidden="true"
              />
              <div className="mb-8 ml-16">
                <h3 className="text-xl md:text-2xl font-semibold text-[#f5f0e8]" style={{ letterSpacing: '-0.01em' }}>
                  {t.approach.processTitle}
                </h3>
              </div>
              <div className="flex flex-col gap-6">
                {t.approach.steps.map((step, index) => (
                  <div key={index} className="flex gap-5 items-start relative">
                    <div
                      className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-[#0a0f0a] flex-shrink-0 text-sm bg-[#e07b39]"
                    >
                      {index + 1}
                    </div>
                    <div className="card-surface flex-1 -ml-1">
                      <strong className="block mb-1 text-[#f5f0e8] font-semibold">{step.title}</strong>
                      <p className="text-[#b8b3ab] text-sm leading-relaxed font-light">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      {/* Services */}
      <section id="services" className="py-20 md:py-24 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">{t.services.title}</h2>
          <p className="text-[#b8b3ab] max-w-xl mx-auto font-light">{t.services.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index] || Zap;
            return (
              <div key={index} className="service-card group">
                <div className="gradient-border-overlay" aria-hidden="true" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(224,123,57,0.08)', border: '1px solid rgba(224,123,57,0.15)' }}
                    >
                      <Icon className="w-5 h-5 text-[#e07b39]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-semibold text-[#f5f0e8]" style={{ letterSpacing: '-0.01em' }}>
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-[#b8b3ab] text-sm leading-relaxed font-light">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      {/* Industries */}
      <section id="industries" className="py-20 md:py-24 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">{t.industries.title}</h2>
          <p className="text-[#b8b3ab] max-w-xl mx-auto font-light">{t.industries.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.industries.items.map((industry, index) => {
            const Icon = industryIcons[index] || Rocket;
            return (
              <div key={index} className="industry-card">
                <Icon className="w-6 h-6 text-[#e07b39] mb-3 mx-auto" strokeWidth={1.5} />
                <span className="font-medium text-sm text-[#f5f0e8]/90 tracking-wide">{industry.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      {/* Contact */}
      <section id="contact" className="py-20 md:py-24 bg-[#0d130d]/60 relative">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(224,123,57,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }}
          aria-hidden="true"
        />
        <div className="max-w-2xl mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">{t.contact.title}</h2>
            <p className="text-[#b8b3ab] font-light">{t.contact.subtitle}</p>
          </div>
          <ContactForm locale={locale} labels={{
            namePlaceholder: t.contact.namePlaceholder,
            emailPlaceholder: t.contact.emailPlaceholder,
            companyPlaceholder: t.contact.companyPlaceholder,
            messagePlaceholder: t.contact.messagePlaceholder,
            submit: t.contact.submit,
          }} />
          <div className="text-center mt-8">
            <a
              href="https://www.linkedin.com/in/marchandcyril/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#b8b3ab] hover:text-[#e07b39] transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              {t.contact.linkedin}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-[#1e2a1e]/60 pt-16 pb-10 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-12 mb-12 pb-10 border-b border-[#1e2a1e]/50">
            <div className="max-w-md">
              <div className="mb-6"><Logo /></div>
              <h3 className="text-[#f5f0e8] font-semibold text-lg mb-2" style={{ letterSpacing: '-0.01em' }}>
                {locale === 'fr' ? 'La Veille IA Décideurs' : 'The AI Briefing'}
              </h3>
              <p className="text-sm text-[#b8b3ab] mb-4 font-light leading-relaxed">
                {locale === 'fr'
                  ? "1 email par semaine. Actualité IA, outils et retours d'expérience. Sans spam."
                  : '1 email per week. AI news, tools and case studies. No spam.'}
              </p>
              <div className="max-w-sm">
                <NewsletterCapture locale={locale} />
              </div>
            </div>
            <div className="flex gap-12 md:gap-16">
              <div>
                <h4 className="text-[#f5f0e8] text-xs font-semibold uppercase mb-4" style={{ letterSpacing: '0.15em' }}>
                  {locale === 'fr' ? 'Navigation' : 'Navigate'}
                </h4>
                <ul className="flex flex-col gap-3 list-none">
                  <li><a href="#approach" className="footer-link">{t.nav.approach}</a></li>
                  <li><a href="#services" className="footer-link">{t.nav.services}</a></li>
                  <li><a href="#industries" className="footer-link">{t.nav.industries}</a></li>
                  <li><a href="#contact" className="footer-link">{t.nav.contact}</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#f5f0e8] text-xs font-semibold uppercase mb-4" style={{ letterSpacing: '0.15em' }}>
                  {locale === 'fr' ? 'Ressources' : 'Resources'}
                </h4>
                <ul className="flex flex-col gap-3 list-none">
                  <li><a href={`/${locale}/blog`} className="footer-link">Blog</a></li>
                  <li><a href="#contact" className="footer-link">{t.nav.cta}</a></li>
                  <li>
                    <a href={t.nav.languageSwitchHref} className="footer-link">{t.nav.languageSwitch}</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/marchandcyril/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#7a756d]">{t.footer}</p>
            <p className="text-xs text-[#5a554d] uppercase tracking-wider">
              {locale === 'fr' ? 'Conçu avec précision' : 'Crafted with precision'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
