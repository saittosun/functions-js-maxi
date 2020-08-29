// jshint esversion: 9
const startGameBtn = document.getElementById("start-game-btn");

function startGame() {
  console.log("game is starting");
}

// const person = {
//   name: "sait",
//   greet: function greet() {
//     console.log("hello there");
//   },
// };

// console.log(person.name);
// person.greet();

// I'm just passing the name here and therefore the typeof operator will have a look at the thing behind the name, so it will have a look at that thing which is stored in start game, which is our function
console.log(typeof startGame);// function
console.dir(startGame);
//  a function in the end whilst having its own type is an object. It's basically also an object, a special type of object if you will with special pre-configured properties but still an object and the implication of that is for example that it's typically stored in the heap as you learned and basically anything that applies to objects, for example that they are reference types also applies to functions. Often that might not really matter to you, it's still important to be aware of that,

startGameBtn.addEventListener("click", startGame);
