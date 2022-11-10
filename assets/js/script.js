var generateBtn = document.querySelector("#generate");

function getLength() {
  tempPasswordLength = prompt("Enter the desired length of your new password.  Please Note: Passwords must be between 8 and 128 characters.");
  if (tempPasswordLength < 8 || tempPasswordLength > 128) {
    alert("Please select a valid password length between 8 and 128 characters.");
    var tryAgain = confirm ("Do you want try another password length?");
    if (tryAgain === false) {
      return null
    } else {
    return getLength();
    }
  }
  return tempPasswordLength;
}

function getUserInput() {
  console.log("Now getting user input");
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChar = "!@#$%&()*+,^-.:;<=>?_`{~}|";
  var numbers = "0123456789";
  var passwordOptions = []; 
  var includeNumbers = confirm("Would you like to include numbers in your password?");
  if (includeNumbers) {
    passwordOptions.push(numbers);
    console.log(passwordOptions);
   }
   var includeLowercase = confirm("Would you like to include lowercase letters in your password?");
   if (includeLowercase) {
    passwordOptions.push(lowercase);    
    console.log(passwordOptions);
   }
   var includeUppercase = confirm("Would you like to include uppercase letters in your password?");
   if (includeUppercase) {
    passwordOptions.push(uppercase);
    console.log(passwordOptions);
   }
   var includeSpecialchar = confirm("Would you like to include special characters in your password?");
   if (includeSpecialchar) {
    passwordOptions.push(specialChar);
    console.log(passwordOptions);
   }
  if (!passwordOptions) {
    alert("To generate a password you must select at least one option!");
    if (!confirm("Would you like to try again")) {
      return null;
    } else {
      return getUserInput();
    }
  }
  return passwordOptions;
}

function generatePassword() {
  var finalPassword = "";
  var passwordLength = getLength();
  if (passwordLength === null) {
    return;
  }
  var passwordBaseArray = getUserInput();
  console.log("Selected characters from getUserInput in passwordBase ", passwordBaseArray);
  if (passwordBaseArray === null) {
    return;
  }
  for (let i = 0; i < passwordBaseArray.length; i++) {
    var selectedCharacters = passwordBaseArray[i];
    finalPassword += selectedCharacters[Math.floor(Math.random()*selectedCharacters.length)];
  }
  console.log(finalPassword);
  var passwordBaseString = passwordBaseArray.join("");
  console.log(passwordLength);
  while (finalPassword.length < passwordLength) {
    finalPassword += passwordBaseString[Math.floor(Math.random()*passwordBaseString.length)]
  }
  return finalPassword;
}
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
