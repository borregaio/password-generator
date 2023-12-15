// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Questions

var questions = {
  characters: "How many characters should your password have?",

  lowercase: "Would you like your password to have lowercase characters?",
  lowercaseYes: "How many lowercase characters should it have?",

  uppercase: "Would you like your password to have uppercase characters?",
  uppercaseYes: "How many uppercase characters should it have?",

  numeric: "Would you like your password to have numeric characters?",
  numericYes: "How many lowercase characters should it have?",

  special: "Would you like your password to have special characters?",
  specialYes: "How many special characters should it have?"
}

// Function to prompt user for password options
function getPasswordOptions() {
  var charactersAnswer = prompt(questions.characters);
  if (charactersAnswer >= 1 && charactersAnswer < 128) {
    var lowercaseAnswer = prompt(questions.lowercase);
  } else {
    alert("Please, select a number between 1 and 128");
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  arr.forEach()
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


getPasswordOptions();