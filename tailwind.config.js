/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#BD202C",
        "primary-dark": "#a01b25",
        normal: "#333333",
        light: "#808080",
        error: "#c64442",
        overlay: "#060101AA",
        background: "var(--background)",
      },
      screens: {
        xxs: "350px",
        xxsmax: { max: "349px" },
        xs: "420px",
        xsmax: { max: "419px" },
        smmax: { max: "639px" },
        mdmax: { max: "767px" }, // max of md: size
        lgmax: { max: "1023px" }, // max of lg: size
        "3xl": "1600px",
      },
      fontSize: {},
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "8rem",
          lg: "4rem",
          xl: "4rem",
          "2xl": "6rem",
        },
        screens: {
          lg: "1024px",
          xl: "1240px",
          "2xl": "1400px",
        },
      },
      dropShadow: {
        "text-sm": "1px 1px 0px rgba(0, 0, 0, 0.90)",
        "text-md": "1px 2px 0px rgba(0, 0, 0, 0.90)",
        "text-lg": "1px 4px 0px rgba(0, 0, 0, 0.90)",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function ({ addVariant, addUtilities }) {
      // Variants
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
      addVariant("children", "& *");
    },
  ],
};
