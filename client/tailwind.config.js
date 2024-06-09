/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7F50', // Main color for links and buttons
        secondary: '#2C5282', // Secondary color for accents
        background: '#F7FAFC', // Light background color
        text: '#EC5800', // Main text color
        white: '#FFFFFF', // White color
      },
    },
  },
  plugins: [],
}