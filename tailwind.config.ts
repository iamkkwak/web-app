import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FF0558",
        secondary: "#74747B",
        dark: "#1B1B1B",
        light: "#F5F5F7",
        "gray-light": "#EAEAEA",
        "gray-dark": "#353535",
      },
      fontFamily: {
        sans: ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
