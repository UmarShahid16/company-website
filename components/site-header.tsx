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
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-canvas/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-site items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label={`${site.name} home`} className="flex items-center gap-2.5">
          <span className="relative grid size-10 shrink-0 place-items-center rounded-[14px] bg-[#101832] text-[12px] font-black tracking-[-.08em] text-white shadow-sm">
            US
            <span aria-hidden="true" className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full border-2 border-canvas bg-lime" />
          </span>
          <span>
            <span className="block whitespace-nowrap text-[14px] font-extrabold leading-tight tracking-[-.045em] text-ink sm:text-[16px]">{site.shortName}</span>
            <span className="mt-0.5 block text-[8px] font-bold uppercase tracking-[.16em] text-muted">Digital products & engineering</span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-1 rounded-full border border-line bg-surface/70 p-1 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full px-4 py-2 text-[13px] font-semibold text-muted transition hover:bg-canvas hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <BookCallButton className="hidden min-h-11 px-5 py-2.5 text-[13px] md:inline-flex" />
        <button
          type="button"
          className="grid size-10 place-items-center rounded-xl border border-line text-ink md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile navigation" className="border-t border-line bg-canvas px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-site flex-col gap-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-ink hover:bg-surface">
                {link.label}
              </Link>
            ))}
            <BookCallButton className="mt-2 w-full" />
          </div>
        </nav>
      )}
    </header>
  );
}
