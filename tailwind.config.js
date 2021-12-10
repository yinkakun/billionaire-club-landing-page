// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  mode: 'jit',
  theme: {
    extend: {
      boxShadow: {
        square: '-11px -7px 0px 1px rgba(0,0,0,1)',
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(145.1% 102.55% at 0% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
        'dot-pattern': "url('/images/dot-pattern.svg')",
        'ellipse-sm': 'url("/images/ellipse-sm.svg")',
        'ellipse-md': 'url("/images/ellipse-md.svg")',
        'ellipse-lg': 'url("/images/ellipse-lg.svg")',
      },
      backgroundPosition: {
        'top-right-5': 'top -150px right -20px',
        'top-left-5': 'top -150px left -20px',
        'left-5': 'top left 0px',
        'left-bottom-5': 'bottom  -950px left 0px',
        'right-top-2': 'bottom  150px right 0px',
        'left-top-2': 'top 30px left -200px',
        'right-bottom-5': 'bottom  -300px right -45px',
      },
      colors: {
        'pinkish-purple': {
          DEFAULT: '#AC32E4',
        },
        'purplish-blue': {
          DEFAULT: '#7918F2',
        },
        'violet-blue': {
          DEFAULT: '#4801FF',
        },
        'aqua-blue': {
          DEFAULT: '#00DBDE',
        },
        magenta: {
          DEFAULT: '#FC00FF',
        },
        'reddish-orange': {
          DEFAULT: '#8C4424',
        },
        'hit-grey': {
          DEFAULT: '#A7A7A7',
        },
        'orange-yellow': {
          DEFAULT: '#E2C668',
        },
        dark: {
          DEFAULT: '#121212',
        },
      },
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
