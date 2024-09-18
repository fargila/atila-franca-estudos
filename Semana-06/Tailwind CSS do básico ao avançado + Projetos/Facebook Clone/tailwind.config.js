/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
     spacing: {
      '30': '7,5rem',
      '290px': '290px',
      '396px': '396px',
      '500px': '500px',
      '990px': '980px'
     },
     fontSize: {
      'subtitle': '1.7rem'
     },
    }
  },
  plugins: [],
}