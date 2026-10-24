"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  return (
    <form action={formAction} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">Your name
          <input required name="name" autoComplete="name" maxLength={100} className="form-input mt-2" placeholder="Alex Morgan" />
        </label>
        <label className="block text-sm font-medium text-ink">Work email
          <input required type="email" name="email" autoComplete="email" maxLength={254} className="form-input mt-2" placeholder="alex@company.com" />
        </label>
        <label className="block text-sm font-medium text-ink">Company
          <input name="company" autoComplete="organization" maxLength={120} className="form-input mt-2" placeholder="Your company" />
        </label>
        <label className="block text-sm font-medium text-ink">Project budget
          <select name="budget" defaultValue="" className="form-input mt-2">
            <option value="">Select a range</option>
            <option value="Under $10,000">Under $10,000</option>
            <option value="$10,000–$25,000">$10,000–$25,000</option>
            <option value="$25,000–$50,000">$25,000–$50,000</option>
            <option value="$50,000+">$50,000+</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
      </div>
      <label className="block text-sm font-medium text-ink">What are you looking to build?
        <textarea required name="message" minLength={10} maxLength={5000} rows={5} className="form-input mt-2 resize-y" placeholder="A little about your project, goals, and timeline..." />
      </label>
      <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <button disabled={pending} type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-wait disabled:opacity-70 sm:w-auto">
        {pending ? "Sending..." : "Send project details"} <span aria-hidden="true">→</span>
      </button>
      <p aria-live="polite" role={state.status === "error" ? "alert" : "status"} className={state.status === "error" ? "text-sm font-medium text-red-600" : "text-sm text-muted"}>
        {state.message}
      </p>
    </form>
  );
}
