import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function EcosystemPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-section-gap px-margin-page overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full"></div>
          <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full"></div>
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-widest mb-8">Service Ecosystem</span>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
              Custom AI <br />
              <span className="text-primary glow-cyan">Automation Systems.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed">
              We build fully customized automation systems tailored for your business workflow. From sales pipelines to client onboarding, we automate the manual work.
            </p>
          </div>
        </section>

        {/* Custom Automation Bento */}
        <section className="py-section-gap px-margin-page max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 glass-card p-12 rounded-3xl group border-primary/20 hover:bg-primary/5 transition-all">
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Tailored Workflows</h3>
              <div className="grid sm:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-primary font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined">rocket_launch</span>
                    Sales & Marketing
                  </h4>
                  <ul className="space-y-3 text-on-surface-variant">
                    <li>• Automated Follow-up Systems</li>
                    <li>• Sales Pipeline Automation</li>
                    <li>• AI Content Generation</li>
                    <li>• Lead Management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-secondary font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined">settings_suggest</span>
                    Operations & CS
                  </h4>
                  <ul className="space-y-3 text-on-surface-variant">
                    <li>• CRM Automation</li>
                    <li>• Client Onboarding Systems</li>
                    <li>• Internal Business Tools</li>
                    <li>• Reporting & Analytics</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="glass-card p-12 rounded-3xl border-secondary/20 flex flex-col justify-center text-center">
              <div className="text-xs font-bold text-secondary tracking-widest mb-4 uppercase">Custom Pricing</div>
              <div className="text-4xl font-bold text-on-surface mb-2">₹30,000 – ₹80,000</div>
              <div className="text-on-surface-variant text-sm italic">Starting from $500+ International</div>
            </div>
          </div>
        </section>

        {/* Lead Gen & Content Section */}
        <section className="py-section-gap bg-surface-container-lowest">
          <div className="max-w-container-max px-margin-page mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6 tracking-tight">Lead Generation & Data Scraping</h2>
                  <p className="text-on-surface-variant leading-relaxed mb-8">Build highly targeted lead pipelines using advanced data extraction and enrichment techniques across LinkedIn and niche business directories.</p>
                  <div className="flex flex-wrap gap-4">
                    {["Email Scraping", "LinkedIn Lead Gen", "Lead Enrichment", "Niche Targeting"].map(tag => (
                      <span key={tag} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-primary/80">{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-6 tracking-tight">AI Content Generation</h2>
                  <p className="text-on-surface-variant leading-relaxed mb-8">Automate the creation of social media content, ad creatives, and personalized marketing copy that converts.</p>
                  <div className="flex flex-wrap gap-4">
                    {["Social Media Content", "Ad Creatives", "Email Campaigns", "Personalized Outreach"].map(tag => (
                      <span key={tag} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-secondary/80">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="glass-card p-12 rounded-3xl border-outline-variant/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 grid-pattern"></div>
                <div className="text-center relative z-10">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8 border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-5xl">trending_up</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Revenue Focused</h3>
                  <p className="text-on-surface-variant">Our systems are built to increase leads, improve conversions, and save operational time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Projects Showcase */}
        <section className="py-section-gap max-w-container-max px-margin-page mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Selected Projects</h2>
            <div className="w-24 h-1.5 bg-primary rounded-full shadow-[0_0_10px_#cfbcff]"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Dentist + AI Bot", url: "https://phenomenal-cascaron-982e78.netlify.app/", desc: "Medical booking automation" },
              { title: "Pagani Experience", url: "https://stately-seahorse-c66817.netlify.app/", desc: "Interactive 3D storytelling" },
              { title: "Kinetic UI", url: "https://kinetic-two.vercel.app/", desc: "Modern motion design" },
              { title: "InquiryBoost", url: "https://inquiryboost.vercel.app/", desc: "Lead generation platform" }
            ].map((project) => (
              <a 
                key={project.title} 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-8 rounded-2xl border-outline-variant/20 hover:border-primary/50 transition-all group"
              >
                <div className="h-40 bg-white/5 rounded-xl mb-6 flex items-center justify-center group-hover:bg-primary/5 transition-all">
                  <span className="material-symbols-outlined text-on-surface-variant/20 text-6xl group-hover:text-primary/30 transition-all">language</span>
                </div>
                <h4 className="text-xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-on-surface-variant text-sm mb-6">{project.desc}</p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-primary tracking-widest uppercase">
                  View Live Site <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
