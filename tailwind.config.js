/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f7fb',
          100: '#eceef6',
          200: '#d6dae9',
          300: '#b1b8d4',
          400: '#828db8',
          500: '#61709f',
          600: '#4c5882',
          700: '#3e4769',
          800: '#2f3550',
          900: '#1c2036',
          950: '#0e1124',
        },
        brand: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#bcd3ff',
          300: '#8eb6ff',
          400: '#598fff',
          500: '#3366ff',
          600: '#1f48f0',
          700: '#1736d4',
          800: '#172fa8',
          900: '#192c83',
          950: '#0f1a4d',
        },
        accent: {
          50: '#ecfdff',
          100: '#cff7fe',
          200: '#a0eefc',
          300: '#62e0f8',
          400: '#22c8ee',
          500: '#06a9cf',
          600: '#0886ad',
          700: '#0d6c8a',
          800: '#145672',
          900: '#15485f',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Sora"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(28, 32, 54, 0.12)',
        glow: '0 20px 60px -20px rgba(51, 102, 255, 0.35)',
        card: '0 2px 10px -2px rgba(28, 32, 54, 0.08), 0 12px 32px -12px rgba(28, 32, 54, 0.1)',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(28,32,54,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,32,54,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
        'zoom-in': 'zoom-in 0.8s ease-out both',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
      },
    },
  },
  plugins: [],
};
