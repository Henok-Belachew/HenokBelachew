/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F85D0B",
        inactive: "#585858",
        primaryContainer: "#4D2E1D"
      }

    },
  },
  plugins: [],
}