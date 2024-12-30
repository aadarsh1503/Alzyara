/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '13px': '13px', // Custom font size
        '12px': '12px',
      },
      colors:{
        dgreen:'#2f8481',
        parrot:'#a4f41c',
        lgreen:'#308484',
      }
    },
  },
  plugins: [],
}