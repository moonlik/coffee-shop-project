module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
		extend: {
			backgroundImage: theme => ({
				'hero-pattern': "url('https://images.unsplash.com/photo-1620360289986-d9e73a6f475b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80')",
				'company-image': "url('https://images.unsplash.com/photo-1551887196-72e32bfc7bf3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80')"
			}),
      skew: {
        '-25': '-25deg',
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
      extend: {},
    },
    plugins: [],
  }
