/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        'light_gray': '#c3c3c3', // search palce holder
        'dark_gray': '#707070',
        'silver_gray': '#bfbfbf',
        'charcoal_gray': '#555555', // blog title
        'medium_gray': '#a7a7a7', // landing des
        'soft_grey' : '#F3F4F6' , //landing bg
        
        'bright_blue': '#267dff',
        'ocean_blue': '#436e8e', // bold titles
        'dusty_blue': '#8c9aac', // card desc
        'cool_blue': '#475466', // card title

      },
    },
  },
  plugins: [],
}