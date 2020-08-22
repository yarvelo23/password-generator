// DEFINING USER INPUT VARIABLES
var generateBtn = document.querySelector("#generate");

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
var specialCharactersArray = ["@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];
// array of numbers
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var userChoices;

// calls the button to allow it to active the generatePassword function
generateBtn.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// function that generates the password
function generatePassword() {
    // ask user for input
    passwordLength = parseInt(prompt("Number of characters in password?"));
    // checks if password length meets requirements
    if (!passwordLength) {
        // if requirements met
        alert("please choose your types");
    }
    else if (passwordLength < 8 || passwordLength > 128) {
        passwordLength = parseInt(prompt("Must be between 8 and 128 characters"));
    }
    else {
    // continues to prompt user for character types selection
    confirmNumeric = confirm("Include numbers?");
    confirmUpperCase = confirm("Include upper case letters?");
    confirmLowerCase = confirm("Include lower case letters?");
    confirmSpecialCharacters = confirm("Include special characters?");
    }

    // condition to confirm at least one character type selected
    if (confirmNumeric === false && confirmUpperCase === false && confirmLowerCase === false & confirmSpecialCharacters === false) {
        alert("Must select at least one character type!");
    }
    // if all 4 types selected, user inputs are added to the userChoices variable
    else if (confirmNumeric && confirmUpperCase && confirmLowerCase && confirmSpecialCharacters) {
        
        userChoices = character.concat(numericArray, upperCaseArray, lowerCaseArray, );
    }
    // if 3 types selected, user inputs are added to the userChoices variable
    else if (confirmNumeric && confirmUpperCase && confirmLowerCase) {
        
        userChoices = numericArray.concat(upperCaseArray, lowerCaseArray);
    }
    else if (confirmNumeric && confirmUpperCase && confirmSpecialCharacters) {
        
        userChoices = numericArray.concat(upperCaseArray, specialCharactersArray);
    }
    else if (confirmNumeric && confirmLowerCase && confirmSpecialCharacters) {
       
        userChoices = numeric.concat(lowerCaseArray, specialCharactersArray);
    }
    else if (confirmUpperCase && confirmLowerCase && confirmSpecialCharacters) {
        
        userChoices = upperCaseArray.concat(lowerCaseArray, specialCharactersArray);
    }
    // if 2 types selected, user inputs are added to the userChoices variable
    else if (confirmNumeric && confirmUpperCase) {
        
        userChoices = numericArray.concat(upperCaseArray);
    }
    else if (confirmNumeric && confirmLowerCase) {
        
        userChoices = numericArray.concat(lowerCaseArray);
    }
    else if (confirmNumeric && confirmSpecialCharacters) {
        
        userChoices = numericArray.concat(specialCharactersArray);
    }
    else if (confirmLowerCase && confirmUpperCase) {
       
        userChoices = lowerCaseArray.concat(upperCaseArray);
    }
    else if (confirmLowerCase && confirmSpecialCharacters) {
        
        userChoices = lowerCaseArray.concat(specialCharactersArray);
    }
    else if (confirUpperCase && confirmSpecialCharacters) {
        
        userChoices = upperCaseArray.concat(specialCharactersArray);
    }
    // if only 1 type is selected, user input is added to the userChoices variable
    else if (confirmNumeric) {
        
        userChoices = numericArray;
    }
    else if (confirmUpperCase) {
        
        userChoices = upperCaseArray;
    }
    else if (confirmLowerCase) {
        
        userChoices = lowerCaseArray;
    }
    else if (confirmSpecialCharacters) {
        
        userChoices = specialCharactersArray;
    };
    
    // declaring password variable that will store user choices up to the specified password length
    var password = [];
    
    // for loop to randomly select characters for password generation
    for (var i = 0; i < passwordLength; i++) {
        var selectedCharacterTypes = userChoices[Math.floor(Math.random() * userChoices.length)];
        password.push(selectedCharacterTypes);
    }
    
    // ==== NEED TO FIGURE OUT HOW TO GET THE WRITE FUNCTION TO WORK, THIS IS THE ONLY MISSING COMPONENT ====
    // ======================================================================================================
    // ======================================================================================================

    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}
