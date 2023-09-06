/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        '7_5':'1.875rem',
        '11': '2.75rem',
        '9_5': '2.375rem',
        '143_5' : '34.75rem',
      },
      width: {
        '7_5':'1.875rem',
        '70_5' : '17.625rem',
        '131':'32.75rem',
        '143_5' : '34.75rem',
        '216':'54rem',
        '238_5':'59.625rem',
        '28_5' : '5.7rem',
      },
      margin: {
        '18' : '4.5rem',
      },
      padding: {
        '9' : '2.25rem',
      },
      colors: {
        'lightgray10' : '#FAFAFA',
        'lightgray50' : '#828282',
        'lightgray100' : '#3A3A3A',
      }
    },
  },
  plugins: [],
}

