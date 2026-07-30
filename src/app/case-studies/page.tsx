import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBackdrop from "@/components/fx/PageBackdrop";
import TiltCard from "@/components/fx/TiltCard";
import Reveal from "@/components/fx/Reveal";
import { ScrollProgress, ParallaxFloat, HeroIntro, HeroItem } from "@/components/fx/MotionFx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Client Results | Vaslix",
  description: "See how Vaslix's AI automation, voice agents, and lead generation systems have delivered measurable revenue impact for our clients.",
  alternates: {
    canonical: 'https://vaslix.com/case-studies',
  },
};

export default function CaseStudiesPage() {
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
            "name": "Case Studies",
            "item": "https://vaslix.com/case-studies"
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
          <ParallaxFloat speed={-1} className="absolute -top-40 -left-40 w-[600px] h-[600px] -z-10">
            <div className="ambient-blob ambient-gold inset-0"></div>
          </ParallaxFloat>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <HeroIntro>
              <HeroItem>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-8">
                  <span className="font-bold text-[10px] text-primary tracking-widest uppercase">Case Studies</span>
                </div>
              </HeroItem>
              <HeroItem>
                <h1 className="headline-sheen text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
                  Real Business <span className="headline-accent">Impact.</span>
                </h1>
              </HeroItem>
              <HeroItem>
                <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                  How our AI automation systems reduce operational costs and dramatically accelerate lead response times.
                </p>
              </HeroItem>
            </HeroIntro>
          </div>
        </section>

        <section className="py-section-gap px-margin-page max-w-container-max mx-auto space-y-24">
          {/* Case Study 1 */}
          <Reveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <TiltCard max={3} className="glass-card rounded-[32px] overflow-hidden border-primary/20 aspect-video flex items-center justify-center p-8 bg-gradient-to-br from-primary/10 to-transparent">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">90s</div>
                  <div className="text-on-surface-variant tracking-widest uppercase font-bold text-sm">Response Time</div>
                </div>
              </TiltCard>
              <div className="space-y-6">
                <div className="text-primary font-bold tracking-widest uppercase text-xs">Real Estate Agency</div>
                <h2 className="text-3xl font-bold tracking-tight">Reduced lead response time from 4 hours to 90 seconds.</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  By deploying a custom AI WhatsApp Chatbot connected directly to their CRM, we automated initial lead qualification. The AI instantly engaged prospects, collected property preferences, and booked site visits around the clock.
                </p>
                <div className="flex gap-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-on-surface-variant">WhatsApp Bot</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-on-surface-variant">CRM Sync</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Case Study 2 */}
          <Reveal delay={100}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <div className="text-secondary font-bold tracking-widest uppercase text-xs">Healthcare Clinic</div>
                <h2 className="text-3xl font-bold tracking-tight">Recovered 30% of missed inbound patient calls.</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  We integrated an AI Voice Calling Agent to handle after-hours and overflow calls. The agent successfully scheduled appointments in multiple regional languages and answered routine FAQs, eliminating the need for an extended shift receptionist.
                </p>
                <div className="flex gap-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-on-surface-variant">AI Voice Agent</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-on-surface-variant">Multi-Language</span>
                </div>
              </div>
              <TiltCard max={3} className="glass-card rounded-[32px] overflow-hidden border-secondary/20 aspect-video flex items-center justify-center p-8 bg-gradient-to-br from-secondary/10 to-transparent order-1 md:order-2">
                <div className="text-center">
                  <div className="text-6xl font-bold text-secondary mb-2">+30%</div>
                  <div className="text-on-surface-variant tracking-widest uppercase font-bold text-sm">Call Recovery</div>
                </div>
              </TiltCard>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
