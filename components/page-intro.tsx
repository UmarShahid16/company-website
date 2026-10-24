import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="hero-grid relative isolate overflow-hidden border-b border-white/10 bg-[#101832] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-40 size-[440px] rounded-full bg-[radial-gradient(circle_at_center,rgba(52,87,235,.3),transparent_68%)]" />
      <div className="relative mx-auto max-w-site px-5 py-16 sm:px-8 md:py-24">
        <p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-lime">{eyebrow}</p>
        <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.06] tracking-[-.05em] text-white sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">{description}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
