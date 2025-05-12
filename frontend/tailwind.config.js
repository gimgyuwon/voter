/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          100: "rgb(var(--color-main-100) / <alpha-value>)",
          300: "rgb(var(--color-main-300) / <alpha-value>)",
          500: "rgb(var(--color-main-500) / <alpha-value>)",
          700: "rgb(var(--color-main-700) / <alpha-value>)",
        },
        sub: {
          100: "#FCFCFD",
          300: "#E5E7EB",
          500: "#6B7280",
        },
      },
    },
  },
  plugins: [],
};
