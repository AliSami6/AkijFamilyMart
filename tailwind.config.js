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
          dark: "#1E293B",
          muted: "#64748B",
          lightBg: "#F4F1EA",
          navyLight: "#172A45",
          gold: "#D4AF37",
          goldHover: "#B59226",
          red: "#E53E3E",
          redHover: "#C53030",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Hind Siliguri", "sans-serif"],
      },
    },
  },
  plugins: [],
};
