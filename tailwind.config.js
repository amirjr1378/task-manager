module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        "todo-header-day": "url('/images/header-day.jpg')",
        "todo-header-afternoon": "url('/images/header-afternoon.jpg')",
        "todo-header-night": "url('/images/header-night.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus", "focus-within"],
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      useFormClasses: true,
    }),
  ],
};
