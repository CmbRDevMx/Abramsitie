/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#2337c6',
        // customGreen: '#4169E1',
      },
      fontFamily: {
        raleway: ["Raleway"]
      }
    },
  },
  plugins: [],
}
