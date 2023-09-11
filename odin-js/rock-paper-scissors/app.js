console.log("Rock,Paper,Scissors VS. Computer");

const computerChoice = ["rock", "paper", "scissors"];

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
    return "Player";
  }
  return "Computer";
}

// `You Win! Big Brain ${playerSelection} beats Smooth Brain ${computerSelection}`
// `Beaten by a computer? Noob! ${computerSelection} beats ${playerSelection}`

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt(
      "Choose between Rock, Paper or Scissors"
    ).toLowerCase();
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);

    console.log(`Round ${round}: ${roundResult}`);

    if (roundResult === "Player") {
      playerScore++;
    } else if (roundResult === "Computer") {
      computerScore++;
    }
  }
  console.log("--------");
  console.log(`Final Score: Player ${playerScore} - Computer ${computerScore}`);
}

game();
