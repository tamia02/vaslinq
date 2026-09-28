"use client";

import { useId, type SVGProps } from "react";
import { MARK_LEFT, MARK_RIGHT, WORDMARK_PATH, WORDMARK_VIEWBOX } from "./brandPaths";

type MarkProps = { size?: number; variant?: "color" | "white" | "ink"; tile?: boolean } & SVGProps<SVGSVGElement>;

// Vaslix mark: two ribbons folding into a V — two paths merging into one
// system. `tile` renders the ink app-icon version.
export function LogoMark({ size = 36, variant = "color", tile = false, ...rest }: MarkProps) {
  const id = useId().replace(/:/g, "");
  const grad = variant === "color";
  const solid = variant === "white" ? "#FFFFFF" : "#110E24";
  const paths = (
    <>
      <path d={MARK_RIGHT} fill={grad ? `url(#${id}r)` : solid} fillOpacity={grad ? 1 : 0.62} />
      <path d={MARK_LEFT} fill={grad ? `url(#${id}l)` : solid} />
    </>
  );
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true" {...rest}>
      {grad && (
        <defs>
          <linearGradient id={`${id}l`} x1="6" y1="8" x2="26" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8B6DFF" />
            <stop offset="1" stopColor="#4B2FE0" />
          </linearGradient>
          <linearGradient id={`${id}r`} x1="42" y1="8" x2="24" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B9A8FF" />
            <stop offset="1" stopColor="#6D4DFF" />
          </linearGradient>
        </defs>
      )}
      {tile ? (
        <>
          <rect width="48" height="48" rx="13" fill="#110E24" />
          <g transform="translate(5.2 5.6) scale(0.79)">{paths}</g>
        </>
      ) : (
        paths
      )}
    </svg>
  );
}

// Outlined "vaslix" wordmark (Manrope ExtraBold). Sized by font-size: the
// word's x-height tracks roughly 0.62em; colour follows currentColor.
export function Wordmark({ className = "", ...rest }: { className?: string } & SVGProps<SVGSVGElement>) {
  const [, , w, h] = WORDMARK_VIEWBOX.split(" ").map(Number);
  return (
    <svg
      viewBox={WORDMARK_VIEWBOX}
      className={`inline-block ${className}`}
      style={{ height: "0.95em", width: `${(0.95 * w) / h}em` }}
      fill="currentColor"
      role="img"
      aria-label="Vaslix"
      {...rest}
    >
      <path d={WORDMARK_PATH} />
    </svg>
  );
}
