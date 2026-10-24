"use server";

import { Resend } from "resend";
import { site } from "@/lib/site";

export type ContactFormState = { status: "idle" | "success" | "error"; message: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const budgets = new Set(["", "Under $10,000", "$10,000–$25,000", "$25,000–$50,000", "$50,000+", "Not sure yet"]);

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const budget = String(formData.get("budget") ?? "");
  const message = String(formData.get("message") ?? "").trim();
  const website = String(formData.get("website") ?? "").trim();

  if (website) return { status: "success", message: "Thanks for reaching out. We'll be in touch shortly." };
  if (
    !name || name.length > 100 ||
    !emailPattern.test(email) || email.length > 254 ||
    company.length > 120 ||
    !budgets.has(budget) ||
    message.length < 10 || message.length > 5000
  ) {
    return { status: "error", message: "Please check your details and try again." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  if (!apiKey || !recipient) {
    console.error("Contact form is missing RESEND_API_KEY or CONTACT_EMAIL.");
    return { status: "error", message: `We couldn't send your message right now. Please email ${site.email} instead.` };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "US Digital Solutions <onboarding@resend.dev>",
      to: [recipient],
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Budget: ${budget || "Not provided"}`,
        "",
        message,
      ].join("\n"),
    });
    if (error) {
      console.error("Resend rejected a contact form submission:", error);
      return { status: "error", message: `We couldn't send your message right now. Please email ${site.email} instead.` };
    }
  } catch (error) {
    console.error("Contact form email delivery failed:", error);
    return { status: "error", message: `We couldn't send your message right now. Please email ${site.email} instead.` };
  }

  return { status: "success", message: "Thanks for reaching out. We'll be in touch shortly." };
}
