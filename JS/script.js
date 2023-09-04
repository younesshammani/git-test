// Get DOM elements
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const computerMoveElement = document.getElementById('computer-move');
const resultElement = document.getElementById('result');
const winsElement = document.getElementById('wins');
const lossesElement = document.getElementById('losses');
const tiesElement = document.getElementById('ties');

// Initialize counters
let wins = 0;
let losses = 0;
let ties = 0;

// Function to play the game
function playGame(playerMove) {
  // Generate a random move for the computer
  const moves = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  const computerMove = moves[randomIndex];

  // Determine the result
  if (playerMove === computerMove) {
    resultElement.textContent = 'Tie!';
    ties++;
  } else if (
    (playerMove === 'Rock' && computerMove === 'Scissors') ||
    (playerMove === 'Paper' && computerMove === 'Rock') ||
    (playerMove === 'Scissors' && computerMove === 'Paper')
  ) {
    resultElement.textContent = 'You win!';
    wins++;
  } else {
    resultElement.textContent = 'You lose!';
    losses++;
  }

  // Update counters
  winsElement.textContent = wins;
  lossesElement.textContent = losses;
  tiesElement.textContent = ties;

  // Update computer's move
  computerMoveElement.textContent = computerMove;
}

// Add click event listeners to buttons
rockBtn.addEventListener('click', () => playGame('Rock'));
paperBtn.addEventListener('click', () => playGame('Paper'));
scissorsBtn.addEventListener('click', () => playGame('Scissors'));
