/** @type {import('tailwindcss').Config} */
export default {
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

        navy_blue:"#121826", //dark mode bg 

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
      },
      boxShadow: {
        custom: "0 5px 80px rgba(0, 0, 0, 0.16)",
      },
      backdropBlur: {
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
    },
    // screens:{
    //   laptop: "1512px" ,
    //   desktop : "1304px" ,
    //   tablet : "1130px" ,
    //   mobile: "600px" ,
    //   mini:"400px"
    // }
  },
  variants: {
    extend: {
      backdropBlur: ["responsive", "hover", "focus"],
    },
  },
  plugins: [],
  darkMode:"class",
};
