import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto mb-12 max-w-2xl text-center md:mb-16" : "mb-12 max-w-2xl md:mb-16"}>
      <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.18em] text-brand">
        <span aria-hidden="true" className="h-px w-5 bg-brand/60" />{eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-[-.045em] text-ink sm:text-4xl md:text-[2.8rem]">{title}</h2>
      {description && <p className="mt-5 text-base leading-7 text-muted md:text-[17px] md:leading-8">{description}</p>}
    </div>
  );
}
