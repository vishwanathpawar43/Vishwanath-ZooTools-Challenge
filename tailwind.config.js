/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md0: "800px",

      md: "900px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      lg1: "1250px",

      xl: "1300px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1350px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
