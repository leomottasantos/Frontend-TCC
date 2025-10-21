/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  purge: [],
  darkMode: 'class', // Ativa dark mode com classe 'dark' no html
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
