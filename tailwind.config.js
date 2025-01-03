/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xl: "1440px",
      },
      colors: {
        "purple-primary": "hsl(254, 88%, 90%)",
        "purple-secondary": "hsl(256, 67%, 59%)",
        "yellow-primary": "hsl(31, 66%, 93%)",
        "yellow-secondary": "hsl(39, 100%, 71%)",
        blackish: "hsl(0, 0%, 7%)",
      },
    },
  },
  plugins: [],
};
