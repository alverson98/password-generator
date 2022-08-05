// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var characterOptions = {
  upperCase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")],
  lowerCase: ["abcdefghijklmnopqrstuvwxyz".split("")],
  numbers: ["0123456789".split("")],
  special: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
};

function generatePassword() {
  // Selecting number of characters
  function characterNumber() {
    var charCount = prompt(
      "How many characters do you want? Choose between 8-128."
    );
    // Forcing user to choose 8 through 128
    if (charCount < 8 || charCount > 128 || charCount === "") {
      alert("Please choose a number between 8 and 128.");
      characterNumber();
    } else if (charCount >= 8 && charCount <= 128) {
      upperChoice();
      return true;
    } else if (charCount === null) {
      window.close();
    } else {
      alert("Please choose a number between 8 and 128.");
      characterNumber();
    }
  }
  characterNumber();

  function upperChoice() {
    // User prompts if they wany uppercase, lowercase, number, and/or special characters
    var upperChoice = confirm(
      "Do you want uppercase letters? Click 'OK' for yes, and 'Cancel' for no."
    );
  }

  var lowerChoice = confirm(
    "Do you want lowercase letters? Click 'OK' for yes, and 'Cancel' for no."
  );

  var numberChoice = confirm(
    "Do you want any numbers? Click 'OK' for yes, and 'Cancel' for no."
  );

  var specialChoice = confirm(
    "Do you want special characters? Click 'OK' for yes, and 'Cancel' for no."
  );

  // Forcing user to choose at least one character type
  if (
    upperChoice === true ||
    lowerChoice === true ||
    numberChoice === true ||
    specialChoice === true
  ) {
    createPassword();
  } else {
    alert("You must select at least one character type. Please try again.");
    characterNumber();
  }

  // Empty array to create new array with requested character types
  var requestChar = [];

  function createPassword() {
    if (upperChoice) {
      requestChar = requestChar.concat(characterOptions.upperCase);
    }
    if (lowerChoice) {
      requestChar = requestChar.concat(characterOptions.lowerCase);
    }
    if (numberChoice) {
      requestChar = requestChar.concat(characterOptions.numbers);
    }
    if (specialChoice) {
      requestChar = requestChar.concat(characterOptions.special);
    }
    console.log(requestChar);

    //Creating an array based on number of characters user selected

    //Adding the random generator to select element within the new requested character array
    for (i = 0; i < charCount; i++) {
      var passwordArray = passwordArray.push(
        requestChar[Math.floor(Math.random() * requestChar.length)]
      );
    }
  }
}
