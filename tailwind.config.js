/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#3B82F6',
        secondary: '#1E293B',
        dark: '#0F172A',
        light: '#F1F5F9',
        card: '#1E293B',
      }
    },
  },
  plugins: [],
}
