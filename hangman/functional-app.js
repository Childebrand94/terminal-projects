const { wordBank, hangmanPics, asciiArt } = require("./setUp.js");
const prompt = require("prompt-sync")();

//Functions
const randomWord = () => {
  const index = Math.floor(Math.random() * wordBank.length);
  return wordBank[index];
};

const intro = () => console.log(asciiArt);

const instantWin = (guess = "", history, targetWord) => {
  if (guess === targetWord) {
    return true;
  } else {
    return targetWord.split("").every((letter) => history.includes(letter));
  }
};

const checkLoss = (attempts) => attempts >= 6;

const showBlankWord = (targetWord, history) => {
  const blankWord = targetWord.split("").map((letter) => {
    if (history.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  console.log(blankWord.join(" "));
};

const showHangman = (attempts) => {
  console.log(hangmanPics[attempts]);
};

const calculateAttempts = (targetWord, history) => {
  return history.reduce((acc, x) => {
    if (!targetWord.includes(x)) {
      return (acc += 1);
    } else {
      return acc;
    }
  }, 0);
};

const checkExit = (guess) => (guess === "quit" ? true : false);

const historyWin = (targetWord, history) => targetWord.split("").every((letter) => history.includes(letter));

// The game
const gameRound = (targetWord, history) => {
  // this will end the game if the user has guess all letter individually
  if (historyWin(targetWord, history)) {
    console.log("Congratulation you won");
    return;
  }
  // displays the word as underscores unless the user has guessed that letter
  showBlankWord(targetWord, history);

  // for testing to show the hidden word
  // console.log(targetWord);

  const guess = prompt("Guess a letter: ");

  // this will end the game if user types in the whole word at once
  if (instantWin(guess, history, targetWord)) {
    console.log("Congratulation you won");
    return;
  }
  // showing the history of the user's pervious guesses
  console.log(`Your guessed letter: ${history}`);

  /* calculate the amount of attempts the user has had by counting the 
  letter in history that are not in target word  */
  const attempts = calculateAttempts(targetWord, history);

  showHangman(attempts);
  // if the users attempts are equal or grater than 6 the game ends
  if (checkLoss(attempts)) {
    console.log("You Lose");
    return;
  }
  // ends the recursion loop if the user types quit
  if (checkExit(guess)) {
    return;
  }

  gameRound(targetWord, [...history, guess]);
};

intro();
gameRound(randomWord(), []);
