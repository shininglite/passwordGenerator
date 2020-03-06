// .Assignment Code
var generateBtn = document.querySelector("#generate");

//log value of generateBtn variable to console
console.log(generateBtn);

//create variables that indicate which types of characters user wants included
var yesLowercase = prompt("Include lowercase letters in the password? Cancel or OK");
var yesUppercase = prompt("Include uppercase letters in the password? Cancel or OK");
var yesNumbers = prompt("Include numeric characters in the password? Cancel or OK");
var yesSpecial = prompt("Include special characters in the password? Cancel or OK");

//log variables to console
console.log(yesLowercase);
console.log(yesUppercase);
console.log(yesNumbers);
console.log(yesSpecial);

//create array of replies
var included = [yesLowercase, yesUppercase, yesNumbers, yesSpecial];
  
//log included array to console
console.log(included);

// Display prompt and assign response to var passwordHowLong
var passwordHowLong = prompt("Your password must be at least 8 characters long, but not more than 128. What length password would you like?")
console.log(passwordHowLong);

// check user input to see if password length is valid
if ( Number(passwordHowLong) <= 7 || (Number(passwordHowLong)) >128 ) {
  alert("Please type a number between 8 and 128 for password length.");
}

// check to see that at least one of the four character types is desired
if (included[0] === null && included[1] === null && included[2] === null && included[3] === null) {
  alert("Try again. You need to choose one or more character types for your password.");

}

// set yesLowercase to true for testing regardless of user choice
//yesLowercase = true;

//proof of concept when (at least) lowercase letters are requested
// if(yesLowercase) {}


// .Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// create a function to randomly return a character between 
// lowercase a and lowercase z (inclusive).

//Math.random creates a random number between 0 and 1
//(Math.floor(Math.random()) * 26)) multiplies the 
//random number by 26 and rounds down to nearest integer.
//string.fromCharCode (references the browser character table
//where "a" is code 97). The rounded-down number between 0 and 26 is
//multiplied by 26 and added to 97 to return a value from a to z
//according to the browser character table.

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

//display in the console the random lowercase letter 
console.log(getRandomLower);

for (var i = 0; i < passwordHowLong.length; i++) {
  getRandomLower();
  console.log(i); 
}

// .Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
