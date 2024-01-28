/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#30344E',
        'secondary': '#FD5F36',
        'third': '#52C5B6',
        'four': '#FDB400',
        'border': '#4D516F',
        'fifth': '#5B5F77',
        
        
      },
    },
    fontFamily: {
      'menu': ['Open Sans', 'sans-serif',],
      'primary': ['Poppins', 'sans-serif',],
      'secondary': ['Inter', 'sans-serif',],
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

