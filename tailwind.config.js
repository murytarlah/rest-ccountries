module.exports = {
  darkMode: 'class',
  important: '#loader',
  content: ["./src/*.{css,js,jsx}"],
  theme: {
    extend: {
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
      }
    },
  },
  plugins: [],
}
