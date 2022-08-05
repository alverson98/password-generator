console.log(characters.upperCase);
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

var characters = {
  upperCase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")],
  lowerCase: ["abcdefghijklmnopqrstuvwxyz".split("")],
  special: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
};


function generatePassword() {
  // prompt user for length
  //prompt user to confirm char choices
  // generate password using inputs
  // return grnerated password
}
