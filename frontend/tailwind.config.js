/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          100: "#EFF6FF",
          300: "#BFDBFE",
          500: "#3B82F6",
          700: "#2563EB",
        },
        sub: {
          100: "#F9FAFB",
          300: "#E5E7EB",
          500: "#6B7280",
        },
      },
    },
  },
  plugins: [],
};
