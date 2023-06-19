const prompt = require("prompt-sync")();

const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", "\\", ";", ":", "'", '"', ",", ".", "<", ">", "/", "?", "~", "`"];
const alphabeticalCharacters = [...Array(26)].map((_, i) => String.fromCharCode(97 + i));
const numbers = [...Array(10)].map((_, i) => i.toString());
const passwordCharacters = [specialCharacters, alphabeticalCharacters, numbers];
const randomIndex = (max) => Math.floor(Math.random() * max);

const length = prompt("How many characters is the password? : ");

const passwordGen = (length) => {
  const password = [...Array(length)].map((_) => {
    let listChoice = passwordCharacters[randomIndex(passwordCharacters.length)];
    console.log(listChoice);
    return listChoice[randomIndex(listChoice.length)];
  });
  return password.join("");
};

console.log(passwordGen(length));
