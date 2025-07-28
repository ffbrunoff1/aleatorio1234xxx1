/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          light: '#56A9E0',
          DEFAULT: '#56A9E0',
          dark: '#4089b9',
        },
        'brand-white': '#FFFFFF',
        'brand-gray': {
          light: '#f8f9fa',
          DEFAULT: '#6c757d',
          dark: '#343a40',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'soft-glow':
          '0 10px 25px -5px rgba(86, 169, 224, 0.2), 0 8px 10px -6px rgba(86, 169, 224, 0.2)',
      },
      animation: {
        'gradient-pan': 'gradient-pan 6s ease infinite',
      },
      keyframes: {
        'gradient-pan': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};
