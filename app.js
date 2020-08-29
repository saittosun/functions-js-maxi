// jshint esversion: 9
const startGameBtn = document.getElementById("start-game-btn");

function startGame() {
  console.log("game is starting");
}

const person = {
  name: "sait",
  greet: function greet() {
    console.log("hello there");
  },
};

console.log(person.name);
person.greet();

startGameBtn.addEventListener("click", startGame);
