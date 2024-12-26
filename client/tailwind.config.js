/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dgreen:'#2f8481',
        parrot:'#a4f41c',
      }
    },
  },
  plugins: [],
}