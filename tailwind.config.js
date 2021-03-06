// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      fontFamily: {
        serif: ['Sora', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        'atomic-tangerine': {
          DEFAULT: '#FF9771',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFF1EB',
          300: '#FFD3C3',
          400: '#FFB59A',
          500: '#FF9771',
          600: '#FF6E39',
          700: '#FF4501',
          800: '#C83500',
          900: '#902600',
        },
        java: {
          DEFAULT: '#21CCAB',
          50: '#B2F3E6',
          100: '#A0F0E0',
          200: '#7DEAD5',
          300: '#5AE4CA',
          400: '#37DFBE',
          500: '#21CCAB',
          600: '#199C83',
          700: '#116B5A',
          800: '#0A3B32',
          900: '#020B09',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
      },
    },
  },
  plugins: [],
};
