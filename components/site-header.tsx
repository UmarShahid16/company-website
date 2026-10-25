"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/icon";
import { BookCallButton } from "@/components/book-call-button";
import { site } from "@/lib/site";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E5E5] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[70px] max-w-site items-center justify-between px-5 sm:px-8">

        {/* Logo */}
        <Link href="/" aria-label={`${site.name} home`} className="flex items-center gap-2.5">
          <span aria-hidden="true" className="relative grid size-9 shrink-0 place-items-center rounded-[8px] bg-[#E8590C] text-[11px] font-black tracking-[-.08em] text-white">
            US
            <span aria-hidden="true" className="absolute -right-0.5 -top-0.5 size-2 rounded-full border-2 border-white bg-[#111111]" />
          </span>
          <span>
            <span className="block whitespace-nowrap text-[14px] font-bold leading-tight tracking-[-0.03em] text-[#111111]">
              {site.shortName}
            </span>
            <span className="mt-px block text-[9px] font-semibold uppercase tracking-[.14em] text-[#6B6B6B]">
              Digital products &amp; engineering
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-0.5 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3.5 py-2 text-[13.5px] font-medium text-[#333333] transition hover:bg-[#F7F7F7] hover:text-[#111111]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <BookCallButton className="hidden min-h-10 px-4 py-2 text-[13px] md:inline-flex" />

        {/* Mobile hamburger */}
        <button
          type="button"
          className="grid size-9 place-items-center rounded-md border border-[#E5E5E5] text-[#333333] md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} className="size-4" />
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav aria-label="Mobile navigation" className="border-t border-[#E5E5E5] bg-white px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-site flex-col gap-0.5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-[#333333] transition hover:bg-[#F7F7F7]"
              >
                {link.label}
              </Link>
            ))}
            <BookCallButton className="mt-3 w-full" onClick={() => setOpen(false)} />
          </div>
        </nav>
      )}
    </header>
  );
}
