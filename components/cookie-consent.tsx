"use client";

import { useEffect, useState } from "react";

const consentKey = "us-digital-solutions-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem(consentKey) === null);
    const openPreferences = () => setVisible(true);
    window.addEventListener("open-cookie-preferences", openPreferences);
    return () => window.removeEventListener("open-cookie-preferences", openPreferences);
  }, []);

  function choose(value: "accepted" | "rejected") {
    localStorage.setItem(consentKey, value);
    window.dispatchEvent(new Event("cookie-consent-updated"));
    setVisible(false);
  }

  if (!visible) return null;
  return (
    <aside aria-label="Cookie preferences" className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-4xl rounded-2xl border border-line bg-canvas p-5 shadow-[0_24px_80px_rgba(15,25,50,.2)] sm:inset-x-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-6">
      <div>
        <p className="font-semibold text-ink">Your privacy matters</p>
        <p className="mt-1 max-w-xl text-sm leading-6 text-muted">We use optional analytics cookies to understand site traffic. You can accept or decline; essential site features work either way.</p>
      </div>
      <div className="mt-4 flex shrink-0 gap-2 sm:mt-0">
        <button type="button" onClick={() => choose("rejected")} className="rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-ink hover:bg-surface">Decline</button>
        <button type="button" onClick={() => choose("accepted")} className="rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark">Accept analytics</button>
      </div>
    </aside>
  );
}

export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-preferences"))}
      className="text-left text-sm text-muted transition hover:text-ink"
    >
      Cookie preferences
    </button>
  );
}
