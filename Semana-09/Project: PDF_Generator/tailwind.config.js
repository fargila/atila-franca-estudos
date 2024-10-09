/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: { 
    extend: {
      maxWidth: {
        '500': '31.25rem',
      },
    },
  },
  plugins: []
}