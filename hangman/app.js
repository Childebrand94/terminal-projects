const { wordBank, hangmanPics, asciiArt } = require("./setUp.js");
const prompt = require("prompt-sync")();

//Functions
const randomWord = () => {
  const index = Math.floor(Math.random() * wordBank.length);
  return wordBank[index].split("");
};

const checkExit = (int) => (int === "quit" ? (gameActive = false) : (gameActive = true));

const checkLoss = (attempts) => {
  if (attempts === 6) {
    console.log("To many attempts better luck next time");
    gameActive = false;
  }
};
const checkWin = (wordPlaceHolder, guess, word) => {
  if (wordPlaceHolder.join("") === word.join("") || guess === word.join("")) {
    console.log(`${word.join("")} is correct`);
    gameActive = false;
  }
};

// Intro art
console.log(asciiArt);

//Game variables
let gameActive = true;
const word = randomWord();
const wordPlaceHolder = new Array(word.length).fill("_");
const history = [];
let attempts = 0;

// Uncomment for testing to show the word
console.log(word.join(""));

// main game loop
while (gameActive) {
  console.log(wordPlaceHolder.join(" "));
  let guess = prompt("Guess a letter: ");
  //Check if player wants to quit
  checkExit(guess);
  checkWin(wordPlaceHolder, guess, word);
  //Show player all of their past guess's
  history.push(guess);
  console.log(`You have guessed ${history}`);

  if (word.includes(guess)) {
    word.forEach((letter, index) => {
      if (letter === guess) {
        wordPlaceHolder[index] = letter;
      }
    });
    // Show all correct guessed letter in word
    console.log(wordPlaceHolder.join(" "));
    // Check for win
    // Show current amount of wrong attempts through hangman asci art
    console.log(hangmanPics[attempts]);
  } else {
    // If guess is wrong showing the next asci art and checking for loss
    attempts += 1;
    console.log(hangmanPics[attempts]);
    checkLoss(attempts);
  }
}
