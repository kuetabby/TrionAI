import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundColor: "#0F1118",
        primaryColor: "#18aaea",
        primaryColorLight: "#A56DFF",
        primaryColorDark: "#4D19A0",
      },
    },
  },
  plugins: [],
};
export default config;
