// Define an array of possible colors
const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

// Initialize variables to keep track of the game state
let simonPattern = [];
let playerPattern = [];
let turn = 0;
let isSimonSaying = true;

// Define a function to start the game
function startGame() {
  simonPattern = [];
  playerPattern = [];
  turn = 0;
  isSimonSaying = true;
  nextTurn();
}

// Define a function to generate the next color in the pattern
function nextTurn() {
  // Add a random color to the simonPattern
  simonPattern.push(colors[Math.floor(Math.random() * colors.length)]);

  // Show the pattern to the player
  showPattern();

  // Set the game state to allow the player to start guessing
  turn = 0;
  isSimonSaying = false;
}

// Define a function to show the pattern to the player
function showPattern() {
  // Iterate over the simonPattern and flash each color
  for (let i = 0; i < simonPattern.length; i++) {
    setTimeout(() => {
      flashButton(simonPattern[i]);
    }, (i + 1) * 1000);
  }
}

// Define a function to flash a button
function flashButton(color) {
  // Get the button element with the corresponding color
  const button = document.getElementById(color);

  // Add the "active" class to the button to show that it's being flashed
  button.classList.add('active');

  // Remove the "active" class after a short delay to turn off the flash effect
  setTimeout(() => {
    button.classList.remove('active');
  }, 500);
}

// Add event listeners to the buttons to allow the player to guess
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
    // Ignore clicks if the game is still showing the pattern
    if (isSimonSaying) {
      return;
    }

    // Add the clicked color to the playerPattern
    playerPattern.push(button.id);

    // Flash the button to show that it was clicked
    flashButton(button.id);

    // Check if the player has guessed the correct sequence so far
    if (playerPattern[playerPattern.length - 1] !== simonPattern[playerPattern.length - 1]) {
      // If the guess was incorrect, end the game
      alert('Game over!');
      startGame();
    } else if (playerPattern.length === simonPattern.length) {
      // If the guess was correct and the player has guessed the entire pattern, start the next turn
      playerPattern = [];
      turn++;
      nextTurn();
    }
  });
});

// Start the game when the page loads
startGame();
