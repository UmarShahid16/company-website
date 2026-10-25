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
        theme: "light",
        layout: "month_view",
        cssVarsPerTheme: {
          light: {
            "--cal-brand":      "#E8590C",
            "--cal-brand-text": "#ffffff",
          },
          dark: {
            "--cal-brand":      "#E8590C",
            "--cal-brand-text": "#ffffff",
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
    return () => { cancelled = true; };
  }, []);

  if (!site.calendarConfigured) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-xl border border-dashed border-[#E5E5E5] bg-[#F7F7F7] p-8 text-center">
        <span className="grid size-12 place-items-center rounded-xl bg-[#E8590C] text-white">
          <span className="text-lg font-bold" aria-hidden="true">30</span>
        </span>
        <h3 className="mt-5 text-lg font-semibold text-[#111111]">Online scheduling is being set up</h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-[#6B6B6B]">
          Add your Cal.com event URL in{" "}
          <code className="rounded bg-white px-1.5 py-0.5 text-xs border border-[#E5E5E5]">NEXT_PUBLIC_CALENDAR_URL</code>{" "}
          to enable appointment booking.
        </p>
        <Link href="/contact" className="button-gold mt-5">Send us a message instead</Link>
      </div>
    );
  }

  const calLink = new URL(site.calendarUrl).pathname.replace(/^\/+|\/+$/g, "");

  return (
    <div className="min-h-[680px] overflow-hidden rounded-xl border border-[#E5E5E5]">
      <Cal
        calLink={calLink}
        namespace={schedulerNamespace}
        config={{
          layout: "month_view",
          theme: "light",
          /* Force US Eastern timezone so visitors see US business hours */
          timezone: "America/New_York",
        }}
        style={{ width: "100%", height: "680px", overflow: "scroll" }}
      />
    </div>
  );
}
