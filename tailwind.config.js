/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f57112', // Correct brand orange
        secondary: '#000000',
        background: '#ffffff',
        surface: '#f9fafb',
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

