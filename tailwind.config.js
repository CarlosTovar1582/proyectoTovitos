/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
     
      fontFamily: {       
        "Concert-One": "'Concert One'",       
        "Londrina-Shadow": ["Londrina Shadow", "serif"],
        "Rubik-Dirt": ["Rubik Dirt", "serif"],
        "Concert-One": ["Concert One", "sans-serif"],
        "DynaPuff": ["DynaPuff", "system-ui"],
    
      
      },

    },
  },
  plugins: [],
};
