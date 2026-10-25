import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Icon } from "@/components/icon";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our work",
  description: "Explore selected software projects, partnerships, and outcomes delivered with US Digital Solutions.",
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Selected work"
        title={<>Partnerships built around real outcomes.</>}
        description="Every team has different ambitions and constraints. Here are a few examples of how thoughtful collaboration can turn a challenge into forward momentum."
        eyebrowClassName="text-[#b98b5f]"
      />
      <section className="mx-auto max-w-site space-y-8 px-5 py-16 sm:px-8 md:py-24">
        {projects.map((project, index) => (
          <article key={project.name} className={`deep-blue-panel overflow-hidden rounded-2xl border border-white/10 ${index % 2 ? "md:grid-cols-[.9fr_1.1fr]" : "md:grid-cols-[1.1fr_.9fr]"} md:grid md:items-stretch`}>
            <div className={`grid min-h-64 place-items-center bg-gradient-to-br p-8 ${project.color} ${index % 2 ? "md:order-2" : ""}`}>
              <div className="relative grid size-32 place-items-center rounded-[32px] border border-[#e4bb8b]/40 bg-gradient-to-br from-[#382919] to-[#17110c] text-6xl font-semibold tracking-tighter text-[#f4d2a6] shadow-[0_8px_24px_rgba(0,0,0,.28)]">
                {project.mark}
                <span className="absolute -bottom-4 -right-8 rounded-xl border border-[#e4bb8b]/35 bg-[#0a0b0e] px-4 py-2 text-xs font-semibold text-[#f4d2a6] shadow-sm">{project.name}</span>
              </div>
            </div>
            <div className="p-6 sm:p-9 md:p-11">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#d0aa7d]">{project.category}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.name}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>
              <div className="mt-7 space-y-4">
                <div><h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">The challenge</h3><p className="mt-1.5 text-sm leading-6 text-slate-200">{project.problem}</p></div>
                <div><h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Our approach</h3><p className="mt-1.5 text-sm leading-6 text-slate-200">{project.solution}</p></div>
                <div><h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">The outcome</h3><p className="mt-1.5 text-sm leading-6 text-slate-200">{project.result}</p></div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">{project.tech.map((technology) => <span key={technology} className="rounded-full border border-white/10 bg-[#060d17]/70 px-3 py-1.5 text-xs font-medium text-slate-300">{technology}</span>)}</div>
            </div>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-site px-5 pb-20 sm:px-8 md:pb-28">
        <div className="deep-blue-panel rounded-2xl border border-white/10 px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Have a project in mind?</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/80">Let’s talk about what a successful outcome looks like for your team.</p>
          <Link href="/contact" className="button-gold mt-6">Start a conversation <Icon name="arrowUpRight" className="size-4 text-[#f4d2a6]" /></Link>
        </div>
      </section>
    </>
  );
}
