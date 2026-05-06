import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-section-gap bg-surface-container-lowest border-t border-outline-variant/20 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-page max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="font-display font-bold text-2xl text-on-surface mb-8">Vaslix</div>
          <p className="text-on-surface-variant text-sm opacity-80 mb-8 max-w-xs leading-relaxed">
            The backbone for the next generation of intelligent business automation infrastructure.
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/919453283929" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-primary transition-all">
              <span className="material-symbols-outlined text-on-surface-variant text-[20px]">chat</span>
            </a>
            <a href="mailto:hello@vaslix.in" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-primary transition-all">
              <span className="material-symbols-outlined text-on-surface-variant text-[20px]">mail</span>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="font-bold text-on-surface text-xs tracking-widest mb-6">Platform</div>
          <Link href="/solutions" className="text-on-surface-variant text-sm hover:text-tertiary transition-colors">AI WhatsApp Bots</Link>
          <Link href="/solutions" className="text-on-surface-variant text-sm hover:text-tertiary transition-colors">Voice Agents</Link>
          <Link href="/ecosystem" className="text-on-surface-variant text-sm hover:text-tertiary transition-colors">Custom Automation</Link>
        </div>

        <div className="flex flex-col gap-4">
          <div className="font-bold text-on-surface text-xs tracking-widest mb-6">Company</div>
          <Link href="/extended" className="text-on-surface-variant text-sm hover:text-tertiary transition-colors">SaaS Platforms</Link>
          <Link href="/extended" className="text-on-surface-variant text-sm hover:text-tertiary transition-colors">Premium 3D Web</Link>
          <Link href="/ecosystem" className="text-on-surface-variant text-sm hover:text-tertiary transition-colors">Project Portfolio</Link>
        </div>

        <div className="flex flex-col gap-4">
          <div className="font-bold text-on-surface text-xs tracking-widest mb-6">Connect</div>
          <a href="mailto:hello@vaslix.in" className="text-on-surface-variant text-sm hover:text-tertiary transition-colors">hello@vaslix.in</a>
          <a href="https://calendly.com/tasmiyasiddiqui457/quick-discovery-call" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant text-sm hover:text-tertiary transition-colors font-bold text-primary">Book Discovery Call</a>
          <div className="text-on-surface-variant text-sm mt-4">+91 9453283929</div>
        </div>
      </div>
      
      <div className="px-margin-page max-w-container-max mx-auto pt-section-gap text-on-surface-variant/40 text-xs">
        © 2024 Vaslix AI Infrastructure. All rights reserved.
      </div>
    </footer>
  );
}
