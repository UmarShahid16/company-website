import Link from "next/link";
import { BookCallButton } from "@/components/book-call-button";
import { CookiePreferencesButton } from "@/components/cookie-consent";
import { site } from "@/lib/site";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our work" },
  { href: "/about", label: "About us" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#101832] text-white">
      <div className="mx-auto max-w-site px-5 py-14 sm:px-8 md:py-16">
        <div className="mb-12 flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[.05] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.16em] text-lime">Have a project in mind?</p>
            <p className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">Let’s find your best next step.</p>
          </div>
          <BookCallButton className="w-full sm:w-auto" />
        </div>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Link href="/" className="flex w-fit items-center gap-2.5">
              <span className="relative grid size-10 place-items-center rounded-[14px] bg-white/10 text-[12px] font-black tracking-[-.08em] text-white">
                US<span aria-hidden="true" className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full border-2 border-[#101832] bg-lime" />
              </span>
              <span className="text-[16px] font-bold tracking-[-.04em] text-white">{site.shortName}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">Thoughtful software, built together. Your reliable development partner from first idea to what comes next.</p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.16em] text-slate-400">Explore</p>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-3">
              {footerLinks.map((link) => <Link key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-lime">{link.label}</Link>)}
            </nav>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <CookiePreferencesButton />
            <p>Distributed team · US-friendly hours</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
