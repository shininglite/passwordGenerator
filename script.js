// .Assignment Code
var generateBtn = document.querySelector("#generate");

//log value of generateBtn variable to console
console.log(generateBtn);

//create variables that indicate which types of characters user wants included
var lowercase = prompt("Include lowercase letters in the password? Cancel or OK");
var uppercase = prompt("Include uppercase letters in the password? Cancel or OK");
var numbers = prompt("Include numeric characters in the password? Cancel or OK");
var special = prompt("Include special characters in the password? Cancel or OK");

//log variables to console
console.log(lowercase);
console.log(uppercase);
console.log(numbers);
console.log(special);

//create array of replies
var included = [lowercase, uppercase, numbers, special];

//log included array to console
console.log(included);

if (included[0] === null && included[1] === null && included[2] === null && included[3] === null) {
  alert("Try again. You need to choose one or more character types for your password.");
}

var passwordHowLong = prompt("Your password must be at least 8 characters long, but not more than 128. What length password would you like?")
console.log(passwordHowLong);
if ( Number(passwordHowLong) <= 7 || (Number(passwordHowLong)) >128 ) {
  alert("Please type a number between 8 and 128 for password length.");
}



// .Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// .Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
