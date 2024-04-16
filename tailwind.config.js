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
      boxShadow: {
        parent: "0px 4px 4px 0px #00000040",
      },
    },
  },
  plugins: [],
};
