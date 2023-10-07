const computerChoice = ["rock", "paper", "scissors"];
const winText = ["You Win! Big Brain", "Humans for the win!", "Nice Play!"];
const loseText = [
  "Computer dominance! Better luck next time!",
  "The machines are taking over!",
  "Computer's got skills!",
];

const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("comp-image");
const buttons = document.querySelectorAll(".btn");

// Rock, Paper, Scissors Selection //

const updatePlayerChoiceImage = (choice) => {
  const imagePath = `./images/${choice}.png`;
  playerImage.src = imagePath;
};

const updateComputerChoiceImage = (choice) => {
  const imagePath = `./images/${choice}.png`;
  computerImage.src = imagePath;
};

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

/* Math.floor = rounds number to nearest integer
Math.random = returns random number between 0 - 1
Math.floor > rounds down > Math.random (0-1) > multiplies to 3 > 
0 = rock , 1 = paper, 2 = scissors */
const getComputerChoice = () => {
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
};

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     const playerSelection = event.currentTarget.id.substring(4);
//     const computerSelection = getComputerChoice();

//     console.log("Player Selection:", playerSelection);
//     console.log("Computer Selection:", computerSelection);

//     updatePlayerChoiceImage(playerSelection);
//     updateComputerChoiceImage(computerSelection);

//     playRound(playerSelection, computerSelection);
//   });
// });

// const rock = document.querySelector("#btnRock");
// rock.addEventListener("click", () => {
//   const playerSelection = "rock";
//   playRound(playerSelection);
// });
// const paper = document.querySelector("#btnPaper");
// paper.addEventListener("click", () => {
//   const playerSelection = "paper";
//   playRound(playerSelection);
// });
// const scissors = document.querySelector("#btnScissors");
// scissors.addEventListener("click", () => {
//   const playerSelection = "scissors";
//   playRound(playerSelection);
// });

// End of Selection //

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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  const scorePlayer = document.getElementById("player-score");
  scorePlayer.textContent = `Player Score ${playerScore}`;
  const scoreComp = document.getElementById("comp-score");
  scoreComp.textContent = `Computer Score ${computerScore}`;

  const roundNum = document.getElementById("round-num");
  const roundWinner = document.getElementById("round-result");
  const winner = document.getElementById("round-winner");

  for (let round = 1; round <= 5; round++) {
    let roundResult;

    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const playerSelection = event.currentTarget.id.substring(4);
        const computerSelection = getComputerChoice();
        roundResult = playRound(
          playerSelection,
          computerSelection,
          winText,
          loseText
        );
        // console.log("Player Selection:", playerSelection);
        // console.log("Computer Selection:", computerSelection);

        updatePlayerChoiceImage(playerSelection);
        updateComputerChoiceImage(computerSelection);
      });
    });

    // Update UI for current round

    // console.log(`Round ${round}: ${roundResult}`);
    roundNum.textContent = `Round ${round}`;
    roundWinner.textContent = `${roundResult}`;

    // Update scores based on the result of the round
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

  // console.log(`Final Score: Player ${playerScore} - Computer ${computerScore}`);

  if (playerScore > computerScore) {
    console.log("Player Wins");
    winner.textContent = "Player Wins";
  } else if (playerScore < computerScore) {
    console.log("Computer Wins");
    winner.textContent = "Computer Wins";
  } else {
    console.log("Draw");
    winner.textContent = "Draw";
  }
}

game();
