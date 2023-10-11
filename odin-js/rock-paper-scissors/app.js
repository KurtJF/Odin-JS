const computerChoice = ["rock", "paper", "scissors"];
const winTexts = ["You Win! Big Brain", "Humans for the win!", "Nice Play!"];
const loseTexts = [
  "Computer dominance!",
  "The machines are taking over!",
  "Computer's got skills!",
];

const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("comp-image");
const buttons = document.querySelectorAll(".btn");

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getComputerChoice = () => {
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
};

// Update image based on player choice and comp choice
const updatePlayerChoiceImage = (choice) => {
  const imagePath = `./images/${choice}.png`;
  playerImage.src = imagePath;
};

const updateComputerChoiceImage = (choice) => {
  const imagePath = `./images/${choice}.png`;
  computerImage.src = imagePath;
};

// Rock, paper, scissors game logic
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return `${getRandomElement(
      winTexts
    )} ${playerSelection} beats ${computerSelection}!`;
  }
  return `${getRandomElement(
    loseTexts
  )} ${computerSelection} beats ${playerSelection}!`;
}

const updateScores = () => {
  document.getElementById(
    "player-score"
  ).textContent = `Player Score: ${playerScore}`;
  document.getElementById(
    "comp-score"
  ).textContent = `Computer Score: ${computerScore}`;
};

const updateRoundInfo = (round, result) => {
  document.getElementById("round-num").textContent = `Round ${round}`;
  document.getElementById("round-result").textContent = result;
};

function game() {
  // let round = 1;
  let gameEnded = false;

  const playAgain = () => {
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    gameEnded = false;

    updateScores();
    updatePlayerChoiceImage("question-mark");
    updateComputerChoiceImage("question-mark");
    updateRoundInfo(
      "First to score 5 points wins!",
      "Do your best to beat the computer!"
    );

    buttons.forEach((button) => {
      button.addEventListener("click", handleClick);
      button.disabled = false;
    });

    closeEndModal();
  };

  const playRoundCheckWinner = (playerSelection) => {
    if (gameEnded) {
      return;
    }

    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    updatePlayerChoiceImage(playerSelection);
    updateComputerChoiceImage(computerSelection);
    updateRoundInfo(roundsPlayed + 1, roundResult);

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

    updateScores();

    roundsPlayed++;

    if (playerScore >= 5 || computerScore >= 5) {
      gameEnded = true;
      if (playerScore > computerScore) {
        openEndModal("You Win!");
      } else if (playerScore < computerScore) {
        openEndModal("Computer Wins!");
      } else {
        openEndModal("Draw!");
      }

      // Disable buttons after the game ends
      buttons.forEach((button) => {
        button.removeEventListener("click", handleClick);
        button.disabled = true;
      });
    }
  };

  const handleClick = (event) => {
    const playerSelection = event.currentTarget.id.substring(4);
    playRoundCheckWinner(playerSelection);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  restartBtn.addEventListener("click", playAgain);
}

const endModal = document.getElementById("end-modal");
const restartBtn = document.getElementById("restart-btn");
const overlay = document.getElementById("overlay");

overlay.addEventListener("click", closeEndModal);

function openEndModal(winner) {
  document.getElementById("round-winner").textContent = winner;
  endModal.classList.add("active");
  overlay.classList.add("active");
}

function closeEndModal() {
  endModal.classList.remove("active");
  overlay.classList.remove("active");
}

game();
