/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    colors: {

      // Foregrounds
      dark: "#131313",
      muted: "#757575",
      mutedondark: "#C0C0C0",
      light: "#FFFFFF",
      accent: "#E1FF2C",
      accentpurple: "#D45DFE",
      success: "#4CD60C",
      warning: "#4CD60C",
      error: "#4CD60C",

      // Backgrounds
      "bg-light": "#FFFFFF",
      "bg-dark": "#131313",
      "bg-black": "#000000",
      "bg-muted": "#C0C0C0",
      "bg-neon": "#E1FF2C",

    }
  },
  plugins: [],
}

