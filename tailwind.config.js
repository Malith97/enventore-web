module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "280px",
      sm: "580px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: (theme) => ({}),
      colors: {
        "custom-yellow": "#BAA333",
        "sylab-blue": "#021940",
        "sylab-orange": "#ff7323",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
