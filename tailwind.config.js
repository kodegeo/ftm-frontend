/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          cooper: ['Cooper Black', 'serif'],
          arial: ['Arial', 'sans-serif'],
        },
        colors: {
          brand: {
            green: '#2C5923', // PMS 357
            brown: '#68520D', // PMS 1405
            gray: '#525051', // Cool Gray 11
          },
        },
      },
    },
    plugins: [],
  };
  