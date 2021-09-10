// Assignment code here
let generateBtn = document.querySelector("#generate");
console.log(generateBtn)

//This is the reference for the Array

var lowerCaseCharacter ="abcdefghijklmnopqrstuvwxyz";

var upperCaseCharacter ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numericCharacter = "0123456789";

var specialCharacter ="!@#$%^&*()_-+={[}]|:;<>.?/";

let everyCharacter = "";

// Those are the questions asked to have the Randomized password
function generatePassword() {

  let passwordLength = prompt(
    "Please be mindfull that the password must be at least 8 characters and no more than 128 characters, How long do you want It to be?"
  );
  if (passwordLength < 8 || passwordLength > 128 || isNaN(parseInt(passwordLength))) {
    alert("You haven't entered the right lenght that you want your password to be, Please enter a number between 8 and 128.");
  } else {
    let askLowerCase = confirm("Would you like to have Lower Case characters on your password ?");
    if(askLowerCase){
      everyCharacter += lowerCaseCharacter
    };
    let askUpperCase = confirm("Would you like to have Upper Case characters on your password ?");
    if (askUpperCase){
      everyCharacter += upperCaseCharacter
    };
    let askNumeric = confirm("Would you like to have Numbers on your password ?");
    if (askNumeric){
      everyCharacter += numericCharacter 
    };
    let askSpecialCharacters = confirm("Would you like to have Special Characters on your password?");
    if (askSpecialCharacters){
      everyCharacter += specialCharacter
    };

    // This is to make sure to guide the customer properly to get a close to efficient password.
    if (
        askLowerCase === false &&
        askUpperCase === false &&
        askNumeric  === false &&
        askSpecialCharacters === false 
        
      ) {
        alert("Please select at least one character type.");
        generatePassword();
      }
    }
    let password = "";
    for (let i=0; i<passwordLength; i++){
      password += everyCharacter.charAt(Math.floor(Math.random() * everyCharacter.length))
    }
    return password
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


let copyBtn = document.querySelector("#copy");
console.log(copyBtn)

  var passwordDisplayed;
  

function copyPassword() {
  var copyText = document.getElementById("password");
  var text = copyText.textContent;
  if (text.length > 0) {
      copyText.select();
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copyPassword");
      alert("Your password has been copied to clipboard.");
  }
}

copyBtn.addEventListener("click", copyPassword);