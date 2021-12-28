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
        'timelapse': 'url(~/img/bg-timelapse.jpeg)',
        'smg': 'url(~/img/bg-smg.png)',
        'csgo': 'url(~/img/bg-csgo.png)',
        'pr': 'url(~/img/bg-pr.jpg)',
        'fear': 'url(~/img/bg-fear.png)',
        'westport': 'url(~/img/bg-westport.png)',
        'amethyst': 'url(~/img/bg-amethyst.png)',
        'montage': 'url(~/img/bg-montage.png)',
        'ukg': 'url(~/img/bg-ukg.PNG)',
        'ourhousebot': 'url(~/img/bg-ourhousebot.PNG)',
        'odyssey2d': 'url(~/img/bg-odyssey2d.jpg)',
        'golf': 'url(~/img/bg-golf.jpg)',
        'snowpoint': 'url(~/img/bg-snowpoint.jpg)',
        'salisbury': 'url(~/img/bg-salisbury.jpg)'
      },
      screens: {
        'tall': { 'raw': '(min-height: 1240px)' }
      }
    },
  },
  plugins: [],
}
