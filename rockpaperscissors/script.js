// if spiller 1 har sten og spiller 2 har sten så er der uafgjort//
//if spiller 1 har sten og spiller 2 har papir, så vilder spiller 2//
//if spiller 1 har sten og spiller 2 har saks, så vinder spiller 1//

// if spiller 1 har papir og spiller 2 har sten så vinder spiller 1//
//if spiller 1 har papir og spiller 2 har papir, så er der uafgjort/
//if spiller 1 har papir og spiller 2 har saks, så vinder spiller 2//

// if spiller 1 har saks og spiller 2 har sten så vinder spiller 1//
//if spiller 1 har saks og spiller 2 har papir, så er der uafgjort/
//if spiller 1 har saks og spiller 2 har saks, så vinder spiller 2//

//først skal man vælge enten sten, saks eller papir
//computer gætter tilfældig tal
//animation
//her vises den valgte - enten sten, saks eller papir.
//afgørelse - hvem vinder?
//evt start forfra knap
//evt score
//brug if og randomnumber (math random)
//math floor
//eventlistener
//animationend
//classlist (add/removed)
//if statements og functions

"use strict";

let result;
let userGuess;
let computerGuess;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => handleUserChoice("rock"));
paper.addEventListener("click", () => handleUserChoice("paper"));
scissors.addEventListener("click", () => handleUserChoice("scissors"));

function handleUserChoice(choice) {
  userGuess = choice;
  computerGuesses();
  determineWinner();
  animateHands();
}

function computerGuesses() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  computerGuess = choices[randomIndex];
  console.log("Computer Guess:", computerGuess);
}

function determineWinner() {
  if (userGuess === computerGuess) {
    result = "draw";
  } else if (userGuess === "rock" && computerGuess === "scissors") {
    result = "user";
  } else if (userGuess === "rock" && computerGuess === "paper") {
    result = "computer";
  } else if (userGuess === "paper" && computerGuess === "rock") {
    result = "user";
  } else if (userGuess === "paper" && computerGuess === "scissors") {
    result = "computer";
  } else if (userGuess === "scissors" && computerGuess === "paper") {
    result = "user";
  } else if (userGuess === "scissors" && computerGuess === "rock") {
    result = "computer";
  }
}

function displayResult() {
  const winText = document.getElementById("win");
  const loseText = document.getElementById("lose");
  const drawText = document.getElementById("draw");

  winText.classList.add("hidden");
  loseText.classList.add("hidden");
  drawText.classList.add("hidden");

  if (result === "user") {
    winText.classList.remove("hidden");
  } else if (result === "computer") {
    loseText.classList.remove("hidden");
  } else {
    drawText.classList.remove("hidden");
  }
}
// -- AI -- //
function animateHands() {
  const player1 = document.getElementById("player1");
  const player2 = document.getElementById("player2");
  // -- AI -- //

  player1.classList.remove("shake");
  player2.classList.remove("shake");

  player1.classList.add("shake");
  player2.classList.add("shake");

  player1.addEventListener("animationend", () => {
    player1.classList.remove("shake");
    player1.classList.remove("rock", "paper", "scissors");
    player1.classList.add(userGuess);
    displayResult();
  });

  player2.addEventListener("animationend", () => {
    player2.classList.remove("shake");
    player2.classList.remove("rock", "paper", "scissors");
    player2.classList.add(computerGuess);
  });
}
