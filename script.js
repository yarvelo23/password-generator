// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  //vars definition
  var length;
  var lowercase = false;
  var uppercase = false;
  var numeric = false;
  var specialCharacters = false;

  // array of uppercase letters
  var upperCaseArray = ["A", "B"] 
  // array of lowercase letters
  var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  // array of special characters
  var specialCharactersArray = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];
  // array of numbers
  var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  //prompt for length
  
  // if length is NOT greater than 8 and less than 128

    //alert (must have password between 8 and 128 characters)

  //confirm: lowercase 
  //confirm: uppercase 
  //confirm: numeric 
  //confirm: special characters
  
  //
  //
  
  // check if at least one is chosen by the user (true)

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