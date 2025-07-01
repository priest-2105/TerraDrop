/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        earth: '#557C55', // Earthy Green
        soil: '#3E2C2C', // Soil Brown
        sky: '#C8E8F4',  // Sky Blue
        white: '#FFFFFF',
        neon: '#39FF14',  // Neon Green (accent)
      },
      fontFamily: {
        header: ['Inter', 'Manrope', 'sans-serif'],
        body: ['Open Sans', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 