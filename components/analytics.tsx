"use client";

import { useEffect } from "react";

const consentKey = "us-digital-solutions-cookie-consent";

export function Analytics() {
  useEffect(() => {
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
    if (!measurementId || measurementId === "G-XXXXXXXXXX") return;

    const disableKey = `ga-disable-${measurementId}`;
    let script: HTMLScriptElement | null = null;
    function syncConsent() {
      const accepted = localStorage.getItem(consentKey) === "accepted";
      Object.assign(window, { [disableKey]: !accepted });
      if (!accepted || script) return;
      script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args: unknown[]) { window.dataLayer?.push(args); };
      window.gtag("js", new Date());
      window.gtag("config", measurementId, { anonymize_ip: true });
      window.pendingGtagEvents?.forEach((args) => window.gtag?.(...args));
      window.pendingGtagEvents = [];
    }

    syncConsent();
    window.addEventListener("cookie-consent-updated", syncConsent);
    return () => window.removeEventListener("cookie-consent-updated", syncConsent);
  }, []);

  return null;
}

export function trackGenerateLead() {
  if (typeof window === "undefined" || localStorage.getItem(consentKey) !== "accepted") return;
  const event = ["event", "generate_lead"];
  if (window.gtag) {
    window.gtag(...event);
    return;
  }
  window.pendingGtagEvents = [...(window.pendingGtagEvents ?? []), event];
}

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
    pendingGtagEvents?: unknown[][];
  }
}
