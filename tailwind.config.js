/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: '#691216',
        gold: '#96800c',
        ivory: '#f5f3ef',
        ivy: '#2F4F4F',
        // semantic aliases for components that reference weddingConfig keys
        primary: '#691216',
        secondary: '#2F4F4F',
        lightBg: '#f9f7f4',
        accent: '#f5f3ef',
        'burgundy-grad-1': '#6a1218',
        'burgundy-grad-2': '#8b1f2a',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(15, 15, 15, 0.12)',
      },
      backdropBlur: {
        xs: '4px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0)' },
        },
        slowMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '200px 100px' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 600ms cubic-bezier(.4,0,.2,1) both',
        float: 'float 6s ease-in-out infinite',
        'particles-move': 'slowMove 18s linear infinite',
      },
    },
  },
  plugins: [],
};
