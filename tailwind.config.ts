import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0e1b2a",
        steel: "#233040",
        slate: "#4b5b6f",
        mist: "#e6edf3",
        accent: "#2a6f97",
        accentSoft: "#e1f0f8"
      },
      boxShadow: {
        card: "0 10px 30px -20px rgba(15, 30, 50, 0.45)",
        lift: "0 16px 40px -24px rgba(12, 24, 40, 0.6)"
      },
      borderRadius: {
        xl: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
