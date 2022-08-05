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
  special: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
};

function generatePassword() {
  var charCount = prompt(
    "How many characters do you want? Choose between 8-128."
  );

  if (charCount < 8 || charCount > 128 || charCount === "") {
    alert("Please choose a number between 8 and 128.");
  } else if (charCount >= 8 && charCount <= 128) {
    upperChoice();
  } else if (charCount === null) {
    window.close();
  } else {
    alert("Please choose a number between 8 and 128.");
  }

  function upperChoice() {
    var upperChoice = confirm(
      "Do you want uppercase letters? Click 'OK' for yes, and 'Cancel' for no."
    );
  }

  if (upperChoice) {
    var yesUpperCase = true;
  } else {
    var noUpperCase = false;
  }

  var lowerChoice = confirm(
    "Do you want lowercase letters? Click 'OK' for yes, and 'Cancel' for no."
  );

  if (lowerChoice) {
    var yesLowerCase = true;
  } else {
    var noLowerCase = false;
  }

  var numberChoice = confirm(
    "Do you want any numbers? Click 'OK' for yes, and 'Cancel' for no."
  );
  
  if (numberChoice) {
    var yesNumber = true;
  } else {
    var noNumber = false;
  }

  var specialChoice = confirm(
    "Do you want special characters? Click 'OK' for yes, and 'Cancel' for no."
  );

  if (specialChoice) {
    var yesSpecial = true;
  } else {
    var noSpecial = false;
  }

  // generate password using inputs
  // return grnerated password
}
