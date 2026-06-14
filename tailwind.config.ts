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
          950: "#380038",
          900: "#570057",
          800: "#7A007A",
          700: "#990099",
          600: "#B500B5",
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
