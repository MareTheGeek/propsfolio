/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        brittany: ['BrittanySignature', 'sans-serif'],
      },
      backgroundImage: {
        linearGrad: 'linear-gradient(90deg, #A37528 0%, #E0C89F 100%)',
      },
      colors: {
        customGold: '#c09c66',
      },
    },
  },
  plugins: [],
}
