export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // any selector for themes
  theme: {
    extend: {
      container: {
        // your universal container with set of padding
        center: true, // centered container
        screens: {
          DEFAULT: '100%',
          sm: '640px',
          md: '768px',
          lg: '992px',
          xl: '1280px',
          '2xl': '1440px',
        },
        padding: {
          // container paddings
          DEFAULT: '15px',
          sm: '15px',
          md: '20px',
          lg: '20px',
          xl: '25px',
          '2xl': '35px',
        },
      },
      //
      screens: {
        // your default or additional breakpoints breakpoints
        xxs: '450px',
        mdPlus: '992px',
        xs: '576px',
        xxl: '1440px',
      },
      //
      boxShadow: {
        // any box shadows
        lightShadow: '0px 4px 14px 0px rgba(0, 0, 0, 0.25)',
      },
      //
      backgroundColor: {
        // any background colors
        blueColor: '#344D91',
      },
      //
      colors: {
        // any colors - obj.colors
        white: '#FFFFFF',
        black: {
          600: '#727880',
          // 700: rgba...
        },
      },
      //
      fontSize: {
        // set your sizes [font-size, line-height]
        xs12: ['12px', '16px'],
      },
    },
  },
  plugins: [],
};
