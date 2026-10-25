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
    href: "https://www.linkedin.com/in/umar-shahid-682536223/",
    label: "LinkedIn",
    icon: "linkedin" as const,
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-site px-5 py-12 sm:px-8 md:py-16">

        {/* Top row */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-start lg:justify-between">

          {/* Brand */}
          <div className="shrink-0">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span aria-hidden="true" className="relative grid size-9 place-items-center rounded-[8px] bg-[#E8590C] text-[11px] font-black tracking-[-.08em] text-white">
                US
              </span>
              <span className="text-[15px] font-bold tracking-[-0.03em] text-white">{site.shortName}</span>
            </Link>
            <p className="mt-4 max-w-[240px] text-sm leading-6 text-white/50">
              We help businesses build smarter software, automate operations, and turn ideas into scalable products.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/55 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8590C]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                title={link.label}
                className="grid size-9 place-items-center rounded-md border border-white/10 text-white/50 transition hover:border-[#E8590C]/50 hover:bg-[#E8590C]/10 hover:text-[#E8590C]"
                {...(link.href.startsWith("https://") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <Icon name={link.icon} className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact row */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 py-7 text-sm text-white/40">
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 transition hover:text-white">
            <Icon name="mail" className="size-4" /> {site.email}
          </a>
          <a href={`tel:${site.phone}`} className="inline-flex items-center gap-2 transition hover:text-white">
            <Icon name="phone" className="size-4" /> {site.phone}
          </a>
          <span className="inline-flex items-center gap-2">
            <Icon name="mapPin" className="size-4" /> {site.location}
          </span>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <CookiePreferencesButton />
        </div>
      </div>
    </footer>
  );
}
