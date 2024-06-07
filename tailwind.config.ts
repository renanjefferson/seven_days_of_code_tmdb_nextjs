import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#17162E",
        secondary: "#1D1C3B",
        tertiary: "#454558",
      },
    },
  },
  plugins: [],
};
export default config;
