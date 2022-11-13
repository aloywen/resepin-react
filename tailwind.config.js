module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem'
      },
      fontFamily: {
        'primary': 'Montserrat, sans-serif',
        'secondary': 'Varela Round, sans-serif'
      },
      colors: {
        'primary': '#FFB037',
        'nav': '#F9F7CF',
        'secondary': '#116530',
        'btn1': '#FFB037',
        'btn2': '#116530'
      }
    },
  },
  plugins: [],
}
