module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'mono': ['Roboto Mono']
    },
    extend: {
      screens: {
        'tall': { 'raw': '(min-height: 1280px)' }
      }
    },
  },
  plugins: [],
}
