import type { SVGProps } from "react";

// Vaslix monogram: a folded "V" stroke on an ink tile, with a violet node
// at the tip — two paths converging into one connected system.
export function LogoMark({ size = 36, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true" {...rest}>
      <defs>
        <linearGradient id="vx-tile" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1d1640" />
          <stop offset="1" stopColor="#0c0a1c" />
        </linearGradient>
        <linearGradient id="vx-stroke" x1="10" y1="12" x2="38" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#b9a8ff" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#vx-tile)" />
      <rect x="0.5" y="0.5" width="47" height="47" rx="13.5" stroke="#ffffff" strokeOpacity="0.12" />
      <path d="M13 14.5 L24 34 L35 14.5" stroke="url(#vx-stroke)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="35" cy="14.5" r="4.2" fill="#7c5cff" />
      <circle cx="35" cy="14.5" r="1.6" fill="#ffffff" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return <span className={`font-extrabold tracking-[-0.045em] ${className}`}>Vaslix</span>;
}
