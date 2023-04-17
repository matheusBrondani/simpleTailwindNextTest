const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addUtilities }) => {
  const loadingUtilities = {
    ".loading-indicator": {
      display: "inline-block",
      border: "2px solid transparent",
      borderTop: "2px solid currentColor",
      borderRadius: "50%",
      width: "24px",
      height: "24px",
      animation: "spin 1s linear infinite",
    },
  };

  addUtilities(loadingUtilities, ["responsive"]);
});
