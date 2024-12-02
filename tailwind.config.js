/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        smd: "650px",
        md: "786px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
