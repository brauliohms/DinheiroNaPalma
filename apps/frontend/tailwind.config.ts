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
        amarelofundo: "#373029",
        verdefundo: "#21322A",
        vermelhofundo: "#382529",
        cinzafundo: "#222224",
      },
    },
  },
  plugins: [],
};
export default config;
