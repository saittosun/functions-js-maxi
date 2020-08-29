// jshint esversion: 9
const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! we chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getWinner = (cChoice, pChoice) => {
  return cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

function startGame() {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("game is starting");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
}

startGameBtn.addEventListener("click", startGame);
