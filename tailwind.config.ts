import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#121212',
          text: '#FFFFFF',
          primary: '#6C63FF',
        },
        light: {
          background: '#FFFFFF',
          text: '#121212',
          primary: '#6C63FF',
        },
      },
    },
  },  
  plugins: [],
} satisfies Config;
