/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E2961",
        secondary: {
          primary: "#56ab2f",
          secondary: "#a8e063",
        },
        tertiary: {
          primary: "#56CCF2",
          secondary: "#2F80ED",
        },
        quaternary: {
          primary: "#FBD3E9",
          secondary: "#BB377D",
        },
      },
    },
    fontFamily: {
      primary: ["Mouse Memoirs", "sans-serif"],
      secondary: ["Archivo Narrow", "sans-serif"],
    },
  },
  plugins: [],
};
