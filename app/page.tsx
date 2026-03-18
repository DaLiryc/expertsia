import Logo from '@/components/Logo';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-[60px] py-[25px] bg-[rgba(10,15,10,0.9)] backdrop-blur-[10px] border-b border-[#2a3a2a]">
        <Logo />
        <ul className="flex gap-8 list-none">
          <li>
            <a href="#approach" className="text-[#b8b3ab] font-medium text-base hover:text-[#e07b39]">
              Approach
            </a>
          </li>
          <li>
            <a href="#services" className="text-[#b8b3ab] font-medium text-base hover:text-[#e07b39]">
              Services
            </a>
          </li>
          <li>
            <a href="#industries" className="text-[#b8b3ab] font-medium text-base hover:text-[#e07b39]">
              Industries
            </a>
          </li>
          <li>
            <a href="#contact" className="text-[#b8b3ab] font-medium text-base hover:text-[#e07b39]">
              Contact
            </a>
          </li>
        </ul>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-[#e07b39] text-[#0a0f0a] px-8 py-[14px] rounded-lg font-semibold text-base hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[rgba(224,123,57,0.15)] border-none"
        >
          Let's Talk
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-10 py-[60px] pb-20 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
          <span className="bg-gradient-to-br from-[#f5f0e8] to-[#d4a574] bg-clip-text text-transparent">
            Transform Your Business with AI & Data
          </span>
        </h1>
        <p className="text-lg md:text-xl text-[#b8b3ab] max-w-2xl mx-auto mb-10">
          We help all organizations from startups to big corporations optimize business
          processes, implement agentic workflows, and train teams for the AI era.
          Grounded in business, powered by technology.
        </p>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-[#e07b39] text-[#0a0f0a] px-8 py-[14px] rounded-lg font-semibold text-base hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[rgba(224,123,57,0.15)] border-none"
        >
          Let's Talk About Your Needs
        </button>

        {/* Process Flow */}
        <div className="flex items-center justify-center gap-8 px-10 py-10 bg-[#111a11] rounded-2xl border border-[#2a3a2a] max-w-4xl mx-auto mt-10">
          <div className="flex items-center gap-3 flex-1 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-[#e07b39] to-[#d4a574] rounded-full flex items-center justify-center font-bold text-base flex-shrink-0">
              1
            </div>
            <span className="text-[#f5f0e8] text-base">Audit & Discovery</span>
          </div>
          <span className="text-[#e07b39] text-2xl flex-shrink-0">→</span>
          <div className="flex items-center gap-3 flex-1 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-[#e07b39] to-[#d4a574] rounded-full flex items-center justify-center font-bold text-base flex-shrink-0">
              2
            </div>
            <span className="text-[#f5f0e8] text-base">Strategy Design</span>
          </div>
          <span className="text-[#e07b39] text-2xl flex-shrink-0">→</span>
          <div className="flex items-center gap-3 flex-1 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-[#e07b39] to-[#d4a574] rounded-full flex items-center justify-center font-bold text-base flex-shrink-0">
              3
            </div>
            <span className="text-[#f5f0e8] text-base">Implementation</span>
          </div>
          <span className="text-[#e07b39] text-2xl flex-shrink-0">→</span>
          <div className="flex items-center gap-3 flex-1 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-[#e07b39] to-[#d4a574] rounded-full flex items-center justify-center font-bold text-base flex-shrink-0">
              4
            </div>
            <span className="text-[#f5f0e8] text-base">Team Enablement</span>
          </div>
        </div>
      </section>

      {/* Why ExpertsIA Section */}
      <section id="approach" className="py-[100px] bg-[#111a11]">
        <div className="max-w-6xl mx-auto px-10 grid md:grid-cols-2 gap-[60px] items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Why ExpertsIA?</h2>
            <p className="text-[#b8b3ab] mb-4">
              Unlike typical tech agencies, we bring real scale-up operations experience
              to the table. We understand business first, technology second.
            </p>
            <p className="text-[#b8b3ab] mb-6">
              Our approach is grounded in practical challenges we've lived through, not just
              theoretical concepts. We know what works in the real world.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="text-[#e07b39] text-xl">✓</span>
                <span>Business-first perspective, not tech-first</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#e07b39] text-xl">✓</span>
                <span>ROI-driven project management</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#e07b39] text-xl">✓</span>
                <span>Hands-on scale-up experience</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#e07b39] text-xl">✓</span>
                <span>End-to-end support from strategy to execution</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#e07b39] text-xl">✓</span>
                <span>Focus on practical, implementable solutions</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="bg-[#1a261a] px-10 py-10 rounded-2xl border border-[#2a3a2a]">
              <h3 className="text-xl md:text-2xl mb-5">Our Process</h3>
              <div className="flex flex-col gap-5">
                <div className="flex gap-4 items-start">
                  <div className="bg-[#e07b39] w-[30px] h-[30px] rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <strong className="block">Discovery</strong>
                    <p className="text-[#b8b3ab] text-sm">
                      Assess your business, goals, and readiness for AI
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-[#e07b39] w-[30px] h-[30px] rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <strong className="block">Strategy</strong>
                    <p className="text-[#b8b3ab] text-sm">
                      Build a roadmap with clear milestones and ROI targets
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-[#e07b39] w-[30px] h-[30px] rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <strong className="block">Implementation</strong>
                    <p className="text-[#b8b3ab] text-sm">
                      Execute with agile sprints, continuous feedback, and iteration
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-[#e07b39] w-[30px] h-[30px] rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <strong className="block">Enablement</strong>
                    <p className="text-[#b8b3ab] text-sm">
                      Train teams, hand over knowledge, ensure sustainable adoption
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-[100px] px-10 max-w-6xl mx-auto">
        <div className="text-center mb-[60px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-[#b8b3ab] max-w-xl mx-auto">
            Complete AI and data solutions tailored to your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[
            {
              icon: '⚡',
              title: 'AI Strategy & Roadmap',
              description: 'Assess your current capabilities, identify opportunities, and create a customized AI adoption plan aligned with your business goals.'
            },
            {
              icon: '🔄',
              title: 'Business Process Optimization',
              description: 'Leverage AI and data to streamline operations, reduce inefficiencies, and create automated workflows with tools like n8n.'
            },
            {
              icon: '🤖',
              title: 'Agentic Workflows',
              description: 'Build intelligent AI agents and RAG systems that automate complex tasks, improve decision-making, and boost productivity.'
            },
            {
              icon: '📊',
              title: 'Data Science Projects',
              description: 'Prediction models, clustering algorithms, recommendation engines, and custom analytics built for measurable business impact.'
            },
            {
              icon: '🎓',
              title: 'AI Training & Enablement',
              description: 'Upskill your teams on LLMs, prompt engineering, and AI best practices through workshops and hands-on training sessions.'
            },
            {
              icon: '📈',
              title: 'Change Management',
              description: 'Guide your organization through AI adoption with structured change management, stakeholder alignment, and continuous improvement.'
            },
            {
              icon: '🔍',
              title: 'AI Audit & Assessment',
              description: 'Evaluate existing AI initiatives, identify gaps, and provide recommendations for optimization and governance.'
            },
            {
              icon: '🛠️',
              title: 'Data Infrastructure',
              description: 'Design and implement data pipelines, warehouses, and ETL processes that power your AI and analytics initiatives.'
            }
          ].map((service, index) => (
            <div
              key={index}
              className="bg-[#111a11] px-10 py-10 rounded-2xl border border-[#2a3a2a] hover:-translate-y-1 hover:border-[#e07b39] hover:shadow-lg hover:shadow-[rgba(224,123,57,0.1)] transition-all"
            >
              <div className="w-[50px] h-[50px] bg-gradient-to-br from-[#e07b39] to-[#d4a574] rounded-xl mx-auto mb-5 flex items-center justify-center text-2xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{service.title}</h3>
              <p className="text-[#b8b3ab] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-[100px] px-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industries We Serve
          </h2>
          <p className="text-[#b8b3ab] max-w-xl mx-auto">
            We work across diverse sectors, adapting our expertise to your specific domain
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { icon: '🚀', name: 'Startups' },
            { icon: '📈', name: 'SMEs' },
            { icon: '🏢', name: 'Corporations' },
            { icon: '💰', name: 'Fintech' },
            { icon: '🛒', name: 'E-commerce' },
            { icon: '🏭', name: 'Manufacturing' },
            { icon: '🏥', name: 'Healthcare' },
            { icon: '📦', name: 'Logistics' }
          ].map((industry, index) => (
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
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Let's Talk About Your Needs
          </h2>
          <p className="text-[#b8b3ab] mb-10">
            Ready to transform your business with AI? Get in touch for a free consultation.
          </p>
          <form
            className="flex flex-col gap-4 max-w-md mx-auto"
            action="mailto:cyril@expertsia.dev"
            method="post"
            encType="text/plain"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="px-4 py-[15px] bg-[#1a261a] border border-[#2a3a2a] rounded-lg text-[#f5f0e8] text-base focus:outline-none focus:border-[#e07b39] w-full font-sans"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="px-4 py-[15px] bg-[#1a261a] border border-[#2a3a2a] rounded-lg text-[#f5f0e8] text-base focus:outline-none focus:border-[#e07b39] w-full font-sans"
            />
            <input
              type="text"
              placeholder="Company (Optional)"
              className="px-4 py-[15px] bg-[#1a261a] border border-[#2a3a2a] rounded-lg text-[#f5f0e8] text-base focus:outline-none focus:border-[#e07b39] w-full font-sans"
            />
            <textarea
              placeholder="Tell us about your project or challenge..."
              className="px-4 py-[15px] bg-[#1a261a] border border-[#2a3a2a] rounded-lg text-[#f5f0e8] text-base focus:outline-none focus:border-[#e07b39] w-full font-sans min-h-[150px] resize-y"
            />
            <button
              type="submit"
              className="bg-[#e07b39] text-[#0a0f0a] px-8 py-[14px] rounded-lg font-semibold text-base hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[rgba(224,123,57,0.15)] border-none self-center"
            >
              Send Message
            </button>
          </form>
          <a
            href="https://www.linkedin.com/in/marchandcyril/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[#b8b3ab] hover:text-[#e07b39] mt-8"
          >
            <span>🔗</span>
            Connect on LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-10 py-10 text-center border-t border-[#2a3a2a] text-[#b8b3ab] text-sm">
        <p>© 2026 ExpertsIA. AI Business Transformation for Startups & Corporations.</p>
      </footer>
    </div>
  );
}
