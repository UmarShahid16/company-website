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
        eyebrow="Let's start a conversation"
        title={<>Tell us what you&apos;re working on.</>}
        description="Share a few details about your project. We'll get back to you with thoughtful questions and a useful next step—no pressure, no pitch deck."
        eyebrowClassName="text-[#E8590C]"
      />
      <section className="mx-auto grid max-w-site gap-8 px-5 py-14 sm:px-8 md:grid-cols-[1.05fr_.95fr] md:gap-12 md:py-20">

        {/* Form card */}
        <div className="rounded-xl border border-[#E5E5E5] bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-[#111111]">A little about your project</h2>
          <p className="mt-1 text-sm text-[#6B6B6B]">We usually reply within one business day.</p>
          <div className="mt-7">
            <ContactForm />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">

          {/* Book a call */}
          <div className="rounded-xl border border-[#E5E5E5] bg-white p-6 shadow-sm sm:p-7">
            <span className="grid size-10 place-items-center rounded-lg bg-[#FFF1E6] text-[#E8590C]">
              <Icon name="message" />
            </span>
            <h2 className="mt-4 text-base font-semibold text-[#111111]">Prefer to talk it through?</h2>
            <p className="mt-1.5 text-sm leading-6 text-[#333333]">
              Pick a time that works for you. We&apos;ll use the first call to understand your goals and see if we&apos;re a good fit.
            </p>
            <Link href="/book-a-call" className="button-gold mt-5">
              Choose a time <Icon name="arrowUpRight" className="size-4" />
            </Link>
            <p className="mt-2 text-xs text-[#6B6B6B]">Opens our secure online scheduler.</p>
          </div>

          {/* Contact details */}
          <div className="rounded-xl border border-[#E5E5E5] bg-white p-6 shadow-sm sm:p-7">
            <h2 className="text-base font-semibold text-[#111111]">A few other details</h2>
            <div className="mt-5 space-y-4 divide-y divide-[#E5E5E5]">
              <div className="pb-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#6B6B6B]">Email</p>
                <a href={`mailto:${site.email}`} className="mt-1 inline-flex text-sm font-medium text-[#E8590C] hover:underline">
                  {site.email}
                </a>
              </div>
              <div className="pb-4 pt-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#6B6B6B]">Working together</p>
                <p className="mt-1 text-sm text-[#333333]">{site.location}</p>
              </div>
              <div className="pt-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#6B6B6B]">Good first conversation</p>
                <p className="mt-1 text-sm leading-6 text-[#333333]">
                  About 30 minutes to learn about your goals, share perspective, and see if there&apos;s a fit.
                </p>
              </div>
            </div>
          </div>

          {/* Good fit for */}
          <div className="rounded-xl border border-[#E8590C]/20 bg-[#FFF1E6] p-6 sm:p-7">
            <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#E8590C]">A good fit for</p>
            <ul className="mt-4 space-y-3">
              {[
                "US startups building their first product",
                "Small businesses modernizing how they work",
                "Agencies that need dependable delivery capacity",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#333333]">
                  <Icon name="check" className="mt-0.5 size-4 shrink-0 text-[#E8590C]" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#E8590C] hover:underline"
            >
              Explore our services <Icon name="arrowRight" className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
