"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import { site } from "@/lib/site";

const schedulerNamespace = "usds-strategy-call";

export function CalScheduler() {
  useEffect(() => {
    if (!site.calendarConfigured) return;
    let cancelled = false;

    async function configureScheduler() {
      const cal = await getCalApi({ namespace: schedulerNamespace });
      if (cancelled) return;
      cal("ui", {
        theme: "dark",
        layout: "month_view",
        cssVarsPerTheme: {
          light: {
            "--cal-brand": "#d7ad7c",
            "--cal-brand-text": "#17110c",
          },
          dark: {
            "--cal-brand": "#d7ad7c",
            "--cal-brand-text": "#17110c",
          },
        },
      });
      cal("on", {
        action: "bookingSuccessfulV2",
        callback: () => {
          window.location.assign("/book-a-call/thank-you");
        },
      });
    }

    void configureScheduler();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!site.calendarConfigured) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-surface p-8 text-center">
        <span className="grid size-12 place-items-center rounded-2xl bg-brand text-white">
          <span className="text-lg font-bold" aria-hidden="true">30</span>
        </span>
        <h3 className="mt-5 text-lg font-semibold text-ink">Online scheduling is being set up</h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
          Add your Cal.com event URL in <code className="rounded bg-canvas px-1.5 py-0.5 text-xs">NEXT_PUBLIC_CALENDAR_URL</code> to enable appointment booking.
        </p>
        <Link href="/contact" className="mt-5 text-sm font-semibold text-brand underline underline-offset-4">Send us a message instead</Link>
      </div>
    );
  }

  const calLink = new URL(site.calendarUrl).pathname.replace(/^\/+|\/+$/g, "");

  return (
    <div className="deep-blue-panel min-h-[680px] overflow-hidden rounded-2xl border border-white/10">
      <Cal
        calLink={calLink}
        namespace={schedulerNamespace}
        config={{
          layout: "month_view",
          theme: "dark",
          "ui.color-scheme": "dark",
        }}
        style={{ width: "100%", height: "680px", overflow: "scroll" }}
      />
    </div>
  );
}
