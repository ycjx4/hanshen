/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rounded: [
          'Nunito',
          'ui-rounded',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif'
        ]
      },
      colors: {
        cream: '#fff8ec',
        berry: '#ff86a6',
        pudding: '#ffd46b',
        mint: '#9ee6d6',
        skysoft: '#a7d8ff',
        cocoa: '#765847'
      },
      boxShadow: {
        sticker: '0 16px 30px rgba(203, 127, 116, 0.18)',
        soft: '0 12px 24px rgba(118, 88, 71, 0.12)'
      }
    }
  },
  plugins: []
};
