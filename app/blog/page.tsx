import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Icon } from "@/components/icon";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Insights",
  description: "Practical ideas on building products, working with a development partner, and making technology work for your business.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <PageIntro
        eyebrow="Notes from the team"
        title={<>Ideas for building better software and stronger teams.</>}
        description="Practical perspectives for founders, operators, and teams making important decisions about what to build next."
      />
      <section className="mx-auto max-w-site px-5 py-16 sm:px-8 md:py-24">
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post, index) => (
            <article key={post.slug} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-canvas">
              <Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`} className={`grid h-48 place-items-center ${index % 2 ? "bg-gradient-to-br from-[#dcf8e9] to-[#f5fff7]" : "bg-gradient-to-br from-[#d9e7ff] to-[#f3f5ff]"}`}>
                <span className="grid size-20 place-items-center rounded-2xl bg-white/75 text-brand"><Icon name={index % 2 ? "layers" : "code"} className="size-9" /></span>
              </Link>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-muted">
                  <span className="text-brand">{post.category}</span><span aria-hidden="true">·</span>
                  <time dateTime={post.date}>{new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeZone: "UTC" }).format(new Date(`${post.date}T12:00:00Z`))}</time><span aria-hidden="true">·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl"><Link href={`/blog/${post.slug}`} className="transition group-hover:text-brand">{post.title}</Link></h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">Read article <Icon name="arrowRight" className="size-4 transition-transform group-hover:translate-x-1" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
