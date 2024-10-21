/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light_gray: "#c3c3c3", // search palce holder
        dark_gray: "#707070",
        silver_gray: "#bfbfbf",
        charcoal_gray: "#555555", // blog title
        medium_gray: "#a7a7a7", // landing des
        soft_grey: "#F3F4F6", //landing bg

        bright_blue: "#267dff",
        ocean_blue: "#436e8e", // bold titles
        dusty_blue: "#8c9aac", // card desc
        cool_blue: "#475466", // card title

        navy_blue: "#121826", //dark mode bg
        light_blue: "#C8E3F8", //hero section
        orange: "#EC9876", //academy name
        midnight_blue: "#262E3C", //course card bg
        cloud_grey: "#d8d8d8", //course card text
        steel_blue: "#2F5675", //title category
      },
      fontFamily: {
        iranSans: ["iranSans", "sans-serif"],
        iranSansBold: ["iranSansBold", "sans-serif"],
        iranSansLight: ["iranSansLight", "sans-serif"],
        kalameh: ["kalameh", "sans-serif"],
        kalamehBold: ["kalamehBold", "sans-serif"],
        kalamehLight: ["kalamehLight", "sans-serif"],
        peyda: ["peyda", "sans-serif"],
        peydaBold: ["peydaBold", "sans-serif"],
        peydaMedium: ["peydaMedium", "sans-serif"],
        kalamehNum:["kalamehNum"]
      },
      boxShadow: {
        custom: "0 5px 80px rgba(0, 0, 0, 0.16)",
        slider: "rgba(0, 0, 0, 0.16) 5px 5px 10px",
        sliderDark: "rgba(211, 211, 211, 0.16) 5px 5px 10px ",
        sliderServices: "rgba(0, 0, 0, 0.16) -15px 10px 10px",
        sliderServicesDark: "rgba(211, 211, 211, 0.16) -15px 10px 10px",
      },
    },
    screens: {
      mini: "200px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      mid: "1184px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {
      backdropBlur: ["responsive", "hover", "focus"],
    },
  },
  plugins: [],
  darkMode: "class",
})
