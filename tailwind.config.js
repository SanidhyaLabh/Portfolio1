/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Press Start 2P"', 'cursive'],
        body: ['"Comic Neue"', 'sans-serif'],
      },
      colors: {
        space: '#2A003A',
        'dark-space': '#1A0029',
        'light-space': '#4A0059',
        'electric-blue': '#00F5FF',
        'neon-pink': '#FF2D75',
        success: '#00FF9D',
        warning: '#FFD600',
        error: '#FF3D00',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 3s ease-in-out infinite',
        rotate: 'rotate 10s linear infinite',
        'rocket-launch': 'rocket-launch 2s ease-out forwards',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
};