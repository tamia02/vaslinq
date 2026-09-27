import Link from "next/link";
import Stage3D from "@/components/lux/Stage3D";

export default function NotFound() {
  return (
    <section className="relative isolate grid min-h-[100svh] place-items-center overflow-hidden px-6 pt-28 pb-16 text-center">
      <div aria-hidden="true" className="lux-halo -z-10" />
      <div aria-hidden="true" className="lux-grid -z-10" />
      <Stage3D scene="orbs" className="absolute inset-0 -z-10 opacity-70" label="Floating spheres" />
      <div>
        <p className="lux-eyebrow">Error 404</p>
        <h1 className="display mt-5 text-[clamp(56px,10vw,140px)] font-bold">
          Lost in <span className="serif-accent">orbit.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[18px] leading-[1.65] text-ink-soft">
          This page drifted off. Even our AI agents couldn&apos;t find it — but they can take you home.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="lux-btn lux-btn-primary">
            Back to home
            <span className="material-symbols-outlined arrow text-[18px]" aria-hidden="true">arrow_forward</span>
          </Link>
          <Link href="/work" className="lux-btn lux-btn-ghost">See our work</Link>
        </div>
      </div>
    </section>
  );
}
