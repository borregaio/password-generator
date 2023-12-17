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

// Arrays

var generatedPassword = []

// User answers to password questions

var charactersInput;
var lowercaseInput;
var uppercaseInput;
var numericInput;
var specialInput;

// Function to prompt user for password options
function getPasswordOptions() {

  charactersInput = prompt(questions.characters);

  if (charactersInput >= 8 && charactersInput < 128) {
    lowercaseInput = confirm(questions.lowercase);
    uppercaseInput = confirm(questions.uppercase);
    numericInput = confirm(questions.numeric);
    specialInput = confirm(questions.special);

    if (!lowercaseInput && !uppercaseInput && !numericInput && !specialInput) {
      alert("Please, select at least one of the options");
    }

  } else if (!charactersInput) {
    return
  } else {
    alert("Please, enter a number between 8 and 128");
    return
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  generatedPassword = []; // Reset generatedPassword

  // Check each character type and add to generatedPassword if selected
  for (let i = 0; i < charactersInput; i++) {

    if (lowercaseInput) {
      generatedPassword.push(getRandom(lowerCasedCharacters));
    }
    if (uppercaseInput) {
      generatedPassword.push(getRandom(upperCasedCharacters));
    }
    if (numericInput) {
      generatedPassword.push(getRandom(numericCharacters));
    }
    if (specialInput) {
      generatedPassword.push(getRandom(specialCharacters));
    }
  }

  generatedPassword.splice(charactersInput);

  // Fisher-Yates shuffle function
  function shuffleArray(generatedPassword) {
    for (let i = generatedPassword.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap array[i] and array[j]
      [generatedPassword[i], generatedPassword[j]] = [generatedPassword[j], generatedPassword[i]];
    }
  }

  shuffleArray(generatedPassword);
  return generatedPassword

}

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


