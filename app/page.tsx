import Link from "next/link";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { services, processSteps, projects, technologies, testimonials, site } from "@/lib/site";

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
    knowsAbout: services.map((service) => service.title),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: { "@type": "Service", name: service.title, description: service.description, provider: { "@type": "Organization", name: site.name } },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
      <section className="hero-grid relative isolate overflow-hidden bg-[#101832] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-48 size-[680px] rounded-full bg-[radial-gradient(circle_at_center,rgba(52,87,235,.36),transparent_68%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-72 -left-40 size-[540px] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,243,106,.10),transparent_68%)]" />
        <div className="relative mx-auto grid max-w-site items-center gap-14 px-5 pb-20 pt-16 sm:px-8 md:min-h-[660px] md:grid-cols-[1.08fr_.92fr] md:gap-12 md:pb-24 md:pt-20">
          <Reveal>
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[.06] px-4 py-2.5 text-xs font-semibold tracking-wide text-white/80">
              <span className="size-2 rounded-full bg-lime shadow-[0_0_12px_rgba(201,243,106,.8)]" /> Your product team, without the hiring wait
            </div>
            <h1 className="max-w-[710px] text-balance text-[2.85rem] font-semibold leading-[1.02] tracking-[-.065em] text-white sm:text-6xl md:text-[4.65rem]">
              Big ideas need a team that <span className="text-lime">gets them built.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
              Your dependable software team for turning ambitious plans into products your customers love—and your business can grow on.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-bold text-[#101832] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white">
                Book a free discovery call <Icon name="arrowUpRight" className="size-4" />
              </Link>
              <Link href="/work" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10">
                Explore our work <Icon name="arrowRight" className="size-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-slate-300">
              <span className="inline-flex items-center gap-2"><Icon name="check" className="size-4 text-lime" /> Senior, hands-on team</span>
              <span className="inline-flex items-center gap-2"><Icon name="check" className="size-4 text-lime" /> US-friendly collaboration</span>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="relative mx-auto w-full max-w-[510px]">
            <div className="absolute -inset-4 rounded-[34px] border border-white/10 bg-white/[.025] sm:-inset-5" />
            <div className="relative rounded-[28px] border border-white/15 bg-[#f8f9fc] p-3 shadow-[0_30px_100px_rgba(0,0,0,.34)] sm:p-4">
              <div className="rounded-[20px] border border-[#e6e8ef] bg-white p-5 sm:p-7">
                <div className="flex items-center justify-between border-b border-[#e6e8ef] pb-5">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#657089]">Your next move</p>
                    <p className="mt-1.5 text-lg font-semibold tracking-tight text-[#151a2d]">A clear path to launch</p>
                  </div>
                  <span className="grid size-11 place-items-center rounded-2xl bg-[#e9edff] text-brand"><Icon name="layers" /></span>
                </div>
                <div className="relative mt-6 space-y-5 before:absolute before:bottom-5 before:left-[15px] before:top-5 before:w-px before:bg-[#e6e8ef]">
                  {[
                    ["Discovery", "Get aligned on the outcome", "STEP 01"],
                    ["Product design", "Map the right experience", "STEP 02"],
                    ["Development", "Build and refine together", "STEP 03"],
                    ["Launch & grow", "Ship with confidence", "STEP 04"],
                  ].map(([title, description, status], index) => (
                    <div key={title} className="relative flex items-center gap-4">
                      <span className={`relative z-10 grid size-8 shrink-0 place-items-center rounded-full border ${index === 0 ? "border-brand bg-brand text-white" : index === 1 ? "border-brand bg-white text-brand" : "border-[#e6e8ef] bg-white text-[#657089]"}`}>
                        {index === 0 ? <Icon name="check" className="size-4" /> : <span className="text-xs font-semibold">{`0${index + 1}`}</span>}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm font-semibold text-[#151a2d]">{title}</p>
                          <span className={`shrink-0 text-[9px] font-bold tracking-wider ${index === 1 ? "text-brand" : "text-[#8992a5]"}`}>{status}</span>
                        </div>
                        <p className="mt-1 text-xs text-[#657089]">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex items-center justify-between rounded-2xl bg-[#f3f5fa] px-4 py-3.5">
                  <div><p className="text-[10px] font-semibold uppercase tracking-wider text-[#657089]">One team. One clear direction.</p><p className="mt-1 text-sm font-semibold text-[#151a2d]">Built around your business</p></div>
                  <span className="grid size-9 place-items-center rounded-full bg-lime text-[#101832]"><Icon name="arrowUpRight" className="size-4" /></span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-2 rounded-2xl border border-white/20 bg-[#1b2747] px-4 py-3 shadow-xl sm:-left-8">
              <p className="text-[9px] font-bold uppercase tracking-[.16em] text-slate-300">The US Digital Solutions difference</p>
              <p className="mt-1 text-sm font-semibold text-white">Senior people. Clear progress.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-site flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-[11px] font-bold uppercase tracking-[.16em] text-muted md:text-left">Modern tools. Business-ready engineering.</p>
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-3 md:justify-end">
            {technologies.map((technology) => <span key={technology} className="text-sm font-semibold tracking-tight text-ink/65">{technology}</span>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading eyebrow="What we do" title={<>The right people to make your next move.</>} description="From your first product launch to the next stage of growth, we bring the hands-on expertise to make it happen." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 0.04} className="h-full">
              <article className="group h-full rounded-2xl border border-line bg-canvas p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-card sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand"><Icon name={serviceIcons[index]} /></span>
                  <span className="text-xs font-semibold text-muted">{service.number}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
                <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Explore service <Icon name="arrowRight" className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
          <Reveal delay={0.2} className="h-full">
            <article className="flex h-full flex-col justify-between rounded-2xl bg-brand p-6 text-white sm:p-7">
              <div><span className="grid size-11 place-items-center rounded-xl bg-white/15"><Icon name="message" /></span>
                <h3 className="mt-6 max-w-[200px] text-2xl font-semibold leading-tight tracking-tight">Not sure what you need yet?</h3>
                <p className="mt-3 text-sm leading-6 text-white/80">That’s what the first conversation is for. No pressure, just a useful place to start.</p></div>
              <Link href="/contact" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white">Let’s talk <Icon name="arrowUpRight" className="size-4" /></Link>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface/60">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 sm:px-8 md:grid-cols-[.8fr_1.2fr] md:py-28">
          <SectionHeading eyebrow="Why US Digital Solutions" title={<>Good work. Good people. No guesswork.</>} description="A software partner should make your work easier, not harder. Here’s how we keep the experience clear and dependable." />
          <div className="space-y-3">
            {[
              ["Direct, honest communication", "You work with the people building your product. Expect clear updates, thoughtful questions, and no surprises."],
              ["A senior team that fits", "Get experienced engineers who adapt to your goals, tools, and team—not a one-size-fits-all process."],
              ["Quality built in from day one", "We take care with the details that matter: maintainable code, accessible experiences, and reliable releases."],
              ["Time-zone overlap that works", "Our collaboration is designed around US business hours, so decisions and feedback don’t have to wait a day."],
            ].map(([title, description], index) => (
              <Reveal key={title} delay={index * 0.05}>
                <div className="flex gap-4 rounded-2xl border border-line bg-canvas p-5 sm:p-6">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-lime text-ink"><Icon name="check" className="size-4" /></span>
                  <div><h3 className="font-semibold text-ink">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{description}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading eyebrow="A clear path forward" title={<>A thoughtful process, from day one.</>} description="You'll always know what we're working on, why it matters, and what comes next." centered />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-canvas p-5">
                <span className="text-xs font-bold tracking-widest text-brand">0{index + 1}</span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface/60">
        <div className="mx-auto max-w-site px-5 py-20 sm:px-8 md:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="A few recent partnerships" title={<>Good work speaks for itself.</>} description="A look at the kind of challenges we love helping ambitious teams solve." />
            <Link href="/work" className="mb-12 inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand">See all our work <Icon name="arrowRight" className="size-4" /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.07}>
                <Link href="/work" className="group block overflow-hidden rounded-2xl border border-line bg-canvas">
                  <div className={`relative grid h-52 place-items-center bg-gradient-to-br ${project.color}`}>
                    <div className="grid size-24 place-items-center rounded-[28px] bg-white/70 text-5xl font-semibold tracking-tighter text-ink shadow-sm">{project.mark}</div>
                    <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-white/80 text-ink transition group-hover:bg-brand group-hover:text-white"><Icon name="arrowUpRight" className="size-4" /></span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">{project.category}</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">{project.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">{project.tech.slice(0, 3).map((tech) => <span key={tech} className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-medium text-muted">{tech}</span>)}</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading eyebrow="Good words from good partners" title={<>A better way to build, together.</>} description="We measure success by how well our work helps your business—and what it feels like to get there." centered />
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <figure className="h-full rounded-2xl border border-line bg-canvas p-6 sm:p-8">
                <div role="img" aria-label="5 out of 5 stars" className="flex gap-1 text-[#f3a943]">★★★★★</div>
                <blockquote className="mt-5 text-lg leading-8 tracking-[-.01em] text-ink">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-7 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-brand-soft text-sm font-bold text-brand">{testimonial.initials}</span>
                  <span><span className="block text-sm font-semibold text-ink">{testimonial.name}</span><span className="mt-1 block text-xs text-muted">{testimonial.role}</span></span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="relative mx-auto max-w-site overflow-hidden rounded-[28px] bg-brand px-6 py-12 text-center sm:px-12 sm:py-16 md:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-48 size-96 rounded-full border border-white/10" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-60 -left-10 size-[420px] rounded-full border border-white/10" />
          <p className="relative text-xs font-bold uppercase tracking-[.18em] text-white/70">Your next step starts with a conversation</p>
          <h2 className="relative mx-auto mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-[-.04em] text-white sm:text-4xl md:text-5xl">Let’s make something your customers love.</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm leading-6 text-white/80 md:text-base">Tell us what you’re working on. We’ll bring honest advice, useful questions, and absolutely no pressure.</p>
          <Link href="/contact" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-white">Book a free call <Icon name="arrowUpRight" className="size-4" /></Link>
        </div>
      </section>
    </>
  );
}
