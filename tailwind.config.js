module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./TW_components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: 
  {
    screens: {
      sm:'376px',
      sm2: '550px',
      md: '786px',
      lg: '991px',
      xl: '1439px'
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
        1: '#490CFF',
        2: '#008AFF'
      },
      purple: {
        1: '#5625A6',
        2: '#3321B1',
        3: '#852A98'
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
        'btnGlowHover': 'inset 0 0 20px #F5129C',
        'btnGlowInit': 'inset 0 0px 10px #F5129C',
        'headerButton': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'mintGlow': ['inset 0px 0px 20px 0px #F5129C',
                      '0px 0px 4px 0px #F5129C'] ,
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite'
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',},
        backgroundSize: {
          'size-200': '200% 200%',},
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }},}
    },
        
  },
  plugins: [],
}