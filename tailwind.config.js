/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      'tablet': "640px",
      // => @media (min-width: 640px)
      'laptop': "1024px",
      // => @media (min-width: 1024px)
      'desktop': "1280px",
      // => @media (min-width: 1280px)
    },
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      fontFamily: {
        lexend: ["Lexend", "sans"],
      },
      colors: {
        "unison-blue": "#00478F",
        "unison-blue-light": "#005CB8",
        "unison-blue-dark": "#003366",
        "unison-yellow": "#ffcc00",
        "unison-yellow-dark": "#E0B400",
        "unison-yellow-light": "#FFDA47",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
    require('tailwindcss-animated'),
  ],
};
