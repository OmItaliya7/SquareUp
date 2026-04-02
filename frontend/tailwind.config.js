// tailwind.config.js
//
// Figma design frame sizes:
//   Mobile   → 390px
//   Laptop   → 1440px (primary reference)
//   Desktop  → 1920px




/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    screens: {
      xs:    "390px",   
      sm:    "640px",
      md:    "768px",
      lg:    "1024px",  
      xl:    "1280px", 
      "2xl": "1440px",  
      "3xl": "1920px",  
    },
    extend: {
      

      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },

      maxWidth: {
        container:     "1440px",
        containerWide: "1620px",
      },

    },
  },
  plugins: [],
}




