import type { Metadata } from "next";
import Link from "next/link";
import { CalScheduler } from "@/components/cal-scheduler";
import { Icon } from "@/components/icon";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a free strategy call",
  description: "Book a free 30-minute strategy call with US Digital Solutions to discuss your goals, technical approach, and project timeline.",
};

const topics = [
  "Your goals, customers, and the outcome you want to achieve",
  "A recommended technology and delivery approach",
  "A rough timeline and estimate for your next step",
];

const testimonials = [
  {
    quote: "We left with a clearer plan, the right priorities, and a team we could trust to help us execute.",
    name: "Alex M.",
    role: "Startup founder",
  },
  {
    quote: "Practical, thoughtful, and refreshingly direct. The conversation helped us see a much better path forward.",
    name: "Taylor R.",
    role: "Agency partner",
  },
];

const clientLogos = ["FIELDNOTE", "GOODWELL", "MERIDIAN", "HARBOR"];

export default function BookACallPage() {
  return (
    <>
      <PageIntro
        eyebrow="A useful first conversation"
        title={<>Book Your Free 30-Minute Strategy Call</>}
        description="Bring the idea, challenge, or goal you’re working through. Leave with practical perspective on what to do next—whether or not we work together."
        eyebrowClassName="text-[#b98b5f]"
      />
      <section className="mx-auto grid max-w-site gap-8 px-5 py-12 sm:px-8 md:grid-cols-[minmax(0,1.25fr)_minmax(300px,.75fr)] md:gap-10 md:py-16">
        <div>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#b98b5f]">Choose a time</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink">Find a time that works for you</h2>
            </div>
            <span className="hidden items-center gap-1.5 text-xs font-medium text-muted sm:inline-flex">
              <Icon name="check" className="size-4 text-[#d7ad7c]" /> 30 minutes · No charge
            </span>
          </div>
          <CalScheduler />
          <div className="deep-blue-panel mt-5 flex flex-col gap-3 rounded-2xl border border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-white">Prefer not to schedule a call?</p>
            <Link href="/contact" className="button-gold">
              Send us a message <Icon name="arrowRight" className="size-4 text-[#f4d2a6]" />
            </Link>
          </div>
          <p className="mt-4 text-xs leading-5 text-muted">
            By booking, you agree we may use your details to coordinate this call. Read our{" "}
            <Link href="/privacy" className="font-semibold text-[#9a7048] underline underline-offset-2">Privacy Policy</Link>.
          </p>
        </div>

        <aside className="space-y-5">
          <section className="deep-blue-panel rounded-2xl border border-white/10 p-6 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#d0aa7d]">Make the most of 30 minutes</p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">What we’ll cover</h2>
            <ul className="mt-5 space-y-4">
              {topics.map((topic) => (
                <li key={topic} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-[#e4bb8b]/35 bg-gradient-to-br from-[#382919] to-[#17110c] text-[#f4d2a6]">
                    <Icon name="check" className="size-3.5" />
                  </span>
                  {topic}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl border border-white/10 bg-[#060d17]/70 px-4 py-3 text-sm font-semibold text-white">
              No obligation, no sales pressure.
            </p>
          </section>

          <section className="deep-blue-panel rounded-2xl border border-white/10 p-6 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#d0aa7d]">A good first conversation</p>
            <div className="mt-4 space-y-4">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.name} className="rounded-xl border border-white/10 bg-[#060d17]/70 p-4">
                  <blockquote className="text-sm leading-6 text-slate-200">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-3 text-xs font-semibold text-slate-300">
                    {testimonial.name} <span className="font-normal">· {testimonial.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-3 text-[10px] text-slate-400">Illustrative testimonial placeholders.</p>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-[10px] font-bold uppercase tracking-[.15em] text-slate-400">Teams we’re built to support</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3" aria-label="Illustrative client logo placeholders">
                {clientLogos.map((logo) => (
                  <span key={logo} className="text-[10px] font-extrabold tracking-[.12em] text-slate-200">{logo}</span>
                ))}
              </div>
              <p className="mt-2 text-[10px] text-slate-400">Illustrative logo placeholders, not customer endorsements.</p>
            </div>
          </section>

          <div className="dark-atmosphere rounded-2xl border border-white/10 p-5 text-sm leading-6 text-slate-200">
            Questions before booking? Email{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-[#f4d2a6] underline underline-offset-2">{site.email}</a>.
          </div>
        </aside>
      </section>
    </>
  );
}
