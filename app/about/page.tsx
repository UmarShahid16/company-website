import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "About us",
  description: "Meet the people and principles behind US Digital Solutions, your dependable product development partner.",
};

const values = [
  ["People first", "Good software starts with listening. We care about the people who build it, use it, and rely on it."],
  ["Say what we mean", "Clear, honest communication is part of the work. We share progress, raise risks early, and follow through."],
  ["Craft with purpose", "We take pride in thoughtful engineering, but always keep the real business and customer outcome in view."],
  ["Grow together", "The best partnerships make both teams stronger. We share context, collaborate openly, and keep learning."],
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="A little about us"
        title={<>A small team with a big commitment to doing great work.</>}
        description="US Digital Solutions is an independent software partner for teams with good ideas and real goals. We combine experienced engineering with the kind of communication and care we'd want from a partner ourselves."
      />
      <section className="mx-auto grid max-w-site gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-brand">Our story</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.04em] text-ink">More than a team for hire. A team in your corner.</h2>
        </div>
        <div className="space-y-5 text-sm leading-7 text-muted md:text-base">
          <p>US Digital Solutions was founded on a simple belief: ambitious businesses deserve access to thoughtful software teams, without the friction that often comes with outsourcing.</p>
          <p>That means keeping our team intentionally small, working closely with the people closest to your business, and making the build process easy to understand. You’ll know who is doing the work, how it’s progressing, and what decisions are coming up.</p>
          <p>Today, we partner with startups, small businesses, and agencies across the US to design, build, and improve products that help their businesses move forward.</p>
        </div>
      </section>
      <section className="bg-surface/60">
        <div className="mx-auto max-w-site px-5 py-16 sm:px-8 md:py-24">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-brand">What guides us</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] text-ink sm:text-4xl">Our values show up in the everyday work.</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {values.map(([title, description]) => (
              <article key={title} className="h-full rounded-2xl border border-line bg-canvas p-6 sm:p-7">
                <span className="grid size-10 place-items-center rounded-xl bg-brand-soft text-brand"><Icon name="check" /></span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-site px-5 pb-20 sm:px-8 md:pb-28">
        <div className="rounded-2xl bg-brand p-8 text-center sm:p-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white">Let’s do good work together.</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/80">Tell us where you want to go. We’ll help you figure out the best way to get there.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-ink hover:bg-white">Meet your team <Icon name="arrowUpRight" className="size-4" /></Link>
        </div>
      </section>
    </>
  );
}
