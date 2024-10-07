document.getElementById("theme-selector").addEventListener("change", function () {
  document.body.setAttribute("data-theme", this.value);
});

document.getElementById("theme-selector").addEventListener("change", function () {
  var theme = this.value;
  var logo = document.getElementById("logo");

  if (theme === "light") {
    logo.src = "../logo.svg";
  } else if (theme === "dark") {
    logo.src = "../logo_dark.svg";
  } else if (theme === "hawaii") {
    logo.src = "../logo_hawaii.svg";
  }
  document.body.setAttribute("data-theme", theme);
});
