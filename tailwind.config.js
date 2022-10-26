/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lightBg: "#F4F7FE",
        primary: "#F65F18",
        primaryDark: "#E15904",
        secondary: "#191C26",
        secondaryDark: "#222734",
        secondaryLight: "#2A2F3C",
        tertiary: "#7B61FF",

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
      },

      width: {
        "modal-sm": "448px",
        "modal-md": "696px",
        "modal-lg": "944px",
        "modal-xl": "1192px"
      },

      fontSize: {
        'h1': ['4rem', {
          fontWeight: '500',
          lineHeight: '4.5rem',
        }],
        'h2': ['3rem', {
          fontWeight: '500',
          lineHeight: '3.5rem',
        }],
        'h3': ['2rem', {
          fontWeight: '500',
          lineHeight: '2.5rem',
        }],
        'h4': ['1.5rem', {
          fontWeight: '500',
          lineHeight: '2rem',
        }],
        'h5': ['1.125rem', {
          fontWeight: '500',
          lineHeight: '1.5rem',
        }],
        'subtitle': ['1rem', {
          fontWeight: '500',
          letterSpacing: "0.3em",
          lineHeight: '1.5rem',
        }],
        'paragraph': ['1.125rem', {
          fontWeight: '300',
          lineHeight: '1.5rem',
        }],
        'legal': ['1rem', {
          fontWeight: '300',
          lineHeight: '1.25rem',
        }],
      },

      boxShadow: {
        'button': "inset 0 1px 0 rgb(255 255 255 / 15%), 0 1px 1px rgb(0 0 0 / 8%), 0 0 0 0.2rem rgb(247 119 59 / 50%)",
        'buttonSecondary': "inset 0 1px 0 rgb(0 0 0 / 15%), 0 1px 1px rgb(0 0 0 / 8%), 0 0 0 0.2rem rgb(0 0 0 / 50%)"
      }
    },
  },
  plugins: [],
}
