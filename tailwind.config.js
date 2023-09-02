/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        title: 'Sedgwick Ave Display',
        body: 'Poppins',
        swiftchat: 'Cherry Bomb One',
        yankeebites: 'Shadows Into Light'
      },
      colors:{
        darkText: "rgba(255, 255, 255, 0.5)",
        darkBg: "#202023",
        lightText: "#202023",
        lightBg: "rgba(255, 255, 255, 0.5)",
        button: "#8a4d76"
      }
    },
  },
  plugins: [],
}