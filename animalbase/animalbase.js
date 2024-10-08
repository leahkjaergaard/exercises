"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");

  document.querySelectorAll("button.filter").forEach((button) => button.addEventListener("click", filterList));

  loadJSON();
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  prepareObjects(jsonData);
}

// Vis alle dyr
function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);
  displayList(allAnimals);
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

// Få den valgte filtertype (kat, hund eller all)
function filterList(event) {
  const filter = event.target.dataset.filter;

  // Filtrér listen baseret på det valgte filter
  if (filter === "*") {
    displayList(allAnimals);
  } else {
    const filteredAnimals = allAnimals.filter((animal) => animal.type === filter);
    displayList(filteredAnimals);
  }
}

function displayList(animals) {
  document.querySelector("#list tbody").innerHTML = "";

  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // klon
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  document.querySelector("#list tbody").appendChild(clone);
}
