import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBackdrop from "@/components/fx/PageBackdrop";
import TiltCard from "@/components/fx/TiltCard";
import Reveal from "@/components/fx/Reveal";
import { ScrollProgress, ParallaxFloat, HeroIntro, HeroItem } from "@/components/fx/MotionFx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Vaslix | AI Automation Agency",
  description: "Learn about Vaslix, our mission, our expertise in AI automation and web design, and why businesses trust us to scale their operations.",
  alternates: {
    canonical: 'https://vaslix.com/about',
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Tasmiya Siddiqui",
        "jobTitle": "Founder & AI Strategist",
        "worksFor": {
          "@type": "Organization",
          "name": "Vaslix"
        }
      },
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
            "name": "About",
            "item": "https://vaslix.com/about"
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
        {/* Hero Section */}
        <section className="relative py-section-gap px-margin-page overflow-hidden">
          <ParallaxFloat speed={-1} className="absolute -top-40 -right-40 w-[600px] h-[600px] -z-10">
            <div className="ambient-blob ambient-violet inset-0"></div>
          </ParallaxFloat>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <HeroIntro>
              <HeroItem>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-8">
                  <span className="font-bold text-[10px] text-primary tracking-widest uppercase">About Us</span>
                </div>
              </HeroItem>
              <HeroItem>
                <h1 className="headline-sheen text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter drop-shadow-[0_10px_40px_rgba(15, 118, 110,0.35)]">
                  Building the <span className="headline-accent">Future</span> of <br/>Business Operations.
                </h1>
              </HeroItem>
              <HeroItem>
                <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                  Vaslix is a specialized AI automation agency focused on providing intelligent business infrastructure for startups, luxury brands, and B2B enterprises.
                </p>
              </HeroItem>
            </HeroIntro>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-section-gap px-margin-page max-w-container-max mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <TiltCard max={5} className="glass-card rounded-[40px] overflow-hidden border-primary/20 shadow-[0_0_80px_rgba(94, 234, 212,0.05)] aspect-square relative flex items-center justify-center p-12 text-center group">
                <div className="absolute inset-0 bg-primary/5 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 space-y-6">
                  <div className="icon-glow w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                    <span className="material-symbols-outlined text-primary text-[48px]">rocket_launch</span>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight">Our Mission</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    To eliminate manual busywork and enable businesses to scale exponentially by integrating human-like AI systems, premium 3D interfaces, and high-converting marketing funnels.
                  </p>
                </div>
              </TiltCard>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-12">
                <div>
                  <h2 className="h2-sheen text-4xl font-bold mb-6 tracking-tight">Why Choose Vaslix?</h2>
                  <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                    We don't just build chatbots or websites. We build complete ecosystems designed to increase revenue and streamline your day-to-day operations.
                  </p>
                </div>
                <div className="space-y-8">
                  {[
                    { title: "Custom Automation Logic", desc: "Every system is tailored to your unique business model." },
                    { title: "Premium Visual Identity", desc: "Our 3D web design ensures your brand stands out in a crowded market." },
                    { title: "End-to-End Integration", desc: "From lead capture to CRM sync, we connect all the dots." }
                  ].map((val, idx) => (
                    <div key={idx} className="flex gap-6 items-start">
                      <div className="icon-glow w-12 h-12 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mt-1">
                        <span className="material-symbols-outlined text-primary">check</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 tracking-tight text-on-surface">{val.title}</h4>
                        <p className="text-on-surface-variant">{val.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-section-gap px-margin-page bg-surface-container-lowest/60">
          <div className="max-w-container-max mx-auto">
            <Reveal>
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/3">
                  <div className="aspect-[4/5] rounded-[32px] overflow-hidden glass-card p-2 border-primary/20">
                    <div className="w-full h-full bg-white/5 rounded-[24px] flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary/40 text-[100px]">person</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-2">
                    <span className="font-bold text-[10px] text-primary tracking-widest uppercase">Leadership</span>
                  </div>
                  <h2 className="text-4xl font-bold tracking-tight">Tasmiya Siddiqui</h2>
                  <h3 className="text-xl text-primary font-medium">Founder & AI Strategist</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
                    With a background in building complex automation pipelines, Tasmiya founded Vaslix to bridge the gap between high-level AI capabilities and real-world business operations. Her focus is on architecting systems that deliver measurable revenue impact rather than just technical novelty.
                  </p>
                  <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
                    She leads the agency's strategy, ensuring every client receives a bespoke solution tailored to their specific industry bottlenecks.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
