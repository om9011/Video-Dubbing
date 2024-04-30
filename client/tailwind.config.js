/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8A2BE2', // Main color for links and buttons
        secondary: '#2C5282', // Secondary color for accents
        background: '#F7FAFC', // Light background color
        text: '#2D3748', // Main text color
        white: '#FFFFFF', // White color
      },
    },
  },
  plugins: [],
}