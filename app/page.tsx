import Link from "next/link";
import { Icon } from "@/components/icon";
import { BookCallButton } from "@/components/book-call-button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ReviewsMarquee } from "@/components/reviews-marquee";
import { services, processSteps, projects, technologies, site } from "@/lib/site";

const serviceIcons = ["globe", "server", "smartphone", "layers", "users"] as const;

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    areaServed: "United States",
    knowsAbout: services.map((s) => s.title),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "Service", name: s.title, description: s.description, provider: { "@type": "Organization", name: site.name } },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="hero-grid dark-atmosphere relative isolate flex min-h-[620px] items-center overflow-hidden text-white md:min-h-[700px]">
        {/* Orange glow */}
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-[500px] w-[600px] bg-[radial-gradient(ellipse_at_top_right,rgba(232,89,12,.28),transparent_65%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 left-0 h-[400px] w-[500px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(232,89,12,.12),transparent_65%)]" />

        <Reveal className="relative mx-auto w-full max-w-5xl px-5 py-24 sm:px-8 md:py-32">
          {/* Eyebrow badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E8590C]/30 bg-[#E8590C]/10 px-4 py-1.5">
            <span className="size-1.5 rounded-full bg-[#E8590C]" />
            <span className="text-[11px] font-bold uppercase tracking-[.2em] text-[#E8590C]">US Digital Solutions</span>
          </div>

          <h1 className="max-w-4xl text-balance text-[2.6rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-6xl md:text-[4.25rem]">
            US startups ship faster with a{" "}
            <span className="text-[#E8590C]">dedicated offshore team.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 md:text-lg md:leading-8">
            Senior engineers in Lahore, Pakistan — working US hours, speaking your language, and delivering production-ready software in weeks, not months.
          </p>

          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <BookCallButton />
            <Link
              href="/work"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-[6px] border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Explore our work <Icon name="arrowRight" className="size-4" />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-medium text-white/45">
            <span className="inline-flex items-center gap-2">
              <Icon name="check" className="size-4 text-[#E8590C]" /> Senior engineers, not juniors
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="check" className="size-4 text-[#E8590C]" /> EST/PST overlap guaranteed
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="check" className="size-4 text-[#E8590C]" /> First sprint in 2 weeks
            </span>
          </div>
        </Reveal>
      </section>

      {/* ── Tech strip ─────────────────────────────────────────────── */}
      <section className="border-b border-[#E5E5E5] bg-[#F7F7F7]">
        <div className="mx-auto flex max-w-site flex-col gap-4 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="shrink-0 text-center text-[10px] font-bold uppercase tracking-[.18em] text-[#6B6B6B] md:text-left">
            Modern tools. Business-ready engineering.
          </p>
          <div className="no-scrollbar flex flex-nowrap items-center gap-x-6 overflow-x-auto md:justify-end">
            {technologies.map((t) => (
              <span key={t} className="shrink-0 text-sm font-medium text-[#6B6B6B]">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────────── */}
      <section className="bg-[#ffffff] py-20 md:py-28">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <SectionHeading
            eyebrow="What we do"
            eyebrowClassName="text-[#E8590C]"
            title={<>The right people to make your next move.</>}
            description="From your first product launch to the next stage of growth, we bring the hands-on expertise to make it happen."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.number} delay={index * 0.04} className="h-full">
                <article className="group flex h-full flex-col rounded-lg border border-[#E5E5E5] bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-[#E8590C]/40 hover:shadow-[0_8px_32px_rgba(232,89,12,.10)] sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-md bg-[#FFF1E6] text-[#E8590C]">
                      <Icon name={serviceIcons[index]} />
                    </span>
                    <span className="text-xs font-semibold text-[#6B6B6B]">{service.number}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#111111]">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-[#333333]">{service.description}</p>
                  <Link href="/services" className="button-gold mt-6 w-fit text-sm">
                    Explore service <Icon name="arrowRight" className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </article>
              </Reveal>
            ))}
            {/* CTA card */}
            <Reveal delay={0.2} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-lg border border-[#E8590C]/25 bg-[#FFF1E6] p-6 sm:p-7">
                <div>
                  <span className="grid size-11 place-items-center rounded-md bg-[#E8590C]/15 text-[#E8590C]">
                    <Icon name="message" />
                  </span>
                  <h3 className="mt-5 max-w-[200px] text-xl font-semibold leading-tight tracking-tight text-[#111111]">
                    Not sure what you need yet?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#333333]">
                    That&apos;s what the first conversation is for. No pressure, just a useful place to start.
                  </p>
                </div>
                <Link href="/book-a-call" className="button-gold mt-7 w-fit">
                  Book a Free Call <Icon name="arrowUpRight" className="size-4" />
                </Link>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Why us ─────────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F7] py-20 md:py-28">
        <div className="mx-auto grid max-w-site gap-12 px-5 sm:px-8 md:grid-cols-[.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Why US Digital Solutions"
            eyebrowClassName="text-[#E8590C]"
            title={<>Good work. Good people. No guesswork.</>}
            description="A software partner should make your work easier, not harder. Here's how we keep the experience clear and dependable."
          />
          <div className="space-y-3">
            {([
              ["Direct, honest communication", "You work with the people building your product. Expect clear updates, thoughtful questions, and no surprises."],
              ["A senior team that fits", "Get experienced engineers who adapt to your goals, tools, and team—not a one-size-fits-all process."],
              ["Quality built in from day one", "We take care with the details that matter: maintainable code, accessible experiences, and reliable releases."],
              ["Time-zone overlap that works", "Our collaboration is designed around US business hours, so decisions and feedback don't have to wait a day."],
            ] as [string, string][]).map(([title, description], index) => (
              <Reveal key={title} delay={index * 0.05}>
                <div className="flex gap-4 rounded-lg border border-[#E5E5E5] bg-white p-5 sm:p-6">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-md bg-[#FFF1E6] text-[#E8590C]">
                    <Icon name="check" className="size-4" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#111111]">{title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-[#333333]">{description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────────────── */}
      <section className="bg-[#ffffff] py-20 md:py-28">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <SectionHeading
            eyebrow="A clear path forward"
            eyebrowClassName="text-[#E8590C]"
            title={<>A thoughtful process, from day one.</>}
            description="You'll always know what we're working on, why it matters, and what comes next."
            centered
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <div className="relative h-full rounded-lg border border-[#E5E5E5] bg-white p-5">
                  {/* Orange left accent */}
                  <span className="absolute left-0 top-5 h-8 w-[3px] rounded-r-full bg-[#E8590C]" />
                  <span className="text-xs font-bold tracking-widest text-[#E8590C]">0{index + 1}</span>
                  <h3 className="mt-4 text-base font-semibold text-[#111111]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#333333]">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work ───────────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F7] py-20 md:py-28">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="A few recent partnerships"
              eyebrowClassName="text-[#E8590C]"
              title={<>Good work speaks for itself.</>}
              description="A look at the kind of challenges we love helping ambitious teams solve."
            />
            <Link href="/work" className="button-gold mb-12 shrink-0">
              See all our work <Icon name="arrowRight" className="size-4" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.07}>
                <Link href="/work" className="group block overflow-hidden rounded-lg border border-[#E5E5E5] bg-white transition hover:border-[#E8590C]/40 hover:shadow-[0_8px_32px_rgba(232,89,12,.10)]">
                  {/* Card header — dark with orange accent */}
                  <div className="relative grid h-44 place-items-center bg-[#111111]">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,89,12,.22),transparent_60%)]"
                    />
                    <div className="relative grid size-20 place-items-center rounded-xl border border-[#E8590C]/30 bg-[#E8590C]/10 text-4xl font-bold tracking-tighter text-[#E8590C]">
                      {project.mark}
                    </div>
                    <span className="absolute right-4 top-4 grid size-8 place-items-center rounded-full border border-white/15 bg-white/10 text-white/60 transition group-hover:bg-[#E8590C] group-hover:text-white group-hover:border-[#E8590C]">
                      <Icon name="arrowUpRight" className="size-4" />
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#E8590C]">{project.category}</p>
                    <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-[#111111]">{project.name}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-[#333333]">{project.summary}</p>
                    {"metric" in project && (
                      <p className="mt-3 inline-block rounded-full border border-[#E8590C]/30 bg-[#FFF1E6] px-3 py-1 text-xs font-bold text-[#E8590C]">
                        {(project as typeof project & { metric: string }).metric}
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="rounded-full border border-[#E5E5E5] bg-[#F7F7F7] px-2.5 py-0.5 text-[11px] font-medium text-[#6B6B6B]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ReviewsMarquee />

      {/* ── CTA banner ─────────────────────────────────────────────── */}      <section className="bg-[#F7F7F7] px-5 py-20 sm:px-8 md:py-28">
        <div className="relative mx-auto max-w-site overflow-hidden rounded-xl bg-[#111111] px-8 py-14 text-center sm:px-14 sm:py-16 md:py-20">
          {/* Decorative orange glows */}
          <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-64 w-96 bg-[radial-gradient(ellipse_at_top_right,rgba(232,89,12,.25),transparent_65%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-48 w-72 bg-[radial-gradient(ellipse_at_bottom_left,rgba(232,89,12,.12),transparent_65%)]" />
          <p className="relative text-[11px] font-bold uppercase tracking-[.2em] text-white/40">
            Your next step starts with a conversation
          </p>
          <h2 className="relative mx-auto mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
            Let&apos;s make something your customers love.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm leading-6 text-white/55 md:text-base">
            Tell us what you&apos;re working on. We&apos;ll bring honest advice, useful questions, and no pressure.
          </p>
          <BookCallButton className="relative mt-8" />
        </div>
      </section>
    </>
  );
}
