/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        1300: "1300px",
      },
      width: {
        semi: "97.5%",
      },
      backgroundColor: {
        "brand-1": "#ee1515",
        "brand-white": "#f0f0f0",
      },
      colors: {
        "custom-color": "#ee1515", // Substitua com sua cor personalizada
      },
    },
  },
  plugins: [],
};
