import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Icon } from "@/components/icon";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type PostPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: { type: "article", title: post.title, description: post.description, publishedTime: post.date },
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  return (
    <article>
      <header className="border-b border-line bg-surface/50">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-brand"><Icon name="arrowLeft" className="size-4" /> All insights</Link>
          <p className="mt-9 text-xs font-bold uppercase tracking-[.16em] text-brand">{post.category}</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-[-.05em] text-ink sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-base leading-7 text-muted md:text-lg">{post.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-medium text-muted">
            <span>By {post.author}</span><span aria-hidden="true">·</span>
            <time dateTime={post.date}>{new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${post.date}T12:00:00Z`))}</time><span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </header>
      <div className="prose prose-slate mx-auto max-w-3xl px-5 py-12 dark:prose-invert prose-headings:tracking-tight prose-a:text-brand sm:px-8 md:py-16">
        <MDXRemote source={post.content} />
      </div>
      <div className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <div className="rounded-2xl bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-ink">Have a similar challenge?</h2>
          <p className="mt-2 text-sm leading-6 text-muted">We’d be happy to hear what you’re working on and share a few useful ideas.</p>
          <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">Talk with our team <Icon name="arrowRight" className="size-4" /></Link>
        </div>
      </div>
    </article>
  );
}
