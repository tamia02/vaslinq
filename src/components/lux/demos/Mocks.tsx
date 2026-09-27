// Lightweight UI mockups used inside feature cards. Pure markup — no hooks —
// so server pages can pass them as props to client sections.

export function MockChat({ title, lines }: { title: string; lines: { from: "bot" | "user"; text: string }[] }) {
  return (
    <div className="w-full max-w-[340px] rounded-[22px] border border-line bg-white p-4 shadow-[0_24px_50px_-24px_rgba(58,34,199,0.35)]">
      <div className="flex items-center gap-2.5 border-b border-line pb-3">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-violet text-[12px] font-bold text-white">AI</span>
        <div>
          <div className="text-[13px] font-semibold">{title}</div>
          <div className="flex items-center gap-1 text-[11px] text-[#16a34a]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" /> online
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-3">
        {lines.map((l, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-2xl px-3 py-2 text-[12.5px] leading-[1.45] ${
              l.from === "bot" ? "self-start rounded-tl-sm bg-pearl text-ink" : "self-end rounded-tr-sm bg-violet text-white"
            }`}
          >
            {l.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export function MockBooking({ title, slots }: { title: string; slots: string[] }) {
  return (
    <div className="w-full max-w-[340px] rounded-[22px] border border-line bg-white p-5 shadow-[0_24px_50px_-24px_rgba(58,34,199,0.35)]">
      <div className="flex items-center justify-between">
        <div className="text-[13px] font-semibold">{title}</div>
        <span className="rounded-full bg-lilac px-2.5 py-0.5 text-[11px] font-semibold text-violet">Auto-booked</span>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-1.5 text-center text-[10px] text-ink-mute">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <span key={i}>{d}</span>
        ))}
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className={`grid aspect-square place-items-center rounded-lg text-[11px] ${
              i === 9 ? "bg-violet font-bold text-white" : i % 5 === 2 ? "bg-lilac text-violet" : "bg-pearl text-ink-soft"
            }`}
          >
            {i + 8}
          </span>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        {slots.map((s, i) => (
          <div key={s} className={`flex items-center justify-between rounded-xl px-3 py-2 text-[12px] ${i === 0 ? "bg-ink text-white" : "bg-pearl text-ink-soft"}`}>
            {s}
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">{i === 0 ? "check_circle" : "schedule"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MockPipeline({ title, cols }: { title: string; cols: { name: string; items: string[] }[] }) {
  return (
    <div className="w-full max-w-[380px] rounded-[22px] border border-line bg-white p-5 shadow-[0_24px_50px_-24px_rgba(58,34,199,0.35)]">
      <div className="text-[13px] font-semibold">{title}</div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {cols.map((c, ci) => (
          <div key={c.name} className="rounded-xl bg-pearl p-2">
            <div className="mb-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-ink-mute">
              {c.name}
              <span className="rounded-full bg-white px-1.5 text-violet">{c.items.length}</span>
            </div>
            <div className="space-y-1.5">
              {c.items.map((it) => (
                <div key={it} className={`rounded-lg px-2 py-1.5 text-[11px] leading-tight ${ci === 2 ? "bg-violet text-white" : "bg-white text-ink"}`}>
                  {it}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MockDashboard({ title }: { title: string }) {
  const bars = [38, 52, 44, 68, 58, 80, 72, 92];
  return (
    <div className="w-full max-w-[380px] rounded-[22px] border border-line bg-white p-5 shadow-[0_24px_50px_-24px_rgba(58,34,199,0.35)]">
      <div className="flex items-center justify-between">
        <div className="text-[13px] font-semibold">{title}</div>
        <span className="text-[11px] text-ink-mute">Last 8 weeks</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {["Leads", "Booked", "Replies"].map((k, i) => (
          <div key={k} className="rounded-xl bg-pearl p-2.5">
            <div className="text-[10px] text-ink-mute">{k}</div>
            <div className="mt-1 h-2 w-3/4 rounded-full bg-gradient-to-r from-violet to-[#a78bfa]" style={{ width: `${[80, 60, 90][i]}%` }} />
          </div>
        ))}
      </div>
      <div className="mt-4 flex h-28 items-end gap-2">
        {bars.map((h, i) => (
          <span key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-violet-deep to-[#a78bfa]" style={{ height: `${h}%`, opacity: 0.45 + i * 0.07 }} />
        ))}
      </div>
    </div>
  );
}

export function MockCode({ file, lines }: { file: string; lines: string[] }) {
  return (
    <div className="w-full max-w-[380px] overflow-hidden rounded-[22px] border border-line bg-white shadow-[0_24px_50px_-24px_rgba(58,34,199,0.35)]">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[11px] text-ink-mute">{file}</span>
      </div>
      <pre className="px-4 py-4 font-mono text-[11.5px] leading-[1.75] text-ink">
        {lines.map((l, i) => (
          <div key={i} className="flex">
            <span className="mr-4 w-3 text-right text-ink-mute/50">{i + 1}</span>
            <span className="whitespace-pre">{l}</span>
          </div>
        ))}
      </pre>
    </div>
  );
}

export function MockShot({ src, alt, url }: { src: string; alt: string; url: string }) {
  return (
    <div className="w-full max-w-[460px] overflow-hidden rounded-[20px] border border-line bg-white p-1.5 shadow-[0_24px_50px_-24px_rgba(58,34,199,0.35)]">
      <div className="flex items-center gap-1.5 px-2.5 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate rounded-full bg-pearl px-2.5 py-0.5 text-[10px] text-ink-mute">{url}</span>
      </div>
      <img src={src} alt={alt} loading="lazy" className="aspect-[16/10] w-full rounded-[14px] object-cover object-top" />
    </div>
  );
}
