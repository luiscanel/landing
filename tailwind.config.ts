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
        ink: "#06090F",
        ink2: "#0D1422",
        ink3: "#111B2E",
        surface: "#162038",
        surface2: "#1C2B47",
        azure: "#2563EB",
        "azure-light": "#3B82F6",
        "azure-bright": "#60A5FA",
        sky: "#0EA5E9",
        "sky-pale": "#BAE6FD",
        white: "#F8FAFF",
        muted: "#8BA3C7",
        dim: "#4A6585",
      },
      fontFamily: {
        head: ["Outfit", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;