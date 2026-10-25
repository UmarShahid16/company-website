import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  description,
  children,
  eyebrowClassName = "text-[#E8590C]",
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
  eyebrowClassName?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#E5E5E5] bg-[#111111] text-white">
      {/* Orange glow */}
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-[400px] w-[500px] bg-[radial-gradient(ellipse_at_top_right,rgba(232,89,12,.22),transparent_65%)]" />
      <div className="relative mx-auto max-w-site px-5 py-16 sm:px-8 md:py-24">
        <p className={`mb-4 text-[11px] font-bold uppercase tracking-[.18em] ${eyebrowClassName}`}>
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
          {description}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
