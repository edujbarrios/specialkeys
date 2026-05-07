import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#121212",
          "01": "#1e1e1e",
          "02": "#232323",
          "03": "#272727",
          "04": "#2c2c2c",
        },
        primary: {
          DEFAULT: "#BB86FC",
          variant: "#3700B3",
        },
        secondary: "#03DAC6",
        error: "#CF6679",
        onSurface: "#E1E1E1",
        onPrimary: "#000000",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.5)",
        "card-hover": "0 4px 16px rgba(187,134,252,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
