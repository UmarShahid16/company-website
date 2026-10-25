import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { Icon } from "@/components/icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Tell us about your project and book a free introductory call with the US Digital Solutions team.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Let’s start a conversation"
        title={<>Tell us what you’re working on.</>}
        description="Share a few details about your project. We’ll get back to you with thoughtful questions and a useful next step—no pressure, no pitch deck."
        eyebrowClassName="text-[#e4bb8b]"
      />
      <section className="mx-auto grid max-w-site gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.05fr_.95fr] md:gap-14 md:py-20">
        <div className="deep-blue-panel rounded-2xl border border-white/10 p-6 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-white">A little about your project</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">We usually reply within one business day.</p>
          <div className="mt-7"><ContactForm /></div>
        </div>
        <div className="space-y-5">
          <div className="deep-blue-panel rounded-2xl border border-white/10 p-6 sm:p-7">
            <span className="grid size-10 place-items-center rounded-xl border border-[#e4bb8b]/35 bg-gradient-to-br from-[#382919] to-[#17110c] text-[#f4d2a6]"><Icon name="message" /></span>
            <h2 className="mt-5 text-lg font-semibold text-white">Prefer to talk it through?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">Pick a time that works for you. We’ll use the first call to understand your goals and see if we’re a good fit.</p>
            <Link href="/book-a-call" className="button-gold mt-5">
              Choose a time <Icon name="arrowUpRight" className="size-4 text-[#f4d2a6]" />
            </Link>
            <p className="mt-3 text-xs leading-5 text-slate-400">Opens our secure online scheduler.</p>
          </div>
          <div className="deep-blue-panel rounded-2xl border border-white/10 p-6 sm:p-7">
            <h2 className="text-lg font-semibold text-white">A few other details</h2>
            <div className="mt-5 space-y-4">
              <div><p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</p><a href={`mailto:${site.email}`} className="mt-1 inline-flex text-sm font-medium text-[#f4d2a6] hover:underline">{site.email}</a></div>
              <div><p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Working together</p><p className="mt-1 text-sm text-slate-200">{site.location}</p></div>
              <div><p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Good first conversation</p><p className="mt-1 text-sm leading-6 text-slate-300">About 30 minutes to learn about your goals, share perspective, and see if there’s a fit.</p></div>
            </div>
          </div>
          <div className="deep-blue-panel rounded-2xl border border-white/10 p-6 text-white sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-white/70">A good fit for</p>
            <ul className="mt-4 space-y-3 text-sm">
              {["US startups building their first product", "Small businesses modernizing how they work", "Agencies that need dependable delivery capacity"].map((item) => <li key={item} className="flex items-start gap-2"><Icon name="check" className="mt-0.5 size-4 shrink-0 text-[#d7ad7c]" />{item}</li>)}
            </ul>
            <Link href="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#e4bb8b] transition hover:text-[#f4d2a6]">Explore our services <Icon name="arrowRight" className="size-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
