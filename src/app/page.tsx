import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBackdrop from "@/components/fx/PageBackdrop";
import HeroFilm from "@/components/fx/HeroFilm";
import TiltCard from "@/components/fx/TiltCard";
import Reveal from "@/components/fx/Reveal";
import { ScrollProgress, ParallaxFloat } from "@/components/fx/MotionFx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vaslix | AI Automation Agency & B2B Infrastructure",
  description: "Vaslix is an AI automation agency building custom voice/chat assistants, lead generation systems, and futuristic 3D platforms for B2B brands.",
  alternates: {
    canonical: 'https://vaslix.com',
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Vaslix",
        "url": "https://vaslix.com",
        "logo": "https://vaslix.com/icon.png",
        "sameAs": [
          "https://www.linkedin.com/company/vaslix",
          "https://clutch.co/profile/vaslix",
          "https://www.goodfirms.co/company/vaslix"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "hello@vaslix.in",
          "telephone": "+91-9453283929",
          "contactType": "customer service"
        }
      },
      {
        "@type": "Service",
        "provider": {
          "@type": "Organization",
          "name": "Vaslix"
        },
        "name": "AI Automation Agency",
        "description": "Custom AI voice/chat assistants, lead generation systems, and futuristic 3D platforms for B2B brands."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://vaslix.com"
        }]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="relative overflow-hidden">
        <ScrollProgress />
        <HeroFilm />
        <PageBackdrop />

        {/* Core Services Section */}
        <section className="relative px-margin-page max-w-container-max mx-auto py-section-gap">
          <ParallaxFloat speed={1.3} className="absolute -top-40 -left-52 w-[520px] h-[520px] -z-10">
            <div aria-hidden="true" className="ambient-blob ambient-violet blob-d1 inset-0"></div>
          </ParallaxFloat>
          <ParallaxFloat speed={-0.9} className="absolute top-1/2 -right-40 w-[420px] h-[420px] -z-10">
            <div aria-hidden="true" className="ambient-blob ambient-gold blob-d2 inset-0"></div>
          </ParallaxFloat>
          <Reveal className="mb-16 text-center">
            <h2 className="h2-sheen text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our Core Services</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto text-lg">We build systems that save time, increase revenue, and automate operations.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              { title: "AI WhatsApp Chatbots", icon: "chat", desc: "Smart assistants trained specifically for your business that reply instantly, qualify leads, and book appointments." },
              { title: "AI Voice Calling Agents", icon: "call", desc: "AI receptionists capable of handling inbound and outbound calls like a real human in multiple languages." },
              { title: "Premium 3D Websites", icon: "view_in_ar", desc: "Futuristic, interactive 3D interfaces and SaaS platforms designed to help your brand stand out." }
            ].map((service, i) => (
              <Reveal key={service.title} delay={i * 120} className="h-full">
                <TiltCard className="glass-card p-10 rounded-2xl group hover:border-primary/30 cursor-default h-full">
                  <div className="icon-glow w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-primary text-[32px]">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{service.desc}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* AI Infrastructure Section (Bento Grid) */}
        <section className="relative px-margin-page max-w-container-max mx-auto py-section-gap">
          <ParallaxFloat speed={-1.1} className="absolute -top-24 -right-48 w-[480px] h-[480px] -z-10">
            <div aria-hidden="true" className="ambient-blob ambient-lav blob-d2 inset-0"></div>
          </ParallaxFloat>
          <ParallaxFloat speed={1.5} className="absolute bottom-0 -left-56 w-[560px] h-[560px] -z-10">
            <div aria-hidden="true" className="ambient-blob ambient-violet inset-0"></div>
          </ParallaxFloat>
          <Reveal className="mb-16">
            <h2 className="h2-sheen text-4xl md:text-5xl font-bold mb-4 tracking-tight">AI-Powered Business Infrastructure</h2>
            <p className="text-on-surface-variant max-w-xl text-lg">Every system is built with automation and scalability in mind.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Custom Automation */}
            <Reveal className="md:col-span-8">
              <TiltCard max={4} className="glass-card rounded-2xl p-0 flex flex-col justify-between group cursor-pointer min-h-[380px] h-auto md:h-[450px] overflow-hidden border-primary/20">
                <div className="absolute inset-0 z-0">
                  <img loading="lazy" src="/automation.png" alt="Automation" className="kenburns w-full h-full object-cover opacity-25 group-hover:opacity-45 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                </div>
                <div className="relative z-10 p-6 sm:p-10 flex flex-col h-full justify-between">
                  <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-3 sm:gap-0">
                    <div className="icon-glow p-4 rounded-xl bg-primary/10 border border-primary/20 backdrop-blur-md">
                      <span className="material-symbols-outlined text-primary text-4xl">settings_suggest</span>
                    </div>
                    <span className="font-bold text-xs tracking-widest text-primary sm:text-right">Custom AI Automation Systems</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4 tracking-tight">Tailored Business Workflows</h3>
                    <p className="text-on-surface-variant max-w-md leading-relaxed">From automated lead follow-ups to CRM automation and sales pipelines, we build systems that fit your specific business needs.</p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
            {/* Lead Gen */}
            <Reveal delay={120} className="md:col-span-4">
              <TiltCard max={5} className="glass-card rounded-2xl p-0 flex flex-col justify-between min-h-[380px] h-auto md:h-[450px] overflow-hidden border-secondary/20 group">
                <div className="absolute inset-0 z-0">
                  <img loading="lazy" src="/leads.png" alt="Leads" className="kenburns w-full h-full object-cover opacity-25 group-hover:opacity-45 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-b from-background via-background/20 to-transparent"></div>
                </div>
                <div className="relative z-10 p-10 flex flex-col h-full justify-between">
                  <div className="icon-glow p-4 w-fit rounded-xl bg-secondary/10 border border-secondary/20 backdrop-blur-md">
                    <span className="material-symbols-outlined text-secondary text-4xl">person_search</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight">Lead Generation & Data Scraping</h3>
                    <p className="text-on-surface-variant leading-relaxed">Building highly targeted lead pipelines using email scraping, LinkedIn lead gen, and contact database building.</p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
            {/* Content Systems */}
            <Reveal className="md:col-span-6">
              <TiltCard max={4} className="glass-card rounded-2xl p-10 flex flex-col sm:flex-row gap-8 items-center text-center sm:text-left hover:bg-tertiary/5 border-tertiary/10 h-full">
                <div className="icon-glow p-4 rounded-xl bg-tertiary/10 border border-tertiary/20 shrink-0">
                  <span className="material-symbols-outlined text-tertiary text-4xl">content_copy</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 tracking-tight">AI Content Systems</h3>
                  <p className="text-on-surface-variant leading-relaxed">Automate social media content, ad creatives, and personalized outreach messages.</p>
                </div>
              </TiltCard>
            </Reveal>
            {/* Meta Ads */}
            <Reveal delay={120} className="md:col-span-6">
              <TiltCard max={4} className="glass-card rounded-2xl p-10 flex flex-col sm:flex-row gap-8 items-center text-center sm:text-left hover:bg-primary/5 border-primary/10 h-full">
                <div className="icon-glow p-4 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
                  <span className="material-symbols-outlined text-primary text-4xl">ads_click</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 tracking-tight">Meta Ads & AI Ad Creatives</h3>
                  <p className="text-on-surface-variant leading-relaxed">High-converting funnels with AI-generated creatives and retargeting systems.</p>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative px-margin-page max-w-container-max mx-auto py-section-gap border-t border-outline-variant/10">
          <ParallaxFloat speed={1.2} className="absolute top-10 -right-52 w-[500px] h-[500px] -z-10">
            <div aria-hidden="true" className="ambient-blob ambient-violet blob-d1 inset-0"></div>
          </ParallaxFloat>
          <ParallaxFloat speed={-0.8} className="absolute bottom-0 -left-32 w-[380px] h-[380px] -z-10">
            <div aria-hidden="true" className="ambient-blob ambient-gold inset-0"></div>
          </ParallaxFloat>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <Reveal>
              <h2 className="h2-sheen text-5xl font-bold mb-8 tracking-tight">Connect With Us</h2>
              <p className="text-xl text-on-surface-variant mb-12 leading-relaxed">Ready to transform your business with AI? Let&apos;s discuss your custom automation roadmap.</p>
              <div className="space-y-8">
                <a href="mailto:hello@vaslix.in" className="flex items-center gap-6 group">
                  <div className="icon-glow w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all">
                    <span className="material-symbols-outlined text-primary text-3xl">mail</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Email Us</div>
                    <div className="text-xl font-bold text-on-surface">hello@vaslix.in</div>
                  </div>
                </a>
                <a href="https://calendly.com/tasmiyasiddiqui457/quick-discovery-call" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="icon-glow w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all">
                    <span className="material-symbols-outlined text-primary text-3xl">calendar_today</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Schedule Call</div>
                    <div className="text-xl font-bold text-on-surface">Quick Discovery Call</div>
                  </div>
                </a>
                <a href="https://wa.me/919453283929" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="icon-glow w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all">
                    <span className="material-symbols-outlined text-primary text-3xl">chat</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">WhatsApp</div>
                    <div className="text-xl font-bold text-on-surface">+91 9453283929</div>
                  </div>
                </a>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <TiltCard max={3} className="glass-card p-1 rounded-3xl overflow-hidden group">
                <div className="glow-breathe absolute inset-0 bg-primary/20 blur-3xl"></div>
                <div className="relative bg-surface-container-low/80 backdrop-blur-xl p-12 rounded-[22px] border border-white/5">
                  <h3 className="text-2xl font-bold mb-6 tracking-tight">Request Strategy Briefing</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Full Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary/50 focus:shadow-[0_0_20px_rgba(94, 234, 212,0.1)] transition-all" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Business Email</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary/50 focus:shadow-[0_0_20px_rgba(94, 234, 212,0.1)] transition-all" placeholder="your@company.com" />
                    </div>
                    <button className="btn-sheen w-full bg-primary text-on-primary font-bold py-5 rounded-xl hover:shadow-[0_0_30px_rgba(94, 234, 212,0.3)] transition-all mt-4">
                      Send Inquiry
                    </button>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </section>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919453283929"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 sm:bottom-10 sm:right-10 z-[60] w-12 h-12 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all group"
        >
          <span aria-hidden="true" className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping"></span>
          <span className="material-symbols-outlined text-white text-xl sm:text-3xl group-hover:animate-bounce">chat</span>
          <div className="absolute right-14 sm:right-20 bg-white text-black px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap shadow-xl pointer-events-none hidden sm:block">
            Chat with us
          </div>
        </a>
      </main>
      <Footer />
    </>
  );
}
