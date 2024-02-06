import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        custom: {
          primary: "#8800ff",
          secondary: "#a78bfa",
          accent: "#ff0000",
          neutral: "#312e81",
          "base-100": "#f3f4f6",
          info: "#00e1ff",
          success: "#00ab80",
          warning: "#fde047",
          error: "#ff2d47",
        },
      },
    ],
  },
};
export default config;
