# Password Generator

## Description 

The Password Generator is an application designed to create secure and customized passwords tailored to the specific user's preferences. With a simple click of a button, users can effortlessly generate a password with their desired length and character types.

![Screenshot](./password-generator.png)


## Deployment

The deployed version can be accessed [here](https://borregaio.github.io/password-generator/).


## Key Features

1. **Password Criteria Prompts:** Present a series of prompts to the user for defining password criteria.

2. **Password Length:** Allow the user to specify the length of the password. The password length should be at least 8 characters but no more than 128.

3. **Character Types:** Provide options for the user to choose from different character types. Include options for lowercase letters, uppercase letters, numeric characters, and special characters ($@%&*, etc.).

4. **Input Validation:** Validate user inputs to ensure they meet the specified criteria.

5. **Password Generation:** Generate a random password based on the selected criteria.

6. **Shuffle Password**: Each time a password is generated, the order of characters is randomised, creating a truly random and unpredictable password.

7. **Display Password:** Display the generated password.


## Installation

### Clone the repository
```console
git clone https://github.com/borregaio/password-generator.git
```

### Navigate to the project directory
```console
cd password-generator
```

### Open with VSCode
```console
code .
```

## Steps Followed

1. **Password Criteria Prompts:**
   - Present a series of prompts to the user for defining password criteria.

      ```javascript
      var questions = {
      characters: "How many characters should your password have?",
      lowercase: "Would you like your password to have lowercase characters?",
      uppercase: "Would you like your password to have uppercase characters?",
      numeric: "Would you like your password to have numeric characters?",
      special: "Would you like your password to have special characters?"
      }
      ```

2. **Password Length:**
   - Allow the user to specify the length of the password. The password length should be at least 8 characters but no more than 128.

      ```javascript
      function getPasswordOptions() {

         charactersInput = prompt(questions.characters);

         if (charactersInput >= 8 && charactersInput <= 128) {

      ```

3. **Character Types:** 
   - Provide options for the user to choose from different character types. Include options for lowercase letters, uppercase letters, numeric characters, and special characters ($@%&*, etc.).

      ```javascript
            lowercaseInput = confirm(questions.lowercase);
            uppercaseInput = confirm(questions.uppercase);
            numericInput = confirm(questions.numeric);
            specialInput = confirm(questions.special);
      ```


4. **Input Validation:**
   - Validate user inputs to ensure they meet the specified criteria.

      ```javascript
            if (!lowercaseInput && !uppercaseInput && !numericInput && !specialInput) {
               alert("Please, select at least one of the options");
            }

         } else if (!charactersInput) {
            return
         } else {
            alert("Please, enter a number between 8 and 128");
            charactersInput = 0;
            return
         }
      }
      ```

5. **Password Generation:**
   - Generate a random password based on the selected criteria.

      ```javascript
      // Function for getting a random element from an array
      function getRandom(arr) {
         return arr[Math.floor(Math.random() * arr.length)];
      }

      // Function to generate password with user input
      function generatePassword() {
      
         generatedPassword = [];

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

         // Shorten the password according to charctersInput value
         generatedPassword.splice(charactersInput);
      ```

6. **Shuffle Password**:
   - Each time a password is generated, the order of characters is randomised, creating a truly random and unpredictable password.

      ```javascript
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
      ```

7. **Display Password:**
   - Display the generated password.

      ```javascript
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
      ```

8. **Testing:**
   - Verified that the website maintains its visual consistency after the refactoring.


## Credits

### Fisher-Yates Shuffle Algorithm

The Fisher-Yates shuffle algorithm, used for randomising the order of elements in an array, is credited to Donald E. Knuth and Richard S. Durstenfeld. The algorithm is commonly known as the Knuth shuffle. You can find this algorithm inside the generatePassword function.

- **Algorithm Authors:**
  - Donald E. Knuth
  - Richard S. Durstenfeld

This project incorporates a modified version of the Fisher-Yates shuffle algorithm to provide randomisation in certain functionalities.

The original algorithm is described in the book "The Art of Computer Programming" by Donald E. Knuth, Volume 2 (Seminumerical Algorithms).

