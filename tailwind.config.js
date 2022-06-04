module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./TW_components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: 
  {
    screens: {
      sm:'480px',
      md: '786px',
      lg: '991px',
      xl: '1435px'
    },

    colors: {
      black: {
        1: '#000000'
      },
      white: {
        1: '#FFFFFF'
      },
      pink: {
        1: '#F5129C',
        2: '#FF3EFF'
      },
      gray: {
        1: '#AEB2BA'
      },
      blue: {
        1: '#490CFF'
      },
      purple: {
        1: '#5625A6'
      },
    },

    extend: {
      fontFamily: {
        'Grotesk': ['Space Grotesk','sans-serif'],
        'Plus': ['Plus Jakarta Sans','sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'btnGlow': '0 0 10px #F5129C',
        'btnGlowHover': '0 0 20px #F5129C'
      }
    },
  },
  plugins: [],
}