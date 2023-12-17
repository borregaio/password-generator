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
  uppercase: "Would you like your password to have uppercase characters?",
  numeric: "Would you like your password to have numeric characters?",
  special: "Would you like your password to have special characters?"
}

// User answers to password questions

var charactersInput;
var lowercaseInput;
var uppercaseInput;
var numericInput;
var specialInput;

// New arrays generated from user input

var userLowercaseArray = []
var userUppercaseArray = []
var userNumericArray = []
var userSpecialArray = []

// Function to prompt user for password options
function getPasswordOptions() {
  charactersInput = prompt(questions.characters);
  if (charactersInput >= 8 && charactersInput < 128) {
    lowercaseInput = confirm(questions.lowercase);
  } else if (!charactersInput) {
    alert("Please, select a number between 8 and 128");
    return
  } else {
    alert("Please, select a number between 8 and 128");
    return
  }
  uppercaseInput = confirm(questions.uppercase);
  numericInput = confirm(questions.numeric);
  specialInput = confirm(questions.special);
}

// Function for getting a random element from an array
function getRandom(arr) {

  if (lowercaseInput) {
    for (let i = 0; i < charactersInput; i++) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      const randomElement = arr[randomIndex];
      userLowercaseArray.push(randomElement);
      console.log(userLowercaseArray);
    }
}
}

// console.log(upperCasedCharacters.length);
// console.log(lowerCasedCharacters.length);
// console.log(specialCharacters.length);
// console.log(numericCharacters.length);

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
  getPasswordOptions();
  getRandom(lowerCasedCharacters);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


