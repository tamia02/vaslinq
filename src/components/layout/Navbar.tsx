import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between items-center h-20 px-margin-page max-w-container-max mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Vaslix Logo" width={40} height={40} className="rounded-lg" />
          <span className="font-display text-primary tracking-tighter text-[24px] font-extrabold">Vaslix</span>
        </Link>
        
        <div className="hidden md:flex gap-gutter items-center">
          <Link href="/" className="font-medium text-sm text-on-surface-variant/80 hover:text-on-surface transition-colors">
            Infrastructure
          </Link>
          <Link href="/ecosystem" className="font-medium text-sm text-on-surface-variant/80 hover:text-on-surface transition-colors">
            Ecosystem
          </Link>
          <Link href="/solutions" className="font-medium text-sm text-on-surface-variant/80 hover:text-on-surface transition-colors">
            Solutions
          </Link>
          <Link href="/enterprise" className="font-medium text-sm text-on-surface-variant/80 hover:text-on-surface transition-colors">
            Enterprise
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
              settings
            </span>
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
              account_circle
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
