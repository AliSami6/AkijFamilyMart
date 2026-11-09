/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: ["./*.html", "./src/**/*.{html,js}", "./assets/**/*.{html,js}"],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1320px",
      },
    },

    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
    },

    fontSize: {
      sm: "0.75rem",
      base: "0.875rem",
      md: "1.125rem",
      lg: "1.5rem",
      xl: "1.75rem",
      "2xl": "2rem",
      "3xl": "2.5rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      xs: "0.6875rem",
    },

    extend: {
      flex: {
        0: "0 0 auto",
      },

      colors: {
        white: "#ffffff",

        // Primary Galleria Brand
        primary: "#E6007E",

        // Brand Pink
        pink: {
          50: "#FFF5F9",
          100: "#FFE4F0",
          200: "#F8C5DC",
          300: "#FF99C9",
          400: "#FF4DA6",
          500: "#E6007E",
          600: "#CC006F",
          700: "#B0005A",
          800: "#8F0049",
          900: "#700039",
          950: "#450024",
        },

        // Neutral Colors
        gray: {
          50: "#F9F9F9",
          100: "#f0f3f2",
          200: "#ecf0ef",
          300: "#dfe2e1",
          400: "#c1c7c6",
          500: "#889397",
          600: "#5c6c75",
          700: "#3d4f58",
          800: "#21313c",
          900: "#001e2b",
          950: "#00131C",
          line: "#dfe2e1",
          txt: "#5c6c75",
          lighter: "#F9F9F9",
        },

        // Akij Galleria Green (Success / Status)
        green: {
          50: "#E8FFF0",
          100: "#CEFDDA",
          200: "#A2FBC0",
          300: "#68F59A",
          400: "#37EA78",
          500: "#16C75A",
          600: "#0D9E45",
          700: "#0A7937",
          800: "#106432",
          900: "#135428",
          950: "#042F16",
        },

        // Gold Accent
        amber: {
          50: "#FDFDEA",
          100: "#FDF6B2",
          200: "#FCE96A",
          300: "#FACA15",
          400: "#E3A008",
          500: "#C27803",
          600: "#9F580A",
          700: "#8E4B10",
          800: "#723B13",
          900: "#633112",
        },

        // Akij Brand Variables
        akij: {
          navy: "var(--akij-navy)",
          gold: "var(--akij-gold)",
          green: "var(--akij-green)",
          light: "var(--akij-light)",
          white: "var(--akij-white)",
        },

        // Galleria Brand
        galleria: {
          brand: "var(--galleria-brand)",
          dark: "var(--galleria-brand-dark)",
          light: "var(--galleria-brand-light)",
        },

        // Brand Utilities
        brand: {
          navy: "#0F0F12",
          gold: "#FF4DA6",
          green: "#FF4DA6",
          black: "var(--bg-brand-black-color)",
          "green-color": "var(--brand-green-color)",
          pink: "var(--brand-pink)",
          "pink-dark": "var(--brand-pink-dark)",
          "pink-light": "var(--brand-pink-light)",
          "menu-bg": "var(--brand-menu-bg)",
        },

        // Header Colors
        header: {
          input: "var(--header-input-color)",
          border: "var(--header-border-bottom-color)",
          "search-border": "var(--search-header-border-color)",
          "button-border": "var(--header-button-border-color)",
          "button-hover": "var(--header-button-hover-bg)",
          "nav-dropdown": "var(--header-nav-dropdown-color)",
          "dropdown-menu": "var(--header-dropdown-menu-color)",
          "dropdown-hover": "var(--header-dropdown-item-hover)",
        },

        offcanvas: {
          header: "var(--offcanvas-header-color)",
        },

        icon: {
          tabler: "var(--icon-tabler-color)",
        },
      },

      maxWidth: {
        "screen-xs": "300px",
      },

      fontWeight: {
        semibold: "600",
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms")({ strategy: "class" }),
    require("@tailwindcss/typography"),
  ],
};
