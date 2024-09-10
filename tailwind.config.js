// /** @type {import('tailwindcss').Config} */
// export const content = ['./index.html'];
// export const theme = {
//   extend: {},
//   fontFamily: {
//     'body': [' Inter ', 'sans-serif']
//   }
// };
// export const plugins = [];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Inter', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        }
      },
      animation: {
        blink: 'blink 2s infinite'
      }
    }
  },
  plugins: [],
}
