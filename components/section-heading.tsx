import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  eyebrowClassName = "text-[#E8590C]",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
  eyebrowClassName?: string;
}) {
  return (
    <div className={centered ? "mx-auto mb-12 max-w-2xl text-center md:mb-16" : "mb-12 max-w-2xl md:mb-16"}>
      <p className={`mb-3 text-[11px] font-bold uppercase tracking-[.18em] ${eyebrowClassName}`}>
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-[#111111] sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-[#333333] md:text-[17px] md:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}
