import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx,md,mdx}", "./components/**/*.{ts,tsx}", "./content/**/*.mdx", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* CSS-variable-backed semantic tokens */
        ink:     "var(--ink)",
        body:    "var(--body)",
        muted:   "var(--muted)",
        canvas:  "var(--canvas)",
        surface: "var(--surface)",
        line:    "var(--line)",

        /* Exact brand palette */
        orange: {
          DEFAULT: "#E8590C",
          hover:   "#C94A07",
          tint:    "#FFF1E6",
        },

        /* Aliases kept for backward-compat with old classnames */
        brand: {
          DEFAULT: "#E8590C",
          dark:    "#C94A07",
          soft:    "#FFF1E6",
        },
        lime:   "#E8590C",  /* any leftover `text-lime` → orange */
        purple: "#111111",  /* any leftover `text-purple` → near-black */
      },
      boxShadow: {
        card:   "0 1px 3px rgba(0,0,0,.08), 0 4px 16px rgba(0,0,0,.06)",
        orange: "0 4px 16px rgba(232, 89, 12, .35)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
      borderColor: {
        DEFAULT: "#E5E5E5",
      },
      keyframes: {
        "marquee-left": {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "marquee-left":  "marquee-left 35s linear infinite",
        "marquee-right": "marquee-right 35s linear infinite",
      },
    },
  },
  plugins: [typography],
};

export default config;
