import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-margin-page py-section-gap mesh-network">
          <div className="absolute inset-0 cinematic-glow -z-10"></div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 mb-8">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#cfbcff]"></span>
            <span className="font-semibold text-[10px] tracking-widest text-primary">System Health: Nominal</span>
          </div>
          <h1 className="font-bold text-6xl md:text-7xl lg:text-8xl max-w-4xl mb-8 leading-tight tracking-tighter">
            Building AI Systems That <span className="text-primary font-bold">Actually Grow Businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
            Vaslix helps businesses automate communication, generate leads, improve conversions, and reduce manual work using AI-powered systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/solutions" className="bg-primary text-on-primary font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(207,188,255,0.4)]">
              Explore Our Services
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <a href="https://calendly.com/tasmiyasiddiqui457/quick-discovery-call" target="_blank" rel="noopener noreferrer" className="border border-outline-variant bg-white/5 backdrop-blur-md text-on-surface font-bold px-8 py-4 rounded-full transition-all hover:bg-white/10">
              Book Strategy Call
            </a>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="px-margin-page max-w-container-max mx-auto py-section-gap">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our Core Services</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto text-lg">We build systems that save time, increase revenue, and automate operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              { title: "AI WhatsApp Chatbots", icon: "chat", desc: "Smart assistants trained specifically for your business that reply instantly, qualify leads, and book appointments." },
              { title: "AI Voice Calling Agents", icon: "call", desc: "AI receptionists capable of handling inbound and outbound calls like a real human in multiple languages." },
              { title: "Premium 3D Websites", icon: "view_in_ar", desc: "Futuristic, interactive 3D interfaces and SaaS platforms designed to help your brand stand out." }
            ].map((service) => (
              <div key={service.title} className="glass-card p-10 rounded-2xl group hover:border-primary/30 transition-all cursor-default">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 transition-all group-hover:scale-110">
                  <span className="material-symbols-outlined text-primary text-[32px]">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Infrastructure Section (Bento Grid) */}
        <section className="px-margin-page max-w-container-max mx-auto py-section-gap">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">AI-Powered Business Infrastructure</h2>
            <p className="text-on-surface-variant max-w-xl text-lg">Every system is built with automation and scalability in mind.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Custom Automation */}
            <div className="md:col-span-8 glass-card rounded-2xl p-0 flex flex-col justify-between group cursor-pointer h-[450px] overflow-hidden border-primary/20">
              <div className="absolute inset-0 z-0">
                <img src="/automation.png" alt="Automation" className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
              </div>
              <div className="relative z-10 p-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-4xl">settings_suggest</span>
                  </div>
                  <span className="font-bold text-xs tracking-widest text-primary">Custom AI Automation Systems</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Tailored Business Workflows</h3>
                  <p className="text-on-surface-variant max-w-md leading-relaxed">From automated lead follow-ups to CRM automation and sales pipelines, we build systems that fit your specific business needs.</p>
                </div>
              </div>
            </div>
            {/* Lead Gen */}
            <div className="md:col-span-4 glass-card rounded-2xl p-0 flex flex-col justify-between h-[450px] overflow-hidden border-secondary/20 group">
              <div className="absolute inset-0 z-0">
                <img src="/leads.png" alt="Leads" className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/20 to-transparent"></div>
              </div>
              <div className="relative z-10 p-10 flex flex-col h-full justify-between">
                <div className="p-4 w-fit rounded-xl bg-secondary/10 border border-secondary/20">
                  <span className="material-symbols-outlined text-secondary text-4xl">person_search</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">Lead Generation & Data Scraping</h3>
                  <p className="text-on-surface-variant leading-relaxed">Building highly targeted lead pipelines using email scraping, LinkedIn lead gen, and contact database building.</p>
                </div>
              </div>
            </div>
            {/* Content Systems */}
            <div className="md:col-span-6 glass-card rounded-2xl p-10 flex flex-col sm:flex-row gap-8 items-center text-center sm:text-left hover:bg-tertiary/5 transition-colors border-tertiary/10">
              <div className="p-4 rounded-xl bg-tertiary/10 border border-tertiary/20 shrink-0">
                <span className="material-symbols-outlined text-tertiary text-4xl">content_copy</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 tracking-tight">AI Content Systems</h3>
                <p className="text-on-surface-variant leading-relaxed">Automate social media content, ad creatives, and personalized outreach messages.</p>
              </div>
            </div>
            {/* Meta Ads */}
            <div className="md:col-span-6 glass-card rounded-2xl p-10 flex flex-col sm:flex-row gap-8 items-center text-center sm:text-left hover:bg-primary/5 transition-colors border-primary/10">
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
                <span className="material-symbols-outlined text-primary text-4xl">ads_click</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 tracking-tight">Meta Ads & AI Ad Creatives</h3>
                <p className="text-on-surface-variant leading-relaxed">High-converting funnels with AI-generated creatives and retargeting systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-margin-page max-w-container-max mx-auto py-section-gap border-t border-outline-variant/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 tracking-tight">Connect With Us</h2>
              <p className="text-xl text-on-surface-variant mb-12 leading-relaxed">Ready to transform your business with AI? Let&apos;s discuss your custom automation roadmap.</p>
              <div className="space-y-8">
                <a href="mailto:hello@vaslix.in" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all">
                    <span className="material-symbols-outlined text-primary text-3xl">mail</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Email Us</div>
                    <div className="text-xl font-bold text-on-surface">hello@vaslix.in</div>
                  </div>
                </a>
                <a href="https://calendly.com/tasmiyasiddiqui457/quick-discovery-call" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all">
                    <span className="material-symbols-outlined text-primary text-3xl">calendar_today</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Schedule Call</div>
                    <div className="text-xl font-bold text-on-surface">Quick Discovery Call</div>
                  </div>
                </a>
                <a href="https://wa.me/919453283929" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all">
                    <span className="material-symbols-outlined text-primary text-3xl">chat</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">WhatsApp</div>
                    <div className="text-xl font-bold text-on-surface">+91 9453283929</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="glass-card p-1 rounded-3xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-surface-container-low p-12 rounded-[22px] border border-white/5">
                <h3 className="text-2xl font-bold mb-6 tracking-tight">Request Strategy Briefing</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary/50 transition-all" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Business Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary/50 transition-all" placeholder="your@company.com" />
                  </div>
                  <button className="w-full bg-primary text-on-primary font-bold py-5 rounded-xl hover:shadow-[0_0_30px_rgba(207,188,255,0.3)] transition-all mt-4">
                    Send Inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/919453283929" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-10 right-10 z-[60] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all group"
        >
          <span className="material-symbols-outlined text-white text-3xl group-hover:animate-bounce">chat</span>
          <div className="absolute right-20 bg-white text-black px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap shadow-xl pointer-events-none">
            Chat with us
          </div>
        </a>
      </main>
      <Footer />
    </>
  );
}
