import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { LeadConversionTracker } from "@/components/lead-conversion-tracker";

export const metadata: Metadata = {
  title: "Your call is booked",
  description: "Your free strategy call is confirmed. Here’s what to expect next.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  ["Check your email", "Your calendar invitation and call details are on their way."],
  ["We’ll review your project details", "We’ll come prepared with useful questions and ideas for your goals."],
  ["We’ll meet on the call", "Join at the time in your invitation and we’ll take it from there."],
];

export default function BookingThankYouPage() {
  return (
    <>
      <LeadConversionTracker />
      <section className="relative isolate overflow-hidden bg-[#101832] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-40 size-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(52,87,235,.34),transparent_68%)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 md:py-28">
          <span className="mx-auto grid size-16 place-items-center rounded-full bg-lime text-[#101832]">
            <Icon name="check" className="size-8" />
          </span>
          <p className="mt-7 text-xs font-bold uppercase tracking-[.18em] text-lime">You’re all set</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Your call is booked!</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
            Thanks for setting aside time with US Digital Solutions. We’re looking forward to learning about what you’re building.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-site px-5 py-14 sm:px-8 md:py-20">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-ink sm:text-3xl">What happens next</h2>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {nextSteps.map(([title, description], index) => (
            <article key={title} className="rounded-2xl border border-line bg-canvas p-6">
              <span className="text-xs font-bold tracking-widest text-brand">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/work" className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark">
            Explore case studies <Icon name="arrowRight" className="size-4" />
          </Link>
          <Link href="/blog" className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink transition hover:bg-surface">
            Read our blog <Icon name="arrowRight" className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
