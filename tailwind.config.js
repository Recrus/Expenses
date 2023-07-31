/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "320px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "2560px",
    },
    container: {
      center: true,
    },
    fontFamily: {
      primary: ["Montserrat", "sans-serif"],
      accent: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#F9F9F9",
        text: "#333333",
        accent: "#007BFF",
        "dark-primary": "#212121",
        "dark-text": "#EDEDED",
        "dark-accent": "#64D7FF",
        //additional colors
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
}