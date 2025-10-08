/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        antonio: ["Antonio", "sans-serif"],
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotateX(16deg) rotateY(0deg)" },
          "100%": { transform: "rotateX(16deg) rotateY(360deg)" },
        },
      },
      animation: {
        orbit: "orbit 50s linear infinite",
      },
    },
  },
  plugins: [],
};
