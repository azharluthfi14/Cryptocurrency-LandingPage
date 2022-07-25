module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "1rem",
        md: "4rem",
        lg: "6rem",
      },
    },
    plugins: [
      require("tw-elements/dist/plugin"),
      require("@tailwindcss/forms"),
    ],
  },
};
