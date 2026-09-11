/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        "card-light": "0px 10px 40px -10px rgba(0, 0, 0, 0.10)",
        neon: "0px 0px 20px rgba(145, 94, 255, 0.6)",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        sans: ["var(--font-sora)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
