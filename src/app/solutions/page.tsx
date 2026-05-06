import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden cinematic-glow">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/5 blur-[150px] rounded-full"></div>
          </div>
          <div className="max-w-container-max px-margin-page text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-12">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#cfbcff]"></span>
              <span className="font-bold text-[10px] text-primary tracking-widest">Enterprise Automation</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-on-surface mb-8 max-w-4xl mx-auto leading-tight glow-cyan tracking-tighter">
              AI Powered Business Infrastructure
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
              Build systems that save time, increase revenue, and automate operations with our high-fidelity AI assistants.
            </p>
          </div>
        </section>

        {/* AI WhatsApp Chatbot Section */}
        <section className="py-section-gap max-w-container-max px-margin-page mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-6 tracking-tight">AI WhatsApp Chatbot</h2>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">An AI-powered assistant trained specifically for your business. Behave like a smart receptionist that can answer FAQs, book appointments, and collect leads 24/7.</p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-on-surface font-semibold">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    LLM Integration
                  </div>
                  <div className="flex items-center gap-3 text-on-surface font-semibold">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    CRM Syncing
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-on-surface font-semibold">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    Voice Note Support
                  </div>
                  <div className="flex items-center gap-3 text-on-surface font-semibold">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    Multi-Language
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl border-primary/20">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs font-bold text-primary tracking-widest mb-2 uppercase">Starting From</div>
                    <div className="text-4xl font-bold text-on-surface">₹25,000 <span className="text-sm font-normal text-on-surface-variant">INR</span></div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-primary tracking-widest mb-2 uppercase">International</div>
                    <div className="text-4xl font-bold text-on-surface">$300 <span className="text-sm font-normal text-on-surface-variant">USD</span></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* WhatsApp Conversation Mockup */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full"></div>
              <div className="relative glass-card rounded-[40px] border-white/10 overflow-hidden shadow-2xl bg-[#0b141a]">
                {/* Header */}
                <div className="bg-[#1fb381] px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white">person</span>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Priya | Senior Counselor</div>
                      <div className="text-white/70 text-[10px]">Online</div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-white">more_vert</span>
                </div>
                
                {/* Chat Body */}
                <div className="p-6 space-y-4 h-[500px] overflow-y-auto scrollbar-hide text-sm">
                  <div className="flex flex-col gap-2">
                    <div className="bg-[#202c33] text-white p-4 rounded-2xl rounded-tl-none max-w-[85%] self-start border border-white/5">
                      Hi! 😊 I&apos;m Priya, Senior Counselor at Holyfaith Academy. Which class are we looking at for your little one?
                    </div>
                  </div>
                  <div className="bg-[#005c4b] text-white p-4 rounded-2xl rounded-tr-none max-w-[85%] self-end">
                    like class 4 can you tell me
                  </div>
                  <div className="bg-[#202c33] text-white p-4 rounded-2xl rounded-tl-none max-w-[85%] self-start border border-white/5">
                    That&apos;s a wonderful stage! 😊 What&apos;s your biggest priority — academics, hostel, or overall growth?
                  </div>
                  <div className="bg-[#005c4b] text-white p-4 rounded-2xl rounded-tr-none max-w-[85%] self-end">
                    overall development but thoda fees structure or yhn dur rhti hun schl se
                  </div>
                  <div className="bg-[#202c33] text-white p-4 rounded-2xl rounded-tl-none max-w-[85%] self-start border border-white/5">
                    For overall development, our focus on holistic growth through academics, sports, and arts is ideal. For Class IV, the hostel admission fee is ₹17,000, with monthly fees at ₹8,500. If distance is a concern, our hostel provides a supportive home-like environment. 😊
                  </div>
                  <div className="bg-[#005c4b] text-white p-4 rounded-2xl rounded-tr-none max-w-[85%] self-end font-medium">
                    fees wgera btaea thoda (Class 7)
                  </div>
                  <div className="bg-[#202c33] text-white p-4 rounded-2xl rounded-tl-none max-w-[85%] self-start border border-white/5">
                    Class VII ke liye day scholar admission fees ₹15,000, boarding ₹15,000, aur hostel ₹18,000 hai. Monthly tuition fees ₹2,300 hai. Hostel mein meals, coaching, AC room sab include hai.
                  </div>
                  <div className="bg-[#005c4b] text-white p-4 rounded-2xl rounded-tr-none max-w-[85%] self-end">
                    mujhe hostel costly lag rha haii
                  </div>
                  <div className="bg-[#202c33] text-white p-4 rounded-2xl rounded-tl-none max-w-[85%] self-start border border-white/5">
                    Main samajh sakti hoon! Lekin ICSE board, AC hostel, coaching aur meals — sab included hai. Zyada parents kehte hain ki yeh asal mein paise bachaata hai.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Voice Agent Section */}
        <section className="py-section-gap bg-surface-container-lowest">
          <div className="max-w-container-max px-margin-page mx-auto grid md:grid-cols-2 gap-24 items-center">
            <div className="glass-card rounded-3xl p-1 relative overflow-hidden group border-secondary/20 shadow-[0_0_80px_rgba(207,188,255,0.05)]">
              <img 
                className="w-full h-full object-cover rounded-3xl opacity-70 group-hover:opacity-90 transition-opacity aspect-square" 
                alt="AI Voice Agent Automation"
                src="https://lh3.googleusercontent.com/aida-public/ALi7Tf7_VwR8R8v_P3OD4UX3KGjbD37-l2H2tcN8VAa0UdbnKc1QYqi0tuttJdYZfcYCTOdEjMllOdqt1xEZOKjkdJRpWw_g3oswSGX5C3yucRBY6Hzv92Fq8WR0YTVNZ7e1hBPThwIsrwERKhJaN_GnUehwd0znvhAhn9Y7uOY7R8KEhC7W1Na95-g7HanKTmBpgpg3OgERpuFUGUqTtOqMJzJFr97CjkPsbgBlXnfFWdHu-COb0VMeazedWySFhbr" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-transparent"></div>
              <div className="absolute top-8 left-8 p-6 glass-card rounded-2xl">
                <span className="material-symbols-outlined text-secondary text-5xl animate-pulse">keyboard_voice</span>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-6 tracking-tight">AI Calling Bot / Voice Agent</h2>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">Capable of handling inbound and outbound calls like a real human. Supports Hindi, English, Arabic, and Regional languages.</p>
              
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3 text-on-surface/90 font-medium"><span className="material-symbols-outlined text-secondary text-sm">mic</span> Human-like AI Voice & Conversations</li>
                <li className="flex items-center gap-3 text-on-surface/90 font-medium"><span className="material-symbols-outlined text-secondary text-sm">schedule</span> Book Appointments & Handle Support</li>
                <li className="flex items-center gap-3 text-on-surface/90 font-medium"><span className="material-symbols-outlined text-secondary text-sm">sync_alt</span> Real-time Lead Tracking & CRM Sync</li>
              </ul>

              <div className="glass-card p-8 rounded-2xl border-secondary/20">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs font-bold text-secondary tracking-widest mb-2 uppercase">Starting From</div>
                    <div className="text-4xl font-bold text-on-surface">₹15,000 <span className="text-sm font-normal text-on-surface-variant">INR</span></div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-secondary tracking-widest mb-2 uppercase">International</div>
                    <div className="text-4xl font-bold text-on-surface">$300–500 <span className="text-sm font-normal text-on-surface-variant">USD</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Website Chatbot Section */}
        <section className="py-section-gap max-w-container-max px-margin-page mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-6 tracking-tight">AI Website Chatbot</h2>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">A smart AI integrated directly into your website. Unlike traditional bots, this understands your data and responds intelligently to product recommendations and support.</p>
              
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-12">
                <p className="text-sm italic text-on-surface-variant mb-4">“I want chips under ₹100.”</p>
                <div className="flex gap-4">
                  <div className="w-1.5 h-auto bg-primary rounded-full"></div>
                  <p className="text-sm text-on-surface">The chatbot searches products, understands customer intent, and recommends suitable items instantly.</p>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl border-primary/20">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs font-bold text-primary tracking-widest mb-2 uppercase">Starting From</div>
                    <div className="text-4xl font-bold text-on-surface">₹20,000 <span className="text-sm font-normal text-on-surface-variant">INR</span></div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-primary tracking-widest mb-2 uppercase">International</div>
                    <div className="text-4xl font-bold text-on-surface">$300 <span className="text-sm font-normal text-on-surface-variant">USD</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-3xl p-12 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
              <div className="space-y-6">
                {[
                  { icon: "search", text: "Product Recommendation" },
                  { icon: "help", text: "FAQ Automation" },
                  { icon: "leaderboard", text: "Lead Capture System" },
                  { icon: "calendar_today", text: "Appointment Booking" }
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all group">
                    <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="text-xl font-bold text-on-surface">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-section-gap mb-24 px-margin-page text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 tracking-tight">Ready to Automate?</h2>
            <button className="px-16 py-8 bg-primary text-on-primary font-bold text-2xl rounded-2xl hover:shadow-[0_0_60px_rgba(207,188,255,0.5)] transition-all active:scale-95">
              Contact Advisory Team
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
