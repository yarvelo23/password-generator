// DEFINING USER INPUT VARIABLES

// making these variables global so that they can be called outside of each function
var passwordLength;
var confirmNumeric;
var confirmUpperCase;
var confirmLowerCase;
var confirmSpecialCharacters;


// DEFINING ARRAYS OF POSSIBLE PASSWORD CHARACTERS

// array of uppercase letters
var upperCaseArray = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",] 
// array of lowercase letters
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
// array of special characters
var specialCharactersArray = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];
// array of numbers
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var userChoices;
  
// declaring variable that will activate the generate button
var generateBtn = document.querySelector("#generate");

// function that generates the password
// function that generates the password
function generatePassword() {
    // ask user for input
    passwordLength = parseInt(prompt("Number of characters in password?"));
    // checks if password length meets requirements
    if ((passwordLength < 8) || (passwordLength > 128)) {
        // if requirements not met, alerts this
        alert("Password must be between 8 and 128 characters!");
        // stops further execution of the function if above condition is true
        return;
    }
    else {
        alert("Please choose your character types!");
    }
    // continues to prompt user for character types selection
    confirmNumeric = confirm("Include numbers?");
    confirmUpperCase = confirm("Include upper case letters?");
    confirmLowerCase = confirm("Include lower case letters?");
    confirmSpecialCharacters = confirm("Include special characters?");
    
    // condition to confirm at least one character type selected
    if (confirmNumeric === false && confirmUpperCase === false && confirmLowerCase === false & confirmSpecialCharacters === false) {
        alert("Must select at least one character type!");
    }
    // if all 4 types selected, user inputs are added to the userChoices variable
    else if (confirmNumeric && confirmUpperCase && confirmLowerCase && confirmSpecialCharacters) {
        alert("You have selected 4 character types.");
        // ======= HOW TO REPLACE CONCAT WITH PUSH =======
        userChoices = character.concat(numericArray, upperCaseArray, lowerCaseArray, );
    }
    // if 3 types selected, user inputs are added to the userChoices variable
    else if (confirmNumeric && confirmUpperCase && confirmLowerCase) {
        alert("You have selected numeric, uppercase and lowercase.");
        userChoices = character.concat(numericArray, upperCaseArray, lowerCaseArray);
    }
    else if (confirmNumeric && confirmUpperCase && confirmSpecialCharacters) {
        alert("You have selected numeric, uppercase and special characters.");
        userChoices = character.concat(numericArray, upperCaseArray, specialCharactersArray);
    }
    else if (confirmNumeric && confirmLowerCase && confirmSpecialCharacters) {
        alert("You have selected numeric, lowercase and special characters.");
        userChoices = character.concat(numericArray, lowerCaseArray, specialCharactersArray);
    }
    else if (confirmUpperCase && confirmLowerCase && confirmSpecialCharacters) {
        alert("You have selected uppercase, lowercase and special characters.");
        userChoices = character.concat(upperCaseArray, lowerCaseArray, specialCharactersArray);
    }
    // if 2 types selected, user inputs are added to the userChoices variable
    else if (confirmNumeric && confirmUpperCase) {
        alert("You have selected numeric and uppercase.");
        userChoices = character.concat(numericArray, upperCaseArray);
    }
    else if (confirmNumeric && confirmLowerCase) {
        alert("You have selected numeric and lowercase.");
        userChoices = character.concat(numericArray, lowerCaseArray);
    }
    else if (confirmNumeric && confirmSpecialCharacters) {
        alert("You have selected numeric and special characters.");
        userChoices = character.concat(numericArray, specialCharactersArray);
    }
    else if (confirmLowerCase && confirmUpperCase) {
        alert("You have selected lowercase and uppercase.");
        userChoices = character.concat(lowerCaseArray, upperCaseArray);
    }
    else if (confirmLowerCase && confirmSpecialCharacters) {
        alert("You have selected lowercase and special characters.");
        userChoices = character.concat(lowerCaseArray, specialCharactersArray);
    }
    else if (confirUpperCase && confirmSpecialCharacters) {
        alert("You have selected uppercase and special characters.");
        userChoices = character.concat(upperCaseArray, specialCharactersArray);
    }
    // if only 1 type is selected, user input is added to the userChoices variable
    else if (confirmNumeric) {
        alert("You have selected numeric.");
        userChoices = numericArray;
    }
    else if (confirmUpperCase) {
        alert("You have selected uppercase.");
        userChoices = upperCaseArray;
    }
    else if (confirmLowerCase) {
        alert("You have selected lowercase.");
        userChoices = lowerCaseArray;
    }
    else if (confirmSpecialCharacters) {
        alert("You have selected special characters.");
        userChoices = specialCharactersArray;
    }
    
    // declaring password variable that will store user choices up to the specified password length
    var password = [];
    
    // for loop to randomly select characters for password generation
    for (var i = 0; i < passwordLength; i++) {
        var selectedCharacterTypes = userChoices[Math.floor(Math.random() * userChoices.length)];
        password.push(selectedCharacterTypes);
    }
}

// function that writes password to text area in html
function writePassword() {
  
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
generateBtn.addEventListener("click", writePassword);