import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        nred: "#FF1493",
        nwhite: "#c4cfde",
      },
    },
  },
  plugins: [],
};
