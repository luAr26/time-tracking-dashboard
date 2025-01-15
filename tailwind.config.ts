import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        ["card-bg"]: "var(--card-bg)",
        ["profile-bg"]: "var(--profile-bg)",
        subtitle: "var(--subtitle)",
        ["accent-1"]: "var(--accent-1)",
        ["accent-2"]: "var(--accent-2)",
        ["accent-3"]: "var(--accent-3)",
        ["accent-4"]: "var(--accent-4)",
        ["accent-5"]: "var(--accent-5)",
        ["accent-6"]: "var(--accent-6)",
        dot: "var(--dot)",
      },
    },
  },
  plugins: [],
} satisfies Config;
