/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        orange: { DEFAULT: '#FF6B00', deep: '#FF6500' },
        navy: { DEFAULT: '#071827', light: '#0E2A3D' },
        surface: '#F5F6F8',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 10px rgba(7,24,39,0.06)',
        pop: '0 20px 45px -15px rgba(7,24,39,0.35)',
      },
    },
  },
  plugins: [],
}
