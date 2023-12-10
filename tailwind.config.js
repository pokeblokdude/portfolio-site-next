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
        'narrow': { 'raw': '(max-width: 1230px)' },
        'min': { 'raw': '(max-width: 1160px)'},
        'mobile': { 'raw': '(max-width: 1080px)' },
        'desktop': '1081px',
        'tall': { 'raw': '(min-height: 1280px)' }
      }
    },
  },
  plugins: [],
  important: true
}
