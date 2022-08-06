// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*()";

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
      charChoice(charCount);
    } else if (charCount === null) {
      return;
    } else {
      alert("Please choose a number between 8 and 128.");
      characterNumber();
    }
  }
  characterNumber();

  function charChoice(number) {
    // User prompts if they wany uppercase, lowercase, number, and/or special characters
    var upperChoice = confirm(
      "Do you want uppercase letters? Click 'OK' for yes, and 'Cancel' for no."
    );

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
      createPassword(number);
    } else {
      alert("You must select at least one character type. Please try again.");
      characterNumber();
    }
    // Empty array to create new array with requested character types

    function createPassword(number_base) {
      var requestChar = "";
      console.log(number_base);

      if (upperChoice) {
        var requestChar = requestChar + upperCase;
        console.log(requestChar);
      }
      if (lowerChoice) {
        var requestChar = requestChar + lowerCase;
        console.log(requestChar);
      }
      if (numberChoice) {
        var requestChar = requestChar + numbers;
        console.log(requestChar);
      }
      if (specialChoice) {
        var requestChar = requestChar + special;
        console.log(requestChar);
      }

      //Creating an array based on number of characters user selected
      var passwordArray = "";
      //Adding the random generator to select element within the new requested character array
      for (let i = 0; i < number_base; i++) {
        passwordArray =
          passwordArray +
          requestChar[Math.floor(Math.random() * requestChar.length)];
      }
      console.log(passwordArray);
      var passwordText = document.querySelector("#password");
      passwordText.innerHTML = passwordArray;
    }
  }
}
