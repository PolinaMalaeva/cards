/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        neueMachina: ["Neue Machina", "sans-serif"],
      },
      colors: {
        violet: "#5B21B6",
        custom_purple: '#5909B8',
        default_purple: '#4C1D95',
        coolGray: '#111827',
      },
      maxWidth: {
        88: "22rem", //352px
      },
    },
  },
  plugins: [],
}
