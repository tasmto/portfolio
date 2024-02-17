/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        khaki: {
          DEFAULT: '#BCB9A8',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#F1F1ED',
          300: '#E0DED6',
          400: '#CECCBF',
          500: '#BCB9A8',
          600: '#A4A088',
          700: '#8A856A',
          800: '#6A6652',
          900: '#4A4839',
          950: '#3A382D',
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
        display: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
