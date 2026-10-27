"use client";

const reviews = [
  {
    quote: "US Digital Solutions felt like an extension of our team from week one. They brought structure to a complex build and delivered on time.",
    name: "Jordan Lee",
    role: "Founder, Fieldnote",
    initials: "JL",
  },
  {
    quote: "Clear communication, thoughtful engineering, and no surprises. We went from backlog to a confident launch without slowing down our business.",
    name: "Morgan Davis",
    role: "Managing Partner, Goodwell Digital",
    initials: "MD",
  },
  {
    quote: "Our checkout conversion jumped 34% after they rebuilt the storefront. Fast, clean code and they kept us in the loop the whole time.",
    name: "Sarah Kim",
    role: "Director, Meridian Home Goods",
    initials: "SK",
  },
  {
    quote: "They onboarded in days and immediately felt like part of our engineering team. Best offshore experience we've had by far.",
    name: "Chris Patel",
    role: "CTO, Harbor Labs",
    initials: "CP",
  },
  {
    quote: "Honest timelines, proactive updates, and code we're proud to maintain. Exactly what we needed from a long-term partner.",
    name: "Alex Rivera",
    role: "VP Product, Stackly",
    initials: "AR",
  },
  {
    quote: "We tried two other agencies before US Digital Solutions. The difference in quality and communication was night and day.",
    name: "Taylor Brooks",
    role: "CEO, Launchpad Group",
    initials: "TB",
  },
];

function Card({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div
      style={{ width: 320, flexShrink: 0 }}
      className="rounded-xl border border-[#E5E5E5] bg-white p-5 shadow-sm"
    >
      {/* Stars */}
      <div className="text-base text-[#E8590C]" aria-hidden="true">★★★★★</div>

      {/* Quote */}
      <p className="mt-3 text-sm leading-6 text-[#333333]">
        &ldquo;{r.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="mt-4 flex items-center gap-3 border-t border-[#E5E5E5] pt-4">
        <span
          style={{ width: 36, height: 36, flexShrink: 0 }}
          className="grid place-items-center rounded-full bg-[#FFF1E6] text-xs font-bold text-[#E8590C]"
        >
          {r.initials}
        </span>
        <div>
          <p className="text-sm font-semibold text-[#111111]">{r.name}</p>
          <p className="text-xs text-[#6B6B6B]">{r.role}</p>
        </div>
      </div>
    </div>
  );
}

export function ReviewsMarquee() {
  const all = [...reviews, ...reviews]; // duplicate for seamless loop

  return (
    <section className="bg-[#F7F7F7] py-16 md:py-24">

      {/* Heading */}
      <div className="mx-auto mb-10 max-w-site px-5 sm:px-8">
        <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#E8590C]">
          Client reviews
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#111111] sm:text-4xl">
          Trusted by teams across the US.
        </h2>
        <p className="mt-3 max-w-xl text-base text-[#333333]">
          Here&apos;s what our partners say about working with us.
        </p>
      </div>

      {/* Row 1 — left scroll */}
      <div style={{ overflow: "hidden", position: "relative" }}>
        {/* Fade left */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: "0 auto 0 0",
            width: 80, zIndex: 2,
            background: "linear-gradient(to right, #F7F7F7, transparent)",
          }}
        />
        {/* Fade right */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: "0 0 0 auto",
            width: 80, zIndex: 2,
            background: "linear-gradient(to left, #F7F7F7, transparent)",
          }}
        />
        <div
          className="animate-marquee-left"
          style={{ display: "flex", gap: 16, width: "max-content", paddingBottom: 4 }}
        >
          {all.map((r, i) => <Card key={`a-${i}`} r={r} />)}
        </div>
      </div>


    </section>
  );
}
