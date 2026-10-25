/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0F2C59",
          green: "#00A859",
          bg: "#FDFBF7",
          cardBg: "#FFFFFF",
          gold: "#C5A880",
          goldHover: "#B29367",
          dark: "#1E293B",
          muted: "#64748B",
          lightBg: "#F4F1EA",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Hind Siliguri", "sans-serif"],
      },
    },
  },
  plugins: [],
};
