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
      colors: {
        
        main:  "#0B0F19",   
        card:  "#1A1A1A",   
        soft:  "#262626",  

        primaryText:   "#FFFFFF",
        secondaryText: "#E6E6E6",  
        mutedText:     "#A3A3A3",

        accent: "#9EFF00",        

        borderMain: "#262626",
      },

      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },

      maxWidth: {
        container:     "1440px",
        containerWide: "1620px",
      },

      borderRadius: {
        primary: "8px",
      },

      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
}




