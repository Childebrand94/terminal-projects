const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", "\\", ";", ":", "'", '"', ",", ".", "<", ">", "/", "?", "~", "`"];
const alphabeticalCharacters = [...Array(26)].map((_, i) => String.fromCharCode(97 + i));
const numbers = [...Array(10)].map((_, i) => i.toString());

console.log(numbers);
