/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "skypy" : "#76EAD7",
        "greeny" : "#C4FB6D",
        "blacky" : "#393E46",
      }
    },
  },
  plugins: [require("daisyui")],
  'fontawesome-svg-core': {
    'license': 'free'
  }
}
