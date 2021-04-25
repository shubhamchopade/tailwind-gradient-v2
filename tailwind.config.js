module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": ["Noto Sans", "sans-serif"],
        "noto-serif": ["Noto Serif", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
