module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily: {
          'sans': ['Raleway'],
          'serif': ['PlayfairDisplay'],
        },
        backgroundImage: theme => ({
          'hero-pattern': "url(./assets/images/coffee-house-header.jpeg)",
          'company-image': "url('./assets/images/coffee-house-interior.jpeg')"
        }),
        skew: {
          '-25': '-25deg',
        },
        scale: {
          '-1': '-1',
        },
        colors: {
          brown: {
            '50': '#F7DFB5',
            '100': '#F5D59E',
            '200': '#F0C170',
            '300': '#EBAD42',
            '400': '#E29818',
            '500': '#B47913',
            '600': '#865A0E',
            '700': '#583B09',
            '800': '#2A1C04',
            '900': '#000000'
          }
        },
        keyframes: {
          scroll: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-10%)' },
          },
          'fadein-bottom': {
            '0%': { opacity: 0, transform: 'translateY(20%)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
          },
          'fadein-left': {
            '0%': { opacity: 0, transform: 'translateX(-20%)' },
            '100%': { opacity: 1, transform: 'translateX(0)' }
          },
          'fadein-right': {
            '0%': { opacity: 0, transform: 'translateX(20%)' },
            '100%': { opacity: 1, transform: 'translateX(0)' }
          },
          popup: {
            '0%': { opacity: 0, transform: 'scaleX(0.9) scaleY(0.9)' },
            '100%': { opacity:1, transform: 'scaleX(1) scaleY(1)' }
          }
        },
        animation: {
          scroll: 'scroll 20s linear infinite',
          'fadein-bottom': 'fadein-bottom 1s ease-in 1',
          'fadein-left': 'fadein-left 1s ease-in 1',
          'fadein-right': 'fadein-right 1s ease-in 1',
          popup: 'popup 150ms ease-in 1',
          'fadein-right-quick': 'fadein-right 150ms ease-in 1',
        }
      },
    },
    variants: {
      extend: {
        transform: ['hover'],
        transitionProperty: ['hover', 'focus'],
        animation: ['hover', 'active'],
        translate: ['group-hover'],
        scale: ['active'],
      },
    },
    plugins: [],
  }
