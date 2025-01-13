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
      },
    },
  },
  plugins: [],
} satisfies Config;
