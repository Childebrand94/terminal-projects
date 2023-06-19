const prompt = require("prompt-sync")();

// Lists of characters
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", "\\", ";", ":", "'", '"', ",", ".", "<", ">", "/", "?", "~", "`"];
const alphabeticalCharacters = [...Array(26)].map((_, i) => String.fromCharCode(97 + i));
const upperAlphabeticalCharacters = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));
const numbers = [...Array(10)].map((_, i) => i.toString());
const randomIndex = (limit) => Math.floor(Math.random() * limit);

// User input
const n = prompt("How many characters is the password? : ");
console.log(n);

// Main function
const passwordGen = (length) => {
  let password = [...Array(parseInt(length))].map((_) => {
    const randomNumber = randomIndex(10);
    if (randomNumber >= 8) {
      return alphabeticalCharacters[randomIndex(26)];
    } else if (randomNumber >= 6 && randomNumber <= 8) {
      return upperAlphabeticalCharacters[randomIndex(26)];
    } else if (randomNumber > 2 && randomNumber < 6) {
      return numbers[randomIndex(10)];
    } else {
      return specialCharacters[randomIndex(specialCharacters.length)];
    }
  });
  return password.join("");
};
console.log();
console.log(passwordGen(n));
console.log();
