import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Icon } from "@/components/icon";
import { services, engagementModels } from "@/lib/site";

export const metadata: Metadata = {
  title: "Software development services",
  description: "Web, backend, mobile, and SaaS development services designed around your team's goals.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="How we can help"
        title={<>Expertise that meets you where you are.</>}
        description="Bring us a clear brief, an early idea, or a team that needs more room to move. We'll help you find the right next step and deliver the work to get there."
        eyebrowClassName="text-[#b98b5f]"
      >
        <Link href="/contact" className="button-gold">Talk through your project <Icon name="arrowUpRight" className="size-4 text-[#f4d2a6]" /></Link>
      </PageIntro>
      <section className="mx-auto max-w-site px-5 py-16 sm:px-8 md:py-24">
        <div className="space-y-5">
          {services.map((service) => (
            <article key={service.number} className="deep-blue-panel grid gap-8 rounded-2xl border border-white/10 p-6 sm:p-8 md:grid-cols-[.9fr_1.1fr] md:gap-12 md:p-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#e4bb8b]">Service {service.number}</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{service.title}</h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-slate-300 md:text-base">{service.description}</p>
                <Link href="/contact" className="button-gold mt-6 w-fit">Discuss this service <Icon name="arrowRight" className="size-4 text-[#f4d2a6]" /></Link>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#060d17]/70 p-6 sm:p-7">
                <h3 className="text-xs font-bold uppercase tracking-[.15em] text-slate-300">What we can deliver</h3>
                <ul className="mt-5 space-y-4">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-[#e4bb8b]/35 bg-gradient-to-br from-[#382919] to-[#17110c] text-[#f4d2a6]"><Icon name="check" className="size-3.5" /></span>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-line bg-surface p-7 text-center sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">Not sure which service is right?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted">Share the outcome you&apos;re aiming for and we&apos;ll help you work out the right scope, team, and next step.</p>
          <Link href="/book-a-call" className="button-gold mt-6">Book a free call <Icon name="arrowUpRight" className="size-4 text-[#f4d2a6]" /></Link>
        </div>

        <div className="mt-20">
          <div className="max-w-xl mb-10">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#b98b5f]">How we work together</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Pick the engagement that fits.</h2>
            <p className="mt-3 text-sm leading-6 text-muted">Every team and project is different. We offer three clear ways to work together so you can choose what makes sense.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {engagementModels.map((model) => (
              <div key={model.title} className="deep-blue-panel rounded-2xl border border-white/10 p-6">
                <span className="grid size-11 place-items-center rounded-xl border border-[#e4bb8b]/35 bg-gradient-to-br from-[#382919] to-[#17110c] text-[#f4d2a6]">
                  <Icon name={model.icon as "layers" | "users" | "code"} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{model.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{model.description}</p>
                <p className="mt-4 text-xs font-semibold text-[#d0aa7d]">Best for: {model.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
