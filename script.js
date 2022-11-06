// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%&()*+,^-./:;<=>?[]_`{~}|";
var numbers = "0123456789";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var generatedPassword = [];
  var passwordOptions = "";

  var passwordLength = prompt("Enter the desired length of your new password.  Please Note: Passwords must be between 8-128 characters.");
  if (passwordLength >= 8 && passwordLength <=128) {
    var includeNumbers = confirm("Would you like to include numbers in your password?");
    if (includeNumbers) {
      passwordOptions += numbers;
      generatedPassword.push(numbers[Math.floor(Math.random()* numbers.length)]);
     }
     var includeLowercase = confirm("Would you like to include lowercase letters in your password?");
     if (includeLowercase) {
      passwordOptions += lowercase;
      generatedPassword.push(lowercase[Math.floor(Math.random()* lowercase.length)])
     }
     var includeUppercase = confirm("Would you like to include uppercase letters in your password?");
     if (includeUppercase) {
      passwordOptions += uppercase;
      generatedPassword.push(uppercase[Math.floor(Math.random()* uppercase.length)])
     }
     var includeSpecialchar = confirm("Would you like to include special characters in your password?");
     if (includeSpecialchar) {
      passwordOptions += specialChar;
      generatedPassword.push(specialChar[Math.floor(Math.random()* specialChar.length)])
     }
     if (!passwordOptions) {
      alert("You must select at least one option!");
     }
     while (generatedPassword.length < passwordLength) {
      generatedPassword.push(passwordOptions[Math.floor(Math.random()*passwordOptions.length)]);
     }
    }
  else {
    alert("Password lenth must be betwen 8-128 characters.");
  }

  return generatedPassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
