/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "lightBg": "#F4F7FE",
        "primary": "#F65F18",
        "primaryDark": "#E15904",
        "secondary": "#191C26",
        "secondaryDark": "#222734",
        "secondaryLight": "#2A2F3C",
        "tertiary": "#7B61FF",

        // Grey
        greyDark: "#636363",
        greyLight: "#E5E5E5",
        greyLightest: "#F5F5F5",
        greyMid: "#C4C4C4",
        greyWhite: "#FFFFFF",

        // Status
        amber: "#FF924B",
        amberLight: "#FFEED4",
        blue: "#2A6CDF",
        blueLight: "#BFCDE4",
        green: "#19A070",
        greenLight: "#CBE2C8",
        red: "#D93737",
        redLight: "#E8CACA",
      }
    },
  },
  plugins: [],
}
