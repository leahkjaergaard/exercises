document.getElementById("theme-selector").addEventListener("change", function () {
  var theme = this.value;
  var purpleElement = document.getElementById("purple");

  // Skift styling af "purple" elementet baseret på tema
  if (purpleElement) {
    var styles = {
      light: { backgroundColor: "lightgray", color: "black" },
      dark: { backgroundColor: "black", color: "white" },
      purple: { backgroundColor: "purple", color: "white" },
    };
    Object.assign(purpleElement.style, styles[theme]);
  }

  // Ændr temaet for body elementet
  document.body.setAttribute("data-theme", theme);
});
