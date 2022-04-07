module.exports = {
  darkMode: 'class',
  content: ["./src/*.{css,js,jsx}"],
  theme: {
    extend: {
      backgroundSize:{
        'anim':'1000px 1500px'
      },
      colors:{
        darkblue:{
          'light': 'hsl(209, 23%, 22%)',
          'dark' : 'hsl(207, 26%, 17%)',
        },
        gray:{
          'lt-text' : 'hsl(0, 0%, 100%)',
          'light' : 'hsl(0, 0%, 98%)',
          'dark' : 'hsl(0, 0%, 52%)',
        }
      },
      keyframes: {
        pulse: {
          '0%': { opacity: .9 },
          '100%': { transform: .2 },
        },
        lightup: {
          '0%': {
              /*opacity: 0;*/
              /*filter: brightness(0.8);*/
              /*background: linear-gradient(0deg, transparent, #8484844a, transparent) no-repeat;*/
              'backgroundPosition': '0 -1000px',
          },
          '100%': {
              /*opacity: 0;*/
              /*filter: brightness(0.8);*/
              /*background: linear-gradient(90deg, transparent, #8484844a, transparent) no-repeat;*/
              'backgroundPosition': '0 0'
      
          }
      }
      },
      animation: {
        pulse: 'pulse 2s ease-in-out infinite',
        light: 'lightup 1000ms ease-in-out infinite alternate'
      }
    },
  },
  plugins: [],
}
