/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{js,jsx}', 
  './index.html', ],
  theme: {
    extend: {fontFamily: {
      sans: ['Inter var'],
    },},
  },
  plugins: [require('@tailwindcss/forms'),],
}

