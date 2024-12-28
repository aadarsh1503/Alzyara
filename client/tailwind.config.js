/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '13px': '13px', // Custom font size
        '12px': '12px',
      },
      colors:{
        dgreen:'#2f8481',
        parrot:'#a4f41c',
      }
    },
  },
  plugins: [],
}