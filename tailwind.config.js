/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    // colors:{
    //   'royal-purple': '#6A1B9A',
    //   'bright-shaffron': '#FFB300',
    //   'turquoise': '#00BCD4',
    //   'ivory': '#FFFFF0',
    //   'white' : '#FFFFFF',
    //   'darkred': '#8B0000'

    // },
    
    extend: {
      // sponsors logo
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)"},
          to: { transform: "translateX(-100%)"},
        }
      },
//       from: This is the starting point of the animation, where the element will be translated to translateX(0), which means it will be at its original position.
// to: This is the ending point of the animation, where the element will be translated to translateX(-100%), which means it will be moved 100% to the left of its original position.
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      plugins: [],
    },
  },
};
