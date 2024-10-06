/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage:{
        'imagemdefundo': "url('/src/assets/background.png')"
      },
      colors:{
        "azulzinho": "#03989E",
      }
    },
  },
  plugins: [],
}

