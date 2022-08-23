/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      'body': ['Inter']
    },
    container: {
      screens: {
         sm: "100%",
         md: "100%",
         lg: "1200px",
      }
    },
    extend: {
      colors: {
        gray: {
          50: "#F5F5F5",
          400: "#898FA4",
          600: "#494949",
          900: "#372E2E"
        },
        blue: {
          50: "#EDF3FF",
          700: "#2533CF"
        }
      },
      boxShadow: {
        'about-card-primary': '-48px 53px 88px rgb(67 96 251 / 14%)',
        'about-card-secondary': '16px 31px 33px rgb(79 139 255 / 3%)',
        'box': '0px 17px 26px 4px rgba(168, 127, 255, 0.04)'
      }
    }
  },
  plugins: [],
}
