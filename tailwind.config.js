/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        primary_hover: "#7494EC",
        primary_pressed: "#123082",
        Primary_border_dark: "#123082",
        primary_subtle: "#E9EEFC",
        primary_dark: "#06102D",
        primary_label_dark: '#06102D',

        secondary_surface_light: "#F6F0FF", // pink
        secondary_border_default: "#B57BFF"
        ,
        greyscale_title: "#0D0E11", // black
        greyscale_text: "#8990A6", // for icons and placeholders
        greyscale_surface_subtle: "#F3F4F6",
        greyscale_subtitle: "#4F5569", // lighter shade of gray
        greyscale_border: "#A2A7B9",
        error_dark: "#A70C0C", // red
        error_subtle: "#FEECEC",

        success_dark: "#106A3D", //green
        success_subtle: "#106A3D"
      },
      screens: {
        'xs': '390px',
        'sm': '767px',
        'md': '1024px',
        'lg': '1280px',
        'xl': '1440px'
      },

      boxShadow: {
        'custom-primary': '8px 8px 0px 0px #1D4ED8',
        'custom-secondary': '8px 8px 0px 0px #B57BFF',
    },
    },
  },
  plugins: [],
};
