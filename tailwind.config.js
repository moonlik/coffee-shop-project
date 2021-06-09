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
        }
      },
    },
    variants: {
      extend: {
        transform: ['hover'],
        animation: ['hover', ],
        translate: ['group-hover'],
        scale: ['active'],
      },
    },
    plugins: [],
  }
