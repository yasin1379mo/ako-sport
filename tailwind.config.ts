import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yekan: ['Yekan Bakh', 'Arial', 'sans-serif'],
        vazir: ['Vazir', 'Arial', 'sans-serif']
      },
      colors: {
        primary: '#f3a711', // Yellow color for primary elements
        secondary: '#202020', // Dark background
        text: '#ffffff', // Text color
        grayText: '#aaa', // Gray text color for subtler elements
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [    require('daisyui'),require('tailwindcss-rtl')
  ],
  daisyui: {
    themes: ["winter"],
  },
};
export default config;
