"use server";

import { z } from "zod";
import { Resend } from "resend";
import { site } from "@/lib/site";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<"name" | "email" | "company" | "budget" | "message", string>>;
};

/* ── Zod schema (v4 compatible) ───────────────────────────────────── */
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name must be under 100 characters."),

  email: z
    .string()
    .min(1, "Email is required.")
    .email("Please enter a valid email address.")
    .max(254, "Email address is too long."),

  company: z
    .string()
    .max(120, "Company name must be under 120 characters.")
    .optional(),

  budget: z
    .string()
    .optional(),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(5000, "Message must be under 5000 characters."),
});

const validBudgets = new Set(["", "Under $10,000", "$10,000–$25,000", "$25,000–$50,000", "$50,000+", "Not sure yet"]);

/* ── Server action ────────────────────────────────────────────────── */
export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot
  const website = String(formData.get("website") ?? "").trim();
  if (website) {
    return { status: "success", message: "Thanks for reaching out. We'll be in touch shortly." };
  }

  const raw = {
    name:    String(formData.get("name")    ?? "").trim(),
    email:   String(formData.get("email")   ?? "").trim(),
    company: String(formData.get("company") ?? "").trim() || undefined,
    budget:  String(formData.get("budget")  ?? ""),
    message: String(formData.get("message") ?? "").trim(),
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof typeof fieldErrors;
      if (!fieldErrors[field]) fieldErrors[field] = issue.message;
    }
    return {
      status: "error",
      message: "Please fix the errors below and try again.",
      fieldErrors,
    };
  }

  // Extra budget check
  if (!validBudgets.has(raw.budget)) {
    return {
      status: "error",
      message: "Please fix the errors below and try again.",
      fieldErrors: { budget: "Please select a valid budget range." },
    };
  }

  const { name, email, company, budget, message } = result.data;

  const apiKey    = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;

  // ── Dev mode: skip email, just log and return success ─────────────
  if (!apiKey || !recipient) {
    if (process.env.NODE_ENV === "development") {
      console.log("📧 [DEV] Contact form submission (email skipped — no env vars):");
      console.log(`  Name:    ${name}`);
      console.log(`  Email:   ${email}`);
      console.log(`  Company: ${company ?? "Not provided"}`);
      console.log(`  Budget:  ${budget || "Not provided"}`);
      console.log(`  Message: ${message}`);
      return { status: "success", message: "Thanks for reaching out. We'll be in touch shortly." };
    }
    console.error("Contact form is missing RESEND_API_KEY or CONTACT_EMAIL.");
    return {
      status: "error",
      message: `We couldn't send your message right now. Please email ${site.email} instead.`,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from:    "US Digital Solutions <onboarding@resend.dev>",
      to:      [recipient],
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company ?? "Not provided"}`,
        `Budget: ${budget || "Not provided"}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        status: "error",
        message: `We couldn't send your message right now. Please email ${site.email} instead.`,
      };
    }
  } catch (err) {
    console.error("Contact form delivery failed:", err);
    return {
      status: "error",
      message: `We couldn't send your message right now. Please email ${site.email} instead.`,
    };
  }

  return { status: "success", message: "Thanks for reaching out. We'll be in touch shortly." };
}
