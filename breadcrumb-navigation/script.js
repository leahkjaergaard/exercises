const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

function createBreadcrumb(bcData) {
  const nav = document.getElementById("breadcrumb");
  nav.innerHTML = ""; // Ryd tidligere breadcrumbs

  bcData.forEach((item, index) => {
    if (index < bcData.length - 1) {
      // opret et link
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.name;
      nav.appendChild(a);
    } else {
      // Det sidste element tekst uden link
      const span = document.createElement("span");
      span.textContent = item.name;
      nav.appendChild(span);
    }

    // Tilføj separator, undtagen efter det sidste element
    if (index < bcData.length - 1) {
      const separator = document.createElement("span");
      separator.className = "separator";
      separator.textContent = "/";
      nav.appendChild(separator);
    }
  });
}

document.getElementById("generateBc").addEventListener("click", () => createBreadcrumb(bc));
