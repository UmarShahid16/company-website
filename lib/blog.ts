import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  readingTime: string;
  content: string;
};

export function getAllPosts(): BlogPost[] {
  return fs
    .readdirSync(contentDirectory)
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const source = fs.readFileSync(path.join(contentDirectory, filename), "utf8");
      const { data, content } = matter(source);
      return {
        slug,
        title: String(data.title ?? ""),
        description: String(data.description ?? ""),
        date: String(data.date ?? ""),
        category: String(data.category ?? "Insights"),
        author: String(data.author ?? "US Digital Solutions team"),
        readingTime: String(data.readingTime ?? "5 min read"),
        content,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
