// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function start() {
    //console.log("we're here!");
    //var password = generatePassword();
    //var passwordText = document.querySelector("#password");
    //passwordText.value = password;
 //}

// ====== DEFINING ARRAYS ======

  // array of uppercase letters
  var upperCaseArray = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",] 
  // array of lowercase letters
  var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  // array of special characters
  var specialCharactersArray = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];
  // array of numbers
  var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  

  // ====== DEFINING FUNCTIONS ====== 
  
  // get user options and store in vars
  function getUserOptions() {
    // prompts user for password length and stores in variable
    var passwordLength = prompt("Number of characters in password?");
    // checks to ensure that the password length is between 8 and 128... 
    // incorporates parseInt to convert user's string input to a number
    if ((passwordLength < parseInt("8")) || (passwordLength > parseInt("128"))) {
        alert("must have password between 8 and 128 characters");
        // using return to stop further execution of the function if password length does not meet requirements
        return;
    }
    var confirmLowerCase = confirm("Include lowercase characters?");
    var confirmUpperCase = confirm("Include uppercase characters?");
    var confirmNumeric = confirm("Include numeric values?");
    var confirmSpecialCharacters = confirm("Include special characters?");

    // checking that user has selected yes for at least one of the 4 types of characters above
    if ((confirmLowerCase) || (confirmUpperCase) || (confirmNumeric) || (confirmSpecialCharacters)) {
        // if at least one is true, do nothing, hence we leave below blank
    }
    else {
        alert("Must select yes for at least one character type!");
        // using return to stop further execution of the function if no character types confirmed
        return;
    }
  }

    // generate password

    // alert password;
    // return password;
}




// Write password to the #password input

function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//when we click the button above, we are calling the write password function