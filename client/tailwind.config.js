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
        roboto: ['Roboto', 'sans-serif'],
        faktum: ['Faktum', 'sans-serif'], // Add Faktum font
      },
      boxShadow: {
        'custom': 'rgba(17, 17, 26, 0.1) 0px 0px 16px',
      },
      fontSize: {
        '13px': '13px', // Custom font size
        '12px': '12px',
        '14px': '14px', // Added 14px font size
        '44px': '44px', // Added 14px font size
        '40px': '40px', // Added 14px font size
      },
      colors: {
        dgreen: '#2f8481',
        parrot: '#a4f41c',
        lgreen: '#308484',
        lblue: '#f8fcfc',
        dgreen: '#2c8484',
        hgreen:'#054747',
        bkg:'#F7F9F9'
      },
    },
  },
  plugins: [],
};
