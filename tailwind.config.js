/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // We'll add Inter later
      },
      colors: {
        // We can define custom colors here later
      }
    },
  },
  plugins: [],
}
