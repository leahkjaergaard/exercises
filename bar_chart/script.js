document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("ul");
  const maxValues = 20;

  const generateRandomCustomers = () => Math.floor(Math.random() * 101);

  const updateChart = () => {
    const customerCount = generateRandomCustomers();
    const li = document.createElement("li");
    li.style.setProperty("--height", customerCount);
    li.style.background = `color-mix(in hsl, red, green ${customerCount}%)`;
    list.appendChild(li);
    if (list.children.length > maxValues) {
      list.removeChild(list.firstElementChild);
    }
  };

  setInterval(updateChart, 1000);
});
