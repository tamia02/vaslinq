import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBackdrop from "@/components/fx/PageBackdrop";
import TiltCard from "@/components/fx/TiltCard";
import Reveal from "@/components/fx/Reveal";
import { ScrollProgress, ParallaxFloat, HeroIntro, HeroItem } from "@/components/fx/MotionFx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Vaslix | Request a Strategy Briefing",
  description: "Get in touch with Vaslix to discuss your AI automation roadmap, lead generation pipelines, and futuristic 3D web platforms.",
  alternates: {
    canonical: 'https://vaslix.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-20">
        <ScrollProgress />
        <PageBackdrop />
        <section className="relative px-margin-page max-w-container-max mx-auto py-section-gap min-h-[80vh] flex items-center">
          <ParallaxFloat speed={1.2} className="absolute top-10 -right-52 w-[500px] h-[500px] -z-10">
            <div aria-hidden="true" className="ambient-blob ambient-violet blob-d1 inset-0"></div>
          </ParallaxFloat>
          <ParallaxFloat speed={-0.8} className="absolute bottom-0 -left-32 w-[380px] h-[380px] -z-10">
            <div aria-hidden="true" className="ambient-blob ambient-gold inset-0"></div>
          </ParallaxFloat>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center w-full">
            <Reveal>
              <h1 className="headline-sheen text-5xl md:text-6xl font-bold mb-8 tracking-tight">Connect With Us</h1>
              <p className="text-xl text-on-surface-variant mb-12 leading-relaxed max-w-lg">Ready to transform your business with AI? Let&apos;s discuss your custom automation roadmap.</p>
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
                <div className="relative bg-surface-container-low/80 backdrop-blur-xl p-8 sm:p-12 rounded-[22px] border border-white/5">
                  <h3 className="text-2xl font-bold mb-6 tracking-tight">Request Strategy Briefing</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Full Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary/50 focus:shadow-[0_0_20px_rgba(94, 234, 212,0.1)] transition-all text-on-surface" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Business Email</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary/50 focus:shadow-[0_0_20px_rgba(94, 234, 212,0.1)] transition-all text-on-surface" placeholder="your@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Message</label>
                      <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary/50 focus:shadow-[0_0_20px_rgba(94, 234, 212,0.1)] transition-all text-on-surface" placeholder="Tell us about your business goals..."></textarea>
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
      </main>
      <Footer />
    </>
  );
}
