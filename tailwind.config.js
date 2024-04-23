/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          red: "#ef233c",
          blue: "#4361ee",
          green: "#70e000",
        },
        dark: {
          1: "#22333b",
          2: "#1c2541",
        },
        light: {
          1: "#fffffc",
          2: "#f8f7ff",
        },
        grey: {
          1: "#e9ecef",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
