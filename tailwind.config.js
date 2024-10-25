/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        intertight: ["Inter Tight", "sans-serif"],
        grotesque: ["Uxum Grotesque", "sans-serif"],
      },
      colors: {
        primaryblue: "#344DAB",
        secyellowgreen: "#A9CA78",
        secpalepurple: "#AD99FF",
        seccoralpink: "#EDA09F",
        seccomrade: "#00874A",
        secgpa1: "#2E62A6",
        secgpa2: "#B09535",
        sectickevent: "#F9516C",
        sectoyin: "#F67D1F",
        secrealtor: "#0165A7",
        secbuilding: "#0059D0",
        greywhite100: "#FFFFFF",
        greywhite200: "#FAFAFA",
        greyblack100: "#1A1B1D",
        greyblack200: "#2B2B2D",
        greyblack300: "#4E4E4E",
        greyblack400: "#79747E",
        greyblack500: "#C2B3A8",
        greyblack600: "#C8C8C8",
        greyblack700: "#E4E4E4",
        tintblue1: "#CBD0E5",
        tintblue2: "#DADFF4",
        tintblue3: "#E1E4F0",
        tintblue4: "#E6E9F6",
        tintblue5: "#EFF1F7",
      },
    },
  },
  plugins: [],
};
