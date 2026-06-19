/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#050505',
          900: '#0a0a0a',
          850: '#0f0f0f',
          800: '#141414',
          700: '#1a1a1a',
          600: '#222222',
          500: '#2a2a2a',
          400: '#3a3a3a',
          300: '#555555',
          200: '#888888',
          100: '#b0b0b0',
        },
        silver: {
          500: '#c0c0c0',
          400: '#d4d4d4',
          300: '#e0e0e0',
          200: '#ebebeb',
          100: '#f5f5f5',
        },
        accent: {
          blue: '#0099ff',
          'blue-dim': '#0077cc',
          red: '#e63946',
          'red-dim': '#b82d38',
        },
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 153, 255, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 153, 255, 0.3)' },
        },
      },
    },
  },
  plugins: [],
};
