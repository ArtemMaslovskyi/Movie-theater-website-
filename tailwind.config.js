/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/Header.js",
    "./src/index.css",
    "./src/Sidebar.js",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "rgb(  var(--color-accent1) / <alpha-value>)",
          2: "rgb(var(--color-accent2) / <alpha-value>)",
        },
        bkg: "rgb(var(--color-bkg) / <alpha-value>)",
        content: "rgb(var(--color-content) / <alpha-value>)",
        supporter: "rgb(var(--color-supporter) / <alpha-value>)",
      },
      animation: {
        decoration_in: "scale-in-hor-left 0.5s ease-in-out both",
      },
    },
  },
  plugins: [],
};
