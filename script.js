// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  var passlength = window.prompt("Enter the length of the password between 8 - 128");
   // If user pressed Cancel, immediately end function
   if (!passlength || passlength <8 || passlength > 128) {
    window.alert("Password lenght is not correct");
    return;
  }

  var isLowercase = window.prompt("If you want your password include lowercase, then type yes");

  var isUppercase = window.prompt("If you want your password include uppercase, then type yes");

  var isNumeric = window.prompt("If you want your password include numeric, then type yes");

  var isSpecial = window.prompt("If you want your password include special characters, then type yes");

  var lowerCases = 'abcdefghijklmnopqrstuvwxyz'

  var upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  var numerics = '0123456789'

  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  var password = ''

  if (isLowercase === 'yes') {
    // Get random index from array of options
  var index = Math.floor(Math.random() * lowerCases.length);
    password += lowerCases[index];
  }

  if (isUppercase === 'yes') {
    // Get random index from array of options
  var index = Math.floor(Math.random() * upperCases.length);
    password += upperCases[index];
  }

  if (isNumeric === 'yes') {
    // Get random index from array of options
  var index = Math.floor(Math.random() * numerics.length);
    password += numerics[index];
  }

  if (isSpecial === 'yes') {
    // Get random index from array of options
  var index = Math.floor(Math.random() * specialCharacters.length);
    password += specialCharacters[index];
  }

  while (password.length < passlength) {
    // Get random index from array of options
    var index = Math.floor(Math.random() * specialCharacters.length);
    password += specialCharacters[index];
  }
  

  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
