/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
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
  plugins: [],
};
