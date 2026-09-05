/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pearl: {
          gold: "#D4AF37",
          "gold-muted": "#C9B37E",
          dark: "#0a0a0a",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "gold-sm": "0 0 20px rgba(212, 175, 55, 0.25)",
        "gold-md": "0 0 35px rgba(212, 175, 55, 0.45)",
        "gold-lg": "0 0 45px rgba(212, 175, 55, 0.6)",
      },
    },
  },
  plugins: [],
};
