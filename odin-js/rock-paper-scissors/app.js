const computerChoice = ["rock", "paper", "scissors"];

/* Math.floor = rounds number to nearest integer
Math.random = returns random number between 0 - 1
Math.floor > rounds down > Math.random (0-1) > multiplies to 3 > 
0 = rock , 1 = paper, 2 = scissors */
function getComputerChoice() {
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

const winText = ["You Win! Big Brain", "Humans for the win!", "Nice Play!"];

const loseText = [
  "Computer dominance! Better luck next time!",
  "The machines are taking over!",
  "Computer's got skills!",
];

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    const winMessage = `${getRandomElement(
      winText
    )} ${playerSelection} beats ${computerSelection}!`;
    return winMessage;
  }
  const loseMessage = `${getRandomElement(
    loseText
  )} ${computerSelection} beats your${playerSelection}!`;
  return loseMessage;
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  const playerSelection = "rock";
  playRound(playerSelection);
});
const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  const playerSelection = "paper";
  playRound(playerSelection);
});
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  const playerSelection = "scissors";
  playRound(playerSelection);
});

const roundResult = document.getElementById("roundResult");

function game() {
  let playerScore = 0;
  let computerScore = 0;

  // for (let round = 1; round <= 5; round++) {
  const computerSelection = getComputerChoice();
  // const roundResult = playRound(playerSelection, computerSelection);
  const roundResult = playRound(
    playerSelection,
    computerSelection,
    winText,
    loseText
  );

  // console.log(`Round ${round}: ${roundResult}`);
  roundResult.textContent = `Round ${round}: ${roundResult}`;

  if (
    roundResult.includes("Win") ||
    roundResult.includes("Nice") ||
    roundResult.includes("Humans")
  ) {
    playerScore++;
  } else if (
    roundResult.includes("Lose") ||
    roundResult.includes("Computer") ||
    roundResult.includes("machines")
  ) {
    computerScore++;
  }
}

const scorePlayer = document.getElementById("winner");

// console.log(`Final Score: Player ${playerScore} - Computer ${computerScore}`);
winner.textContent = `Final Score: Player ${playerScore} - Computer ${computerScore}`;
if (playerScore > computerScore) {
  console.log("Player Wins");
} else if (playerScore < computerScore) {
  console.log("Computer Wins");
} else {
  console.log("Draw");
}
// }

game();
