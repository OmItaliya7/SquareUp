/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "390px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },

      maxWidth: {
        container: "1920px",
      },
    },
  },
  plugins: [],
};
