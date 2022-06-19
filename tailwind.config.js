/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'libre-baskerville': ['Libre Baskerville', 'sans-serif'],
        'roboto': ['Roboto', 'sans'],
      }
    },
  },
  plugins: [],
}
