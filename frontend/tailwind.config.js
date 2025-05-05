/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          100: "#EDF4ED",
          300: "#E0F8E0",
          500: "#2ECC71",
          700: "#228B22",
        },
      },
    },
  },
  plugins: [],
};
