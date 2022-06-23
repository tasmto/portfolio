/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      primary: {
        50: '#e9ebf1',
        100: '#d4d7e3',
        200: '#939bb9',
        300: '#68739d',
        400: '#3d4b81',
        500: '#273773',
        600: '#1b2751',
        700: '#141c3a',
        800: '#10162e',
        900: '#0C1022',
      },
      secondary: {
        900: '#413822',
        800: '#827143',
        700: '#ad965a',
        600: '#c2a965',
        500: '#d8bc70',
        400: '#dcc37e',
        300: '#e0c98d',
        200: '#e8d7a9',
        100: '#efe4c6',
      },
      black: colors.black,
      white: colors.white,
      red: colors.red,
      slate: colors.slate,
      gray: colors.gray,
    },

    extend: {},
  },
  plugins: [],
};
