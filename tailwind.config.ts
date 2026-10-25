import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "media",
  content: ["./app/**/*.{ts,tsx,md,mdx}", "./components/**/*.{ts,tsx}", "./content/**/*.mdx", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        muted: "var(--muted)",
        canvas: "var(--canvas)",
        surface: "var(--surface)",
        line: "var(--line)",
        brand: {
          DEFAULT: "#0b2344",
          dark: "#07182f",
          soft: "#122a49",
        },
        lime: "#c9f36a",
      },
      boxShadow: {
        card: "0 16px 48px rgba(20, 35, 80, .08)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [typography],
};

export default config;
