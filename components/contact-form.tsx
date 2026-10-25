"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle", message: "" };

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-500">
      <span aria-hidden="true">⚠</span> {msg}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const fe = state.fieldErrors ?? {};

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center rounded-lg border border-green-200 bg-green-50 px-6 py-10 text-center">
        <span className="text-3xl">✅</span>
        <h3 className="mt-3 text-lg font-semibold text-[#111111]">Message sent!</h3>
        <p className="mt-2 text-sm text-[#333333]">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-5">

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-[#111111]">
            Your name <span className="text-[#E8590C]">*</span>
            <input
              name="name"
              autoComplete="name"
              maxLength={100}
              aria-required="true"
              aria-invalid={!!fe.name}
              className={`form-input mt-2 ${fe.name ? "border-red-400 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(248,113,113,.2)]" : ""}`}
              placeholder="Alex Morgan"
            />
          </label>
          <FieldError msg={fe.name} />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-[#111111]">
            Work email <span className="text-[#E8590C]">*</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              maxLength={254}
              aria-required="true"
              aria-invalid={!!fe.email}
              className={`form-input mt-2 ${fe.email ? "border-red-400 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(248,113,113,.2)]" : ""}`}
              placeholder="alex@company.com"
            />
          </label>
          <FieldError msg={fe.email} />
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-semibold text-[#111111]">
            Company <span className="text-[#6B6B6B] font-normal text-xs">(optional)</span>
            <input
              name="company"
              autoComplete="organization"
              maxLength={120}
              aria-invalid={!!fe.company}
              className={`form-input mt-2 ${fe.company ? "border-red-400" : ""}`}
              placeholder="Your company"
            />
          </label>
          <FieldError msg={fe.company} />
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-semibold text-[#111111]">
            Project budget
            <select
              name="budget"
              defaultValue=""
              aria-invalid={!!fe.budget}
              className={`form-input mt-2 ${fe.budget ? "border-red-400" : ""}`}
            >
              <option value="">Select a range</option>
              <option value="Under $10,000">Under $10,000</option>
              <option value="$10,000–$25,000">$10,000–$25,000</option>
              <option value="$25,000–$50,000">$25,000–$50,000</option>
              <option value="$50,000+">$50,000+</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </label>
          <FieldError msg={fe.budget} />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-[#111111]">
          What are you looking to build? <span className="text-[#E8590C]">*</span>
          <textarea
            name="message"
            minLength={10}
            maxLength={5000}
            rows={5}
            aria-required="true"
            aria-invalid={!!fe.message}
            className={`form-input mt-2 resize-y ${fe.message ? "border-red-400 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(248,113,113,.2)]" : ""}`}
            placeholder="A little about your project, goals, and timeline..."
          />
        </label>
        <FieldError msg={fe.message} />
      </div>

      {/* Honeypot */}
      <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Submit */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          disabled={pending}
          type="submit"
          className="button-gold w-full sm:w-auto"
        >
          {pending ? "Sending…" : "Send project details"} <span aria-hidden="true">→</span>
        </button>
        <p className="text-xs text-[#6B6B6B]">
          Fields marked <span className="text-[#E8590C]">*</span> are required.
        </p>
      </div>

      {/* Top-level error */}
      {state.status === "error" && (
        <p
          role="alert"
          aria-live="assertive"
          className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
