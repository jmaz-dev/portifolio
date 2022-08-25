/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'canii': "url('/assets/frelabgcards/canicard.png')",
        'glf': "url('/assets/frelabgcards/glfcard.png')",
        'luana': "url('/assets/frelabgcards/luanacard.png')",
      },
    },
  },
  plugins: [],
};
