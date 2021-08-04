const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      hulu: '#06202A'
    },
    extend: {
      screens: {
        "3xl": "2000px",
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'group-hover'],
      textColor: ['active'],
      transitionProperty: ['hover', 'focus', 'group-hover'],
      transitionDuration: ['hover', 'group-hover'],
      fontWeight: ['group-hover'],
    },
    padding: ['responsive', 'hover', 'last'],
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
