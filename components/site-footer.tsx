import Link from "next/link";
import { CookiePreferencesButton } from "@/components/cookie-consent";
import { Icon } from "@/components/icon";
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

const socialLinks = [
  { href: `mailto:${site.email}`, label: "Email us", icon: "mail" as const },
  {
    href: "https://www.linkedin.com/in/umar-shahid-682536223/?isSelfProfile=true",
    label: "LinkedIn",
    icon: "linkedin" as const,
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#101832] text-white">
      <div className="mx-auto max-w-site px-5 py-10 sm:px-8 md:py-12">
        <div className="flex flex-col gap-6 border-b border-white/15 pb-7 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="flex w-fit shrink-0 items-center gap-2.5">
            <span className="relative grid size-10 place-items-center rounded-[14px] bg-white/10 text-[12px] font-black tracking-[-.08em] text-white">
              US<span aria-hidden="true" className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full border-2 border-[#101832] bg-lime" />
            </span>
            <span className="text-[16px] font-bold tracking-[-.04em] text-white">{site.shortName}</span>
          </Link>
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                title={link.label}
                className="grid size-12 place-items-center rounded-full border border-lime/50 bg-lime text-[#101832] shadow-md shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lime/40"
                {...(link.href.startsWith("https://")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Icon name={link.icon} className="size-5" />
              </a>
            ))}
          </div>
        </div>
        <p className="max-w-md py-7 text-sm leading-6 text-slate-300">We help businesses build smarter software, automate operations, and turn ideas into scalable digital solutions.</p>
        <div className="flex flex-col gap-3 border-t border-white/15 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
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
