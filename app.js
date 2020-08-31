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
    return;
  }
  return selection;
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
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
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  // const winner = getWinner(computerChoice, playerChoice);
  let message = `You picked ${
    playerChoice || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice} therefore you`;
  if (winner === RESULT_DRAW) {
    message = message + " had a draw";
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + " won";
  } else {
    message = message + " lost";
  }
  alert(message);
  gameIsRunning = false;
}

startGameBtn.addEventListener("click", startGame);

// not related to game
const combine = (resultHandler, operation, ...numbers) => {
  const numberValidate = (number) => {
    // simply check if number is not a number and if that's the case, replace it with zero and otherwise keep it
    return isNaN(number) ? 0 : number;
  };
  //(a,b,...numbers) olabilir ama (...numbers, a, b) olmaz
  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += numberValidate(num);
    } else {
      sum -= numberValidate(num);
    }
  }
  resultHandler(sum);
};

const showResult = (messageText, result) => {
  alert(messageText + " " + result);
};

// const subtractUp = function (resultHandler, ...numbers) {
//   let sum = 0;
//   // it's built into Javascript, you can use it inside of functions but only inside of functions that use the function keyword and it gives you an array-like object, not a true array but array-like with all the arguments this function got. So before the rest operator was introduced which happened with ES6, this was the way of building a function like this one, so this was then the automatically merged array.
//   for (const num of numbers) {
//     // don't use that
//     sum -= num;
//   }
//   resultHandler(sum);
// };

// bind as a method on your function object and you do execute this and what bind will do is it will create a new function, a new reference at a function which it returns to you which will be preconfigured regarding the arguments it receives and that's the interesting part. So with bind, you can create a function which is not immediately executed, what would be the case if you manually call it like this but instead, which is prepared for a future execution, where certain values for certain parameters which you already know at this point of time are already set. bind takes at least two arguments,

combine(
  showResult.bind(this, "the result after adding all number is: "),
  "ADD",
  1,
  5,
  10,
  -3,
  6,
  10
);
combine(
  showResult.bind(this, "the result after adding all number is: "),
  "ADD",
  1,
  5,
  10,
  -3,
  6,
  10,
  25,
  88
);

combine(
  showResult.bind(this, "the result after subtracting all number is: "),
  "SUBTRACT",
  1,
  5,
  10,
  20
); // arrow functions da calismadi!!!

// assignment 4
const sayHello = (name, phrase = "hi") => console.log(phrase + " " + name);

function checkInput(callback, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    callback();
  }
}

checkInput(
  () => {
    console.log("all not empty"); // eger asagidaki stringlerden biri empty olursa console da bir sey goremeyecegiz
  },
  "hello",
  "12",
  "ayla",
  "esat"
);
