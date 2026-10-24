import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "Terms governing your access to and use of the US Digital Solutions website.",
};

export default function TermsPage() {
  return (
    <>
      <PageIntro eyebrow="The important details" title="Terms of service" description="These terms explain the basic expectations for using the US Digital Solutions website." />
      <article className="prose prose-slate mx-auto max-w-3xl px-5 py-12 dark:prose-invert sm:px-8 md:py-16">
        <p><strong>Last updated: October 25, 2026</strong></p>
        <p>By accessing this website, you agree to these terms. If you do not agree, please do not use the site. These terms cover the website only; any software development engagement is governed by a separate written agreement.</p>
        <h2>Website content</h2>
        <p>We provide website content for general informational purposes. Project descriptions, examples, and testimonials are illustrative and may use placeholder details; they are not a promise that a particular result will be achieved for every customer.</p>
        <h2>Acceptable use</h2>
        <p>You agree not to misuse the website, interfere with its operation, attempt unauthorized access, or use it in violation of applicable law. We may limit access if necessary to protect the site or its visitors.</p>
        <h2>Intellectual property</h2>
        <p>Unless otherwise stated, the website’s text, branding, and design are owned by US Digital Solutions or used with permission. You may not republish or commercially exploit them without prior written permission. You may link to publicly available pages in a fair and lawful way.</p>
        <h2>Third-party services and links</h2>
        <p>This website may link to services operated by others, including scheduling and analytics providers. We do not control those services and are not responsible for their content, availability, or privacy practices.</p>
        <h2>No warranty; limitation of liability</h2>
        <p>The website is provided “as is” and “as available,” to the extent permitted by law. We make no guarantee that it will always be available or error-free. To the extent permitted by law, US Digital Solutions is not liable for indirect or consequential losses arising from your use of this informational website.</p>
        <h2>Changes and governing terms</h2>
        <p>We may update these terms by revising this page. Your continued use of the site after an update means you accept the revised terms. These terms are governed by applicable laws, without limiting any non-waivable consumer protections that apply to you.</p>
        <h2>Contact</h2>
        <p>Questions about these terms? Email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </article>
    </>
  );
}
