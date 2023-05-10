const circleContainer = document.getElementById("circle-container");
const circles = document.querySelectorAll(".circle");
const startButton = document.getElementById("start-button");
const scoreDisplay = document.getElementById("score");

let sequence = [];
let playerSequence = [];
let score = 0;
let round = 1;

function startGame() {
  score = 0;
  round = 1;
  sequence = [];
  playerSequence = [];
  scoreDisplay.textContent = "Score: " + score;
  generateSequence();
}

function generateSequence() {
  const randomIndex = Math.floor(Math.random() * circles.length);
  sequence.push(randomIndex);
  showSequence();
}

function showSequence() {
  let i = 0;
  const interval = setInterval(() => {
    if (i >= sequence.length) {
      clearInterval(interval);
      playerTurn();
    } else {
      const circleIndex = sequence[i];
      const circle = circles[circleIndex];
      flashCircle(circle);
      i++;
    }
  }, 1000);
}

function playerTurn() {
  playerSequence = [];
  circleContainer.addEventListener("click", handleClick);
}

function handleClick(event) {
  const circle = event.target.closest(".circle");
  if (circle) {
    const circleIndex = Array.from(circles).indexOf(circle);
    flashCircle(circle);
    playerSequence.push(circleIndex);
    if (playerSequence.length === sequence.length) {
      circleContainer.removeEventListener("click", handleClick);
      if (checkSequence()) {
        score++;
        scoreDisplay.textContent = "Score: " + score;
        round++;
        generateSequence();
      } else {
        alert("Wrong sequence! Game over.");
      }
    }
  }
}

function checkSequence() {
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] !== playerSequence[i]) {
      return false;
    }
  }
  return true;
}

function flashCircle(circle) {
  circle.style.opacity = 0.5;
  setTimeout(() => {
    circle.style.opacity = 1;
  }, 500);
}

startButton.addEventListener("click", startGame);
