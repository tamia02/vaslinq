import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBackdrop from "@/components/fx/PageBackdrop";
import TiltCard from "@/components/fx/TiltCard";
import Reveal from "@/components/fx/Reveal";
import { ScrollProgress, Magnetic, ParallaxFloat, HeroIntro, HeroItem } from "@/components/fx/MotionFx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium 3D Websites, SaaS Platforms & Meta Ads | Vaslix",
  description: "Futuristic 3D web design, high-performance SaaS interfaces, and AI-driven Meta Ads infrastructure for startups and luxury brands.",
};

export default function ExtendedPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <ScrollProgress />
        <PageBackdrop />
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-16 px-margin-page bg-mesh-gradient overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <ParallaxFloat speed={1.1} className="absolute top-1/4 left-1/4 w-[500px] h-[500px]">
              <div className="ambient-blob ambient-violet inset-0"></div>
            </ParallaxFloat>
            <ParallaxFloat speed={-0.9} className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px]">
              <div className="ambient-blob ambient-lav blob-d1 inset-0"></div>
            </ParallaxFloat>
          </div>
          <div className="max-w-4xl w-full text-center relative z-10">
            <HeroIntro>
              <HeroItem>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-8 border border-primary/20">
                  <span className="material-symbols-outlined text-[14px] text-primary">circle</span>
                  <span className="font-bold text-[10px] tracking-widest text-primary/80">Premium Development</span>
                </div>
              </HeroItem>
              <HeroItem>
                <h1 className="headline-sheen text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-[1.05] tracking-tighter drop-shadow-[0_10px_40px_rgba(15, 118, 110,0.35)]">
                  Futuristic 3D Websites & <br/>
                  <span className="headline-accent">SaaS Platforms.</span>
                </h1>
              </HeroItem>
              <HeroItem>
                <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
                  We design interactive 3D interfaces and high-performance platforms that help brands stand out in the intelligence age.
                </p>
              </HeroItem>
            </HeroIntro>
          </div>
        </section>

        {/* 3D Websites & SaaS Breakdown */}
        <section className="py-section-gap px-margin-page max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
            <Reveal className="space-y-12">
              <div>
                <h2 className="h2-sheen text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">Interactive UI. <br/><span className="text-primary italic">Premium Performance.</span></h2>
                <p className="text-lg text-on-surface-variant mb-12 max-w-xl leading-relaxed">
                  Ideal for startups, AI companies, and luxury brands looking to command attention through modern branding and high-conversion design.
                </p>
                <div className="grid grid-cols-2 gap-12">
                  {[
                    { label: "Design Type", value: "3D / Interactive" },
                    { label: "Optimization", value: "Ultra-Fast Performance" },
                    { label: "UX Strategy", value: "Revenue Focused" },
                    { label: "Integration", value: "AI-First Approach" }
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-primary mb-2 tracking-tight">{stat.value}</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={120} className="relative">
              <TiltCard max={5} className="aspect-square w-full glass-card rounded-[40px] flex items-center justify-center p-12 border-primary/20 shadow-[0_0_80px_rgba(94, 234, 212,0.1)] overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 animate-pulse"></div>
                <div className="relative z-10 text-center space-y-8">
                  <span className="material-symbols-outlined text-[120px] text-primary/40">view_in_ar</span>
                  <div className="space-y-3">
                    <div className="h-2 w-48 bg-primary/20 rounded-full mx-auto"></div>
                    <div className="h-2 w-32 bg-primary/10 rounded-full mx-auto"></div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </section>

        {/* Marketing & Ads Section */}
        <section className="py-section-gap px-margin-page bg-[#04100e]/50 relative overflow-hidden">
          <div className="cinematic-glow -top-48 right-0 opacity-20"></div>
          <div className="max-w-container-max mx-auto relative z-10">
            <Reveal className="text-center mb-24">
              <span className="font-bold text-[10px] tracking-[0.4em] text-primary/60 mb-6 block">Growth Infrastructure</span>
              <h2 className="h2-sheen text-5xl md:text-6xl font-bold leading-tight tracking-tight">Meta Ads & <br/><span className="headline-accent">AI Ad Creatives</span></h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Reveal className="md:col-span-2">
                <TiltCard max={3} className="glass-card p-0 rounded-3xl group overflow-hidden border-primary/20 min-h-[380px] h-auto md:h-[500px]">
                  <img loading="lazy" src="/ads.png" alt="Meta Ads Automation" className="kenburns w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04100e] via-[#04100e]/40 to-transparent"></div>
                  <div className="absolute bottom-12 left-12 right-12">
                    <div className="icon-glow mb-6 p-4 w-fit rounded-2xl bg-primary/10 border border-primary/20">
                      <span className="material-symbols-outlined text-primary text-[36px]">ads_click</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-6 tracking-tight">High-Converting Ad Infrastructure</h3>
                    <p className="text-on-surface-variant max-w-xl leading-relaxed text-lg">Strategy-first Meta campaigns designed to maximize ROAS and scale lead volume efficiently using dynamic AI-generated visual assets.</p>
                  </div>
                </TiltCard>
              </Reveal>
              <Reveal delay={120}>
                <TiltCard max={5} className="glass-card p-12 rounded-3xl group overflow-hidden hover:bg-secondary/5 border-secondary/20 flex flex-col justify-center h-full">
                  <div className="icon-glow mb-10 p-4 w-fit rounded-2xl bg-secondary/10 border border-secondary/20">
                    <span className="material-symbols-outlined text-secondary text-[36px]">auto_awesome</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 tracking-tight">AI-Generated Creatives</h3>
                  <p className="text-on-surface-variant leading-relaxed">Dynamic visual assets and copywriting generated by specialized AI agents for rapid testing and optimization across all marketing channels.</p>
                </TiltCard>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CRM & Operations */}
        <section className="py-section-gap relative bg-mesh-gradient overflow-hidden">
          <div className="cinematic-glow bottom-0 left-1/2 -translate-x-1/2 opacity-30"></div>
          <ParallaxFloat speed={-1} className="absolute top-10 -left-40 w-[450px] h-[450px] -z-10">
            <div className="ambient-blob ambient-gold inset-0"></div>
          </ParallaxFloat>
          <div className="max-w-4xl mx-auto px-margin-page relative z-10">
            <Reveal className="text-center mb-24">
              <h2 className="h2-sheen text-5xl md:text-6xl font-bold mb-6 tracking-tight">CRM Systems & Operations</h2>
              <p className="text-xl text-on-surface-variant leading-relaxed">Custom systems built around your specific business workflow.</p>
            </Reveal>
            <Reveal delay={100}>
              <TiltCard max={2} className="glass-card rounded-[32px] overflow-hidden border-outline-variant/30 backdrop-blur-3xl">
                <div className="grid grid-cols-1 divide-y divide-outline-variant/20">
                  {[
                    { label: "Lead Tracking", value: "Real-time Pipeline", isText: true },
                    { label: "Team Dashboards", value: "Unified Command", isText: true },
                    { label: "Automated Reminders", value: "Zero Missed Leads", isText: true },
                    { label: "Sales Analytics", value: "Smart Forecasting", isText: true }
                  ].map((spec) => (
                    <div key={spec.label} className="flex flex-col sm:flex-row justify-between items-center p-12 hover:bg-primary/5 transition-all group cursor-default">
                      <span className="font-bold text-[10px] tracking-[0.3em] text-on-surface-variant group-hover:text-primary transition-colors mb-4 sm:mb-0">{spec.label}</span>
                      <span className="text-3xl font-bold text-primary tracking-tighter transition-transform group-hover:scale-105">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-section-gap px-margin-page text-center relative mb-section-gap">
          <div className="cinematic-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
          <ParallaxFloat speed={0.9} className="absolute top-0 right-0 w-[500px] h-[500px] -z-10">
            <div className="ambient-blob ambient-violet blob-d2 inset-0"></div>
          </ParallaxFloat>
          <Reveal className="max-w-4xl mx-auto relative z-10">
            <h2 className="h2-sheen text-5xl md:text-7xl font-bold mb-16 tracking-tighter leading-tight">Scale your business <br/>with Vaslix.</h2>
            <Magnetic className="inline-block">
              <button className="btn-sheen px-16 py-8 bg-primary text-on-primary font-bold text-2xl rounded-2xl hover:shadow-[0_0_60px_rgba(94, 234, 212,0.5)] transition-all active:scale-95">
                Start Your Automation
              </button>
            </Magnetic>
            <p className="mt-12 font-bold text-[10px] text-on-surface-variant tracking-[0.4em] opacity-60">AI-Powered Business Infrastructure. All Rights Reserved.</p>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
