/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',      // Deep purple
        secondary: '#059669',    // Green
        accent: '#A855F7',       // Light purple
        golden: '#10B981',       // Emerald green
        'golden-dark': '#047857', // Dark green
        'red-light': '#34D399',  // Light green
        light: '#F8FAFC'         // Light background
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}
