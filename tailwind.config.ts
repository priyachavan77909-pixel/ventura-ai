import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EBF3FF',
          100: '#D7E9FF',
          500: '#1677FF',
          600: '#0F69F2',
          700: '#0B56C9',
          900: '#0B1838',
          950: '#061128',
        },
        gold: '#F5B83D',
        slate: {
          950: '#07162B',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(22,119,255,0.15), 0 20px 50px rgba(10,30,60,0.15)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;
