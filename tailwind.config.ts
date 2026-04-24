import type { Config } from "tailwindcss";

// Mirrors Theme.swift — dark-first, orange-on-black.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0E0E0E",
        surface1: "#131313",
        surface2: "#1A1A1A",
        surface3: "#262626",
        surface4: "#484847",
        ink: {
          900: "#180800",
          800: "#442100",
          700: "#532A00",
        },
        orange: {
          300: "#FFB371",
          400: "#FF9F4A",
          500: "#FD8B00",
          600: "#F97316",
          700: "#ED8200",
        },
        coral: "#FF7351",
        fg: {
          DEFAULT: "#FFFFFF",
          muted: "#ADAAAA",
          dim: "#71717A",
          subtle: "#52525B",
        },
        border: {
          DEFAULT: "rgba(72,72,71,0.10)",
          strong: "rgba(72,72,71,0.30)",
          accent: "rgba(255,159,74,0.10)",
        },
      },
      fontFamily: {
        display: ["Lexend", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.2em",
        wordmark: "0.22em",
      },
      boxShadow: {
        glow: "0 0 28px rgba(255,159,74,0.35)",
        "glow-sm": "0 0 12px rgba(255,159,74,0.35)",
        "glow-strong": "0 0 48px rgba(255,159,74,0.55)",
      },
      backgroundImage: {
        "grad-primary":
          "linear-gradient(180deg, #FF9F4A 0%, #FD8B00 100%)",
        "grad-fade":
          "linear-gradient(180deg, rgba(14,14,14,0) 0%, #0E0E0E 100%)",
      },
      animation: {
        "pulse-dot": "pulseDot 1.6s ease-in-out infinite",
        "ring-out": "ringOut 2.6s ease-out infinite",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.3)" },
        },
        ringOut: {
          "0%": { transform: "scale(0.35)", opacity: "0.75" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
