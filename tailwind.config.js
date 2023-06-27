/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0ABAB5", // green main color
        secondary: "#393D4E", // text-color-black
        "light-grey-stroke": "#E7EAF0",
        grey: "#8E93AA",
        "bg-grey": "#F8FAFB",
        red: "#FF4E4E",
      },
    },
  },
  plugins: [],
};
