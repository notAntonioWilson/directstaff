import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          950: "#260A24",
          900: "#391037",
          800: "#481445",
          700: "#551852",
          600: "#6E1F6A",
        },
        gold: { DEFAULT: "#C9A24B", light: "#DBBE7E", dark: "#A8842F" },
        ink: "#1A1216",
        steel: "#6B6470",
        paper: "#F7F6F4",
        line: "#E3DFE6",
      },
      fontFamily: {
        serif: ['Georgia', '"Times New Roman"', "serif"],
        sans: ['var(--font-sans)', "system-ui", "sans-serif"],
        mono: ['var(--font-mono)', "ui-monospace", "monospace"],
      },
      maxWidth: { wrap: "1280px" },
      letterSpacing: { eyebrow: "0.18em" },
    },
  },
  plugins: [],
};
export default config;
