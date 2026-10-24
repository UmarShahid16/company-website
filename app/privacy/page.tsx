import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Learn how US Digital Solutions collects, uses, and protects information when you visit our website or contact us.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="The important details" title="Privacy policy" description="We want you to understand what information this site uses and how you can make choices about it." />
      <article className="prose prose-slate mx-auto max-w-3xl px-5 py-12 dark:prose-invert sm:px-8 md:py-16">
        <p><strong>Last updated: October 25, 2026</strong></p>
        <p>This policy applies to the US Digital Solutions website. It explains what information we collect when you browse this site or contact us, how we use it, and the choices available to you.</p>
        <h2>Information you provide</h2>
        <p>If you use our contact form, we receive the name, email address, company, budget range, and project details you choose to submit. We use this information to respond to your inquiry and consider a potential business relationship. You can also email us directly at <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        <h2>Analytics and cookies</h2>
        <p>This site may use Google Analytics 4 to understand general website usage when you opt in. Analytics is not loaded until you select “Accept analytics” in the cookie notice. If you decline, optional analytics stays disabled. Your preference is saved in your browser so we can honor it on future visits.</p>
        <p>Essential browser storage may be used to remember your privacy choice. We do not use this site to run advertising or sell personal information.</p>
        <h2>How we use and share information</h2>
        <p>We use submitted information to reply to you and manage project inquiries. Contact form delivery is handled by Resend. If you choose to book a meeting, you will visit the scheduling service linked on our contact page, which has its own privacy terms. We do not sell your personal information.</p>
        <h2>Retention and security</h2>
        <p>We keep inquiry information only as long as reasonably necessary to respond, maintain business records, and meet legal obligations. We use reasonable safeguards, but no internet transmission or storage system can be guaranteed completely secure.</p>
        <h2>Your choices and rights</h2>
        <p>You may ask us to access, correct, or delete personal information you have sent us, subject to applicable legal requirements. Depending on where you live, you may have additional privacy rights under local law. Contact us at <a href={`mailto:${site.email}`}>{site.email}</a> to make a request.</p>
        <h2>Children and policy updates</h2>
        <p>This website is intended for business audiences and is not directed to children under 13. We may update this policy from time to time; the date above identifies the latest revision.</p>
        <h2>Contact</h2>
        <p>Questions about privacy? Email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </article>
    </>
  );
}
