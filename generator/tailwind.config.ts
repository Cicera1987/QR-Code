import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "Arial", "sans-serif"],
      },
      colors: {
        background: "#F9FAFB",
        foreground: "#1F2937",
        primary: "#2563EB",
        highlight: "#9333EA",
        text: "#1F2937",
        bgSidebar:" #adb5bd",
        dark: {
          background: "#1F2937",
          foreground: "#F9FAFB",
          text: "#1F2937",
          bgSidebar:" #adb5bd"
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
