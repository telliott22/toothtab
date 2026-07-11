import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Clean clinical palette — white canvas, calm teal/mint trust accent, slate text
        teal: {
          50: "#eefdf9",
          100: "#d3f8ee",
          200: "#a9efdd",
          400: "#34d3ab",
          500: "#12b489",
          600: "#0a9b76",
          700: "#0c7c60",
          900: "#0d4a3c",
        },
        slate: {
          50: "#f7f9fb",
          100: "#eef2f6",
          200: "#e0e6ee",
          300: "#c7d0dc",
          500: "#64748b",
          600: "#4a5769",
          700: "#334155",
          800: "#1f2a3a",
          900: "#0f1826",
        },
        cost: {
          low: "#0a9b76",
          mid: "#0284c7",
          high: "#e0803a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,24,38,0.04), 0 8px 24px -12px rgba(15,24,38,0.12)",
        glow: "0 0 0 1px rgba(18,180,137,0.18), 0 12px 40px -16px rgba(18,180,137,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
