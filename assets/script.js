// Assignment code here
let generateBtn = document.querySelector("#generate");
console.log(generateBtn)

//This is the reference for the Array

var lowerCaseCharacter ="abcdefghijklmnopqrstuvwxyz";

var upperCaseCharacter ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numericCharacter = "0123456789";

var specialCharacter ="!@#$%^&*()_-+={[}]|:;<>.?/";

let everyCharacter = "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
