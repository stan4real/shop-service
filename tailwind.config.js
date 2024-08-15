import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        fadeOut: {
          '0%':{opacity:1},
          '100%': {opacity:0}
        },
        fadeIn: {
          '0%':{opacity:0},
          '100%': {opacity:1}
        },
        fadeIn2: {
          '0%':{opacity:0},
          '100%': {opacity:1}
        },
        slideIn: {
          '0%':{transform:'translate(0px, 300px)'},
          '100%': {transform:'translate(0px, 0px)'}
        },
        slideOut: {
          '0%':{transform:'translate(0px, 0px)'},
          '100%': {transform:'translate(0px, 300px)'}
        }
      }
    },
  },
  plugins: [],
}

