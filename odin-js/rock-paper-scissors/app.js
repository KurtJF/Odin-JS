const computerChoice = ["Rock", "Paper", "Scissors"];

/* Math.floor = rounds number to nearest integer
Math.random = returns random number between 0 - 1
Math.floor > rounds down > Math.random (0-1) > multiplies to 3 > 
0 = rock , 1 = paper, 2 = scissors */
function getComputerChoice() {
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "Player won!";
  }
  return "Computer won!";
}

// function checkWinner(playerSelection, computerSelection) {}

const playerSelection = prompt(
  "Choose between Rock, Paper and Scissors"
).toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
