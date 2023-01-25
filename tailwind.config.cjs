/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#f7c873',
      secondary: '#b08e6b',
      dark: '#020100',
      light: '#f7f2e9',
      error: '#991b1b',
    },
    fontFamily: {
      'Roboto': ['Roboto Slab', 'serif'],
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
