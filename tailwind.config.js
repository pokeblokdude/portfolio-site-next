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
      backgroundImage: {
        'the-machine': 'url(~/img/bg-the-machine.jpeg)',
        'gsp': 'url(~/img/bg-gsp.jpeg)',
        'timelapse': 'url(~/img/bg-timelapse.jpeg)'
      }
    },
  },
  plugins: [],
}
