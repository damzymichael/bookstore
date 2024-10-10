import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      satisfy: ["'Satisfy'", 'cursive']
    },
    extend: {
      backgroundImage: {
        'wine-cup': "url('/wine-cup.jpeg')",
        'lady-1': "url('/lady-1.jpeg')",
        'lady-2': "url('/lady-2.png')",
        'brown-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.159) 40.38%, rgba(9, 4, 3, 0.5247) 64.32%)',
        'footer-gradient':
          'linear-gradient(251.61deg, #0E131A 36.31%, rgba(14, 19, 26, 0.53) 67.5%)'
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      }
    }
  },
  plugins: []
};
export default config;
