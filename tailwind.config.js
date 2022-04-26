module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        bali: "url('../img/bali.jpg')",
        chicago: "url('../img/chicago.jpg')",
        europe: "url('../img/europe.jpg')",
        iceland: "url('../img/iceland.jpg')",
        LA: "url('../img/LA.jpg')",
        miami: "url('../img/miami.jpg')",
        new_york: "url('../img/new_york.jpg')",
        norway: "url('../img/norway.jpg')",
        sanFrancisco: "url('../img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../img/sanFranciscoDesktop.jpg')",
        seattle: "url('../img/seattle.jpg')",
        switzerland: "url('../img/switzerland.jpg')",
        sydney: "url('../img/sydney.jpg')",
        yosemite: "url('../img/yosemite.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#00bcd4",
        secundary: "#ff9800",
        terciary: "#ff5722",
      }),
      textColor: {
        primary: "#00bcd4",
        secundary: "#ff9800",
        terciary: "#ff5722",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    extends: {},
  },
  plugins: [],
};
