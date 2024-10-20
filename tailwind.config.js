/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0075ff",
        secondary: "#707eae",
        dark: {
          DEFAULT: "#0b1437",
          card: "#111c44",
        },
      },
      backdropBlur: {
        xl: "20px",
      },
    },
  },
  plugins: [],
};

