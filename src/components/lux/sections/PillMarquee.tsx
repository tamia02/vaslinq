// Stacked rows of pills drifting in alternating directions (pure CSS).
export default function PillMarquee({ rows }: { rows: { icon: string; label: string }[][] }) {
  return (
    <div className="lux-marquee-stack flex flex-col gap-3" aria-label="Tools and integrations">
      {rows.map((row, r) => (
        <div key={r} className="lux-marquee">
          {[0, 1].map((k) => (
            <ul
              key={k}
              aria-hidden={k === 1}
              className={`lux-marquee-track !gap-3 !pr-3 ${r % 2 ? "lux-marquee-reverse" : ""}`}
              style={{ animationDuration: `${38 + r * 6}s` }}
            >
              {row.map((p) => (
                <li
                  key={p.label}
                  className="flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-4 py-2.5 text-[14px] font-medium text-ink shadow-[0_4px_14px_rgba(58,34,199,0.07)]"
                >
                  <span className="material-symbols-outlined text-[18px] text-violet" aria-hidden="true">{p.icon}</span>
                  {p.label}
                </li>
              ))}
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}
