// Assignment code here
//const passwordChar = "0123456789!@#$%^&*_-+=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";//
let lowerArray = "abcdefghijklmnopqrstuvwxyz"
let upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numericArray = "0123456789"
let specialArray = "!@#$%^&* _ -+="
let symbols = specialArray.split("")
let smallChar = lowerArray.split("")
let bigChar = upperArray.split("")
let numChar = numericArray.split("")
//let specialArray = specialArray.split()

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var passwordLength = prompt("set a password length");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("password must be atleast 8 but no more than 128 characters");
  }
  var confirmLowerCase = confirm("include lowercase");
  var confirmUpperCase = confirm("include uppercase");
  var confirmNumericCase = confirm("include numeric");
  var confirmSpecialCase = confirm("special charcater");
  if (confirmLowerCase === false && confirmUpperCase === false && confirmNumericCase === false && confirmSpecialCase === false) {
    window.alert("password must include atleast one uppercase, one lowercase, one numeric and one special character");
  }

  let emptyArray = []
  if (confirmLowerCase == true) {
    //add lowercase
    emptyArray = emptyArray.concat(smallChar)
  }

  if (confirmUpperCase == true) { //add uppercase
    emptyArray = emptyArray.concat(bigChar)
  }

  if (confirmNumericCase == true) {  //add numericcase
    emptyArray = emptyArray.concat(numChar)
  }

  if (confirmSpecialCase == true) { //add specialcase
    emptyArray = emptyArray.concat(symbols)
  }
  //add checks to stop duplicate characters
  var newPassword = ""
  for (let i = 0; i < passwordLength; i++) {
    newPassword += emptyArray[Math.floor(Math.random() * emptyArray.length)];
  }
  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
