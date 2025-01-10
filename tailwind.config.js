/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "godeliver-primary" : "#F4F4FB",
        "godeliver-blue" : "#C5E6FE",
        "godeliver-black" : "#170F0E",
        "godeliver-button" : "#044EC8",
        "godeliver-grey" : "#46484F",
        "godeliver-secondary-black" : "#0E0E0E",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

