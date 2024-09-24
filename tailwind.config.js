


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
     
      colors:{
        primary: '#1465de',
        grey: '#A6A3AF',
        fontLight: '#fff',
        fontDark: '#292929',
      },
      

    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
