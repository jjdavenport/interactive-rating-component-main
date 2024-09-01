/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["overpass", "sans-serif"],
      },
      fontSize: {
        custom: "15px",
      },
      colors: {
        orange: "hsl(25, 97%, 53%)",
        white: "hsl(0, 0%, 100%)",
        lightGrey: "hsl(217, 12%, 63%)",
        mediumGrey: "hsl(216, 12%, 54%)",
        darkBlue: "hsl(213, 19%, 18%)",
        veryDarkBlue: "hsl(216, 12%, 8%)",
        backgroundTop: "hsl(215, 20%, 17%)",
        backgroundBottom: "hsl(215, 24%, 12%)",
      },
    },
  },
  plugins: [],
};
