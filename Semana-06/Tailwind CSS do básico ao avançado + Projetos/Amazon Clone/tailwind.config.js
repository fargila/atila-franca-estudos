/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'arial': 'Arial'
      },
      colors: {
        'dark-blue-500': '#465769',
        'dark-blue-600': '#37475A',
        'dark-blue-700': '#232F3E',
        'dark-blue-900': '#191E26',
        'dark-blue-950': '#131A22',
        'gold-100': '#F3BD69',
        'gold-200': '#FAA63A',
        'orange-650': '#E47911',
        'yellow-350': '#F0C14B'
      },
      spacing: {
        '7px': '1.75rem',
        '75px': '75px',
        '210px': '210px'
      }
    },
  },
  plugins: [],
}