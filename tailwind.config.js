/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        // 'paragraph': ['Casper'],
        // 'body': ['Karla', ],
        sans: ["PT Sans", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#32A5FA",
        gray: "#1C1C1C"
      },
      backgroundImage: {
        herobg: "url('../src/asset/herobg.png')",   
      },
    },
  },
  plugins: [],
}