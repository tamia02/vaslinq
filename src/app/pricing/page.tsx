import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBackdrop from "@/components/fx/PageBackdrop";
import TiltCard from "@/components/fx/TiltCard";
import Reveal from "@/components/fx/Reveal";
import { ScrollProgress, ParallaxFloat, HeroIntro, HeroItem } from "@/components/fx/MotionFx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Vaslix AI Automation",
  description: "Transparent pricing for AI automation systems, voice agents, WhatsApp chatbots, and premium 3D web design.",
  alternates: {
    canonical: 'https://vaslix.com/pricing',
  },
};

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://vaslix.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Pricing",
            "item": "https://vaslix.com/pricing"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="relative overflow-hidden pt-20">
        <ScrollProgress />
        <PageBackdrop />
        <section className="relative py-section-gap px-margin-page overflow-hidden">
          <ParallaxFloat speed={-1} className="absolute -top-40 -right-40 w-[600px] h-[600px] -z-10">
            <div className="ambient-blob ambient-violet inset-0"></div>
          </ParallaxFloat>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <HeroIntro>
              <HeroItem>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-8">
                  <span className="font-bold text-[10px] text-primary tracking-widest uppercase">Pricing</span>
                </div>
              </HeroItem>
              <HeroItem>
                <h1 className="headline-sheen text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
                  Simple, Transparent <span className="headline-accent">Pricing.</span>
                </h1>
              </HeroItem>
              <HeroItem>
                <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                  Choose the right automation tier for your business. No hidden fees, just measurable results.
                </p>
              </HeroItem>
            </HeroIntro>
          </div>
        </section>

        <section className="py-section-gap px-margin-page max-w-container-max mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <Reveal>
              <TiltCard max={5} className="glass-card p-10 rounded-[32px] border-white/10 flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Starter</h3>
                  <p className="text-on-surface-variant">For small businesses automating basic support.</p>
                </div>
                <div className="mb-8">
                  <div className="text-4xl font-bold">₹20,000<span className="text-lg text-on-surface-variant font-normal"> /mo</span></div>
                  <div className="text-sm text-on-surface-variant mt-1">Starting from $250 USD</div>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">check</span> Website Chatbot</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">check</span> Basic FAQ Training</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">check</span> Email Notifications</li>
                </ul>
                <button className="w-full py-4 rounded-xl bg-white/5 hover:bg-primary hover:text-on-primary border border-white/10 hover:border-primary transition-all font-bold text-on-surface">
                  Get Started
                </button>
              </TiltCard>
            </Reveal>

            {/* Growth */}
            <Reveal delay={100}>
              <TiltCard max={5} className="glass-card p-10 rounded-[32px] border-primary/40 shadow-[0_0_80px_rgba(94, 234, 212,0.1)] flex flex-col h-full relative overflow-hidden group">
                <div className="absolute top-0 inset-x-0 h-1 bg-primary"></div>
                <div className="absolute inset-0 bg-primary/5 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8">
                    <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">Most Popular</div>
                    <h3 className="text-2xl font-bold mb-2">Growth</h3>
                    <p className="text-on-surface-variant">For growing teams needing lead gen & CRM sync.</p>
                  </div>
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-primary">₹50,000<span className="text-lg text-on-surface-variant font-normal"> /mo</span></div>
                    <div className="text-sm text-on-surface-variant mt-1">Starting from $600 USD</div>
                  </div>
                  <ul className="space-y-4 mb-10 flex-1">
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">check</span> WhatsApp AI Assistant</li>
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">check</span> CRM Integration</li>
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">check</span> Automated Follow-ups</li>
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">check</span> Priority Support</li>
                  </ul>
                  <button className="w-full py-4 rounded-xl bg-primary text-on-primary font-bold hover:shadow-[0_0_30px_rgba(94, 234, 212,0.3)] transition-all">
                    Scale Your Business
                  </button>
                </div>
              </TiltCard>
            </Reveal>

            {/* Enterprise */}
            <Reveal delay={200}>
              <TiltCard max={5} className="glass-card p-10 rounded-[32px] border-white/10 flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <p className="text-on-surface-variant">Full-scale infrastructure for large operations.</p>
                </div>
                <div className="mb-8">
                  <div className="text-4xl font-bold">Custom</div>
                  <div className="text-sm text-on-surface-variant mt-1">Tailored to your scale</div>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">check</span> AI Voice Calling Agents</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">check</span> Multi-Platform Bots</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">check</span> Custom Web Apps & 3D UI</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">check</span> Dedicated Account Manager</li>
                </ul>
                <button className="w-full py-4 rounded-xl bg-white/5 hover:bg-primary hover:text-on-primary border border-white/10 hover:border-primary transition-all font-bold text-on-surface">
                  Contact Sales
                </button>
              </TiltCard>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
