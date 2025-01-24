// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FAF9F8",
        secondary: "#F0EFEE",
        textIcon: "#8B8D91",
        bgHover: "#EBE5FF",
      },
    },
  },
  plugins: [],
};
