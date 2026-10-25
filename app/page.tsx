import Link from "next/link";
import { Icon } from "@/components/icon";
import { BookCallButton } from "@/components/book-call-button";
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
      <section className="hero-grid dark-atmosphere relative isolate flex min-h-[610px] items-center overflow-hidden text-white md:min-h-[690px]">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[28%] size-[360px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(23,59,112,.32),transparent_70%)] blur-2xl" />
        <svg aria-hidden="true" className="pointer-events-none absolute left-[9%] top-[28%] hidden h-36 w-36 text-brand/40 sm:block" viewBox="0 0 140 140" fill="none">
          <path d="M34 8 48 16v16l-14 8-14-8V16L34 8Zm42 24 14 8v16l-14 8-14-8V40l14-8Zm-42 48 14 8v16l-14 8-14-8V88l14-8Zm42 24 14 8v16l-14 8-14-8v-16l14-8Z" stroke="currentColor" />
          <path d="m55 18 14 8v16l-14 8-14-8V26l14-8Zm42 48 14 8v16l-14 8-14-8V74l14-8Z" stroke="currentColor" />
        </svg>
        <svg aria-hidden="true" className="pointer-events-none absolute bottom-[18%] right-[10%] hidden h-40 w-40 text-brand/40 sm:block" viewBox="0 0 160 160" fill="none">
          <path d="m40 12 16 9v18l-16 9-16-9V21l16-9Zm48 28 16 9v18l-16 9-16-9V49l16-9Zm-48 56 16 9v18l-16 9-16-9v-18l16-9Zm48 28 16 9v18l-16 9-16-9v-18l16-9Z" stroke="currentColor" />
          <path d="m112 12 16 9v18l-16 9-16-9V21l16-9ZM16 68l16 9v18l-16 9-16-9V77l16-9Zm96 28 16 9v18l-16 9-16-9v-18l16-9Z" stroke="currentColor" />
        </svg>
        <Reveal className="relative mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-8 md:py-24">
          <div className="relative mx-auto mb-8 grid size-[76px] place-items-center rounded-[22px] border border-white/15 bg-gradient-to-br from-white/[.12] to-white/[.025] shadow-[0_0_55px_rgba(23,59,112,.38),inset_0_1px_rgba(255,255,255,.18)]">
            <span className="grid size-[54px] place-items-center rounded-[16px] border border-white/10 bg-[#11131c] text-lg font-black tracking-[-.1em] text-white shadow-inner">US</span>
            <span aria-hidden="true" className="absolute -right-1 -top-1 size-3 rounded-full border-2 border-[#10121b] bg-lime shadow-[0_0_14px_rgba(201,243,106,.8)]" />
          </div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-slate-300">US Digital Solutions</p>
          <h1 className="mx-auto max-w-4xl text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-[-.065em] text-white sm:text-6xl md:text-[4.5rem]">
            Big ideas need a team that <span className="bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">gets them built.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
            Your dependable software team for turning ambitious plans into products your customers love—and your business can grow on.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BookCallButton />
            <Link href="/work" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-slate-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
              Explore our work <Icon name="arrowRight" className="size-4" />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs font-medium text-slate-400">
            <span className="inline-flex items-center gap-2"><Icon name="check" className="size-4 text-[#d7ad7c]" /> Senior, hands-on team</span>
            <span className="inline-flex items-center gap-2"><Icon name="check" className="size-4 text-[#d7ad7c]" /> US-friendly collaboration</span>
          </div>
        </Reveal>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="mx-auto flex max-w-site flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-[11px] font-bold uppercase tracking-[.16em] text-muted md:text-left">Modern tools. Business-ready engineering.</p>
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-3 md:justify-end">
            {technologies.map((technology) => <span key={technology} className="text-sm font-semibold tracking-tight text-muted">{technology}</span>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading eyebrow="What we do" eyebrowClassName="text-[#b98b5f]" title={<>The right people to make your next move.</>} description="From your first product launch to the next stage of growth, we bring the hands-on expertise to make it happen." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 0.04} className="h-full">
              <article className="deep-blue-panel group h-full rounded-2xl border border-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#e4bb8b]/45 hover:shadow-[0_18px_48px_rgba(0,0,0,.24)] sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl border border-[#e4bb8b]/35 bg-gradient-to-br from-[#382919] to-[#17110c] text-[#f4d2a6] shadow-[0_4px_14px_rgba(0,0,0,.18)]"><Icon name={serviceIcons[index]} /></span>
                  <span className="text-xs font-semibold text-slate-400">{service.number}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
                <Link href="/services" className="button-gold mt-6 w-fit">
                  Explore service <Icon name="arrowRight" className="size-4 text-[#f4d2a6] transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
          <Reveal delay={0.2} className="h-full">
            <article className="deep-blue-panel flex h-full flex-col justify-between rounded-2xl border border-white/10 p-6 text-white sm:p-7">
              <div><span className="grid size-11 place-items-center rounded-xl bg-white/15"><Icon name="message" /></span>
                <h3 className="mt-6 max-w-[200px] text-2xl font-semibold leading-tight tracking-tight">Not sure what you need yet?</h3>
                <p className="mt-3 text-sm leading-6 text-white/80">That’s what the first conversation is for. No pressure, just a useful place to start.</p></div>
              <Link href="/contact" className="button-gold mt-8 w-fit">Let’s talk <Icon name="arrowUpRight" className="size-4 text-[#f4d2a6]" /></Link>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface/60">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 sm:px-8 md:grid-cols-[.8fr_1.2fr] md:py-28">
          <SectionHeading eyebrow="Why US Digital Solutions" eyebrowClassName="text-[#b98b5f]" title={<>Good work. Good people. No guesswork.</>} description="A software partner should make your work easier, not harder. Here’s how we keep the experience clear and dependable." />
          <div className="space-y-3">
            {[
              ["Direct, honest communication", "You work with the people building your product. Expect clear updates, thoughtful questions, and no surprises."],
              ["A senior team that fits", "Get experienced engineers who adapt to your goals, tools, and team—not a one-size-fits-all process."],
              ["Quality built in from day one", "We take care with the details that matter: maintainable code, accessible experiences, and reliable releases."],
              ["Time-zone overlap that works", "Our collaboration is designed around US business hours, so decisions and feedback don’t have to wait a day."],
            ].map(([title, description], index) => (
              <Reveal key={title} delay={index * 0.05}>
                <div className="deep-blue-panel flex gap-4 rounded-2xl border border-white/10 p-5 sm:p-6">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#e4bb8b]/35 bg-gradient-to-br from-[#382919] to-[#17110c] text-[#f4d2a6]"><Icon name="check" className="size-4" /></span>
                  <div><h3 className="font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{description}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading eyebrow="A clear path forward" eyebrowClassName="text-[#b98b5f]" title={<>A thoughtful process, from day one.</>} description="You'll always know what we're working on, why it matters, and what comes next." centered />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <div className="deep-blue-panel h-full rounded-2xl border border-white/10 p-5">
                <span className="text-xs font-bold tracking-widest text-[#e4bb8b]">0{index + 1}</span>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface/60">
        <div className="mx-auto max-w-site px-5 py-20 sm:px-8 md:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="A few recent partnerships" eyebrowClassName="text-[#b98b5f]" title={<>Good work speaks for itself.</>} description="A look at the kind of challenges we love helping ambitious teams solve." />
            <Link href="/work" className="button-gold mb-12 shrink-0">See all our work <Icon name="arrowRight" className="size-4 text-[#f4d2a6]" /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.07}>
                <Link href="/work" className="deep-blue-panel group block overflow-hidden rounded-2xl border border-white/10 transition hover:border-[#e4bb8b]/40">
                  <div className={`relative grid h-52 place-items-center bg-gradient-to-br ${project.color}`}>
                    <div className="grid size-24 place-items-center rounded-[28px] border border-[#e4bb8b]/40 bg-gradient-to-br from-[#382919] to-[#17110c] text-5xl font-semibold tracking-tighter text-[#f4d2a6] shadow-[0_8px_24px_rgba(0,0,0,.28)]">{project.mark}</div>
                    <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-[#e4bb8b]/50 bg-[#08090c] text-[#f4d2a6] transition group-hover:bg-[#241a10]"><Icon name="arrowUpRight" className="size-4" /></span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#d0aa7d]">{project.category}</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">{project.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{project.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">{project.tech.slice(0, 3).map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-[#060d17]/70 px-2.5 py-1 text-[11px] font-medium text-slate-300">{tech}</span>)}</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading eyebrow="Good words from good partners" eyebrowClassName="text-[#b98b5f]" title={<>A better way to build, together.</>} description="We measure success by how well our work helps your business—and what it feels like to get there." centered />
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <figure className="deep-blue-panel h-full rounded-2xl border border-white/10 p-6 sm:p-8">
                <div role="img" aria-label="5 out of 5 stars" className="flex gap-1 text-[#d7ad7c]">★★★★★</div>
                <blockquote className="mt-5 text-lg leading-8 tracking-[-.01em] text-white">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-7 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full border border-[#e4bb8b]/35 bg-gradient-to-br from-[#382919] to-[#17110c] text-sm font-bold text-[#f4d2a6]">{testimonial.initials}</span>
                  <span><span className="block text-sm font-semibold text-white">{testimonial.name}</span><span className="mt-1 block text-xs text-slate-300">{testimonial.role}</span></span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="deep-blue-panel relative mx-auto max-w-site overflow-hidden rounded-[28px] border border-white/10 px-6 py-12 text-center sm:px-12 sm:py-16 md:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-48 size-96 rounded-full border border-white/10" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-60 -left-10 size-[420px] rounded-full border border-white/10" />
          <p className="relative text-xs font-bold uppercase tracking-[.18em] text-white/70">Your next step starts with a conversation</p>
          <h2 className="relative mx-auto mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-[-.04em] text-white sm:text-4xl md:text-5xl">Let’s make something your customers love.</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm leading-6 text-white/80 md:text-base">Tell us what you’re working on. We’ll bring honest advice, useful questions, and absolutely no pressure.</p>
          <BookCallButton className="relative mt-8" />
        </div>
      </section>
    </>
  );
}
