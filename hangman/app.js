// import { hangmanPics, wordBank } from "./setUp.js";
const { wordBank, hangmanPics, asciiArt } = require("./setUp.js");
const prompt = require("prompt-sync")();

//Functions
const randomWord = () => {
  const index = Math.floor(Math.random() * wordBank.length);
  return wordBank[index].split("");
};
// let guessedArray = (word) => new Array(word.length).fill("_");

const checkExit = (word) => (word === quit ? (gameActive = false) : (gameActive = true));

console.log(asciiArt);

let gameActive = true;
const word = randomWord();
console.log(word);
let attempts = 0;

while (gameActive) {
  let guess = prompt("Guess a letter: ");
  checkExit(guess);
  if (word.includes(guess)) {
    let guessedArray = word.filter((letter) => (letter === guess ? letter : "_"));
    console.log(guessedArray);
    console.log(hangmanPics[attempts]);
  } else {
    attempts += 1;
    console.log(hangmanPics[attempts]);
    if (attempts === 6) {
      console.log("You Lose");
      gameActive = false;
    }
  }
}
