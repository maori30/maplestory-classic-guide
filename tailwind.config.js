/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hebrew: ['Heebo', 'Rubik', 'sans-serif'],
      },
      colors: {
        maple: {
          dark: '#0f172a',
          card: '#1e293b',
          purple: '#8b5cf6',
          thief: '#6366f1',
          gold: '#f59e0b',
        }
      }
    },
  },
  plugins: [],
}
