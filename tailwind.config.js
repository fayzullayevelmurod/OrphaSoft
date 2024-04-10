/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ['"Open Sans"', "sans-sarif"],
      },
      colors: {
        teal: "#00AAA1",
      },
      backgroundImage: {
        line: "url('./assets/line-bg.png')",
      },
    },
  },
  plugins: [],
};