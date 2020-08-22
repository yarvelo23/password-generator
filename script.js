// DEFINING USER INPUT VARIABLES

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
function generatePassword() {
    // ask user for input
    passwordLength = parseInt(prompt("Number of characters in password?"));
    if ((passwordLength < 8) || (passwordLength > 128)) {
        alert("Password must be between 8 and 128 characters!");
    }
    else {
        alert("Please choose your character types");
    }
}

// function that writes password to text area in html
function writePassword() {
  
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
generateBtn.addEventListener("click", writePassword);