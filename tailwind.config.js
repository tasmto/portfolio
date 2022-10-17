/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'Manrope',
        'Helvetica',
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
      ],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      primary: {
        50: '#BACFFF',
        100: '#86A9FA',
        200: '#5F8CF2',
        300: '#356FF3',
        400: '#2C56EE',
        500: '#2D48D6',
        600: '#2236B7',
        700: '#1A2B92',
        800: '#0B1557',
        900: '#060B2F',
      },
      secondary: {
        50: '#FCF9F1',
        100: '#FBE5C1',
        200: '#F4CF94',
        300: '#F8C26C',
        400: '#F2B35F',
        500: '#E6A650',
        600: '#E89738',
        700: '#E28842',
        800: '#DF7338',
        900: '#C85531',
      },
      tertiary: {
        50: '#E9FBD2',
        100: '#D4EFB3',
        200: '#BFE591',
        300: '#AFDD79',
        400: '#A1D267',
        500: '#95CD5A',
        600: '#7FBB53',
        700: '#6AA64D',
        800: '#62905E',
        900: '#436141',
      },
      black: colors.black,
      white: colors.white,
      red: colors.red,
      slate: colors.slate,
      gray: colors.gray,
    },

    extend: {
      cursor: {
        eye: 'url(/cursors/eye.png), pointer',
      },
      screens: {
        // prettier-ignore
        'xs': '350px',
      },
    },
  },
  plugins: [],
}
