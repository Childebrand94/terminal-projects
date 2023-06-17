const wordBank = ["hangman", "javascript", "programming", "terminal", "computer", "code", "developer", "game", "challenge", "learning", "algorithm", "function", "array", "variable", "loop", "condition", "string", "object", "boolean"];

const hangmanPics = [
  `
  +---+
  |   |
      |
      |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`,
];

const asciiArt =
  "  _                                             \n" +
  " | |                                            \n" +
  " | |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  \n" +
  " | '_ \\ / _` | '_ \\ / _` | '_ ` _ \\ / _` | '_ \\ \n" +
  " | | | | (_| | | | | (_| | | | | | | (_| | | | |\n" +
  " |_| |_|__,_|_| |_|__, |_| |_| |_|__,_|_||_| |_|\n" +
  "                     __/ |                       \n" +
  "                   |___/                        ";

module.exports = {
  wordBank,
  hangmanPics,
  asciiArt,
};
