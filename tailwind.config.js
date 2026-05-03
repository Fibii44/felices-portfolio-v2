/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'buksu-blue': '#0038a8',
        'space': {
          900: '#0B0E14',
          950: '#020617',
        },
        'nebula': {
          400: '#F472B6', // Pink 400
          500: '#DB2777', // Pink 600
          600: '#9D174D', // Pink 800
        },
        'cosmic': {
          400: '#FB7185', // Rose 400
          500: '#E11D48', // Rose 600
          600: '#881337', // Rose 800
        },
        'stellar': {
          400: '#E879F9', // Fuchsia 400
          500: '#C026D3', // Fuchsia 600
          600: '#701A75', // Fuchsia 800
        },
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-slow-reverse': 'spin 15s linear infinite reverse',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        orbit: {
          'from': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          'to': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
}