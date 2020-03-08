//global vars for password generator
var passwordLength;
var approvedCharacters;

function generatePassword() {
    //creating and returning password
    getPasswordLength();
    setOptions();
    
    var password = "";

    for (let i = 0; i < passwordLength; i++) {
        password += approvedCharacters[Math.floor(Math.random() * approvedCharacters.length)];
    }
    //display generated password in console
    console.log(password);
    //display generated password in document 
    document.getElementById('passwordDisplay').innerHTML = password;
}

function getPasswordLength() {
    passwordLength = prompt("Please enter a number between 8 and 128");
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password is too long or too short, please try again");
        getPasswordLength();
    } else {
        console.log(passwordLength);
    }
}

function setOptions() {
    //set options

    approvedCharacters = "";
    if (confirm("Would you like to include lowercase?")) {
        approvedCharacters += "qwertyuiopasdfghjklzxcvbn";
    }

    if (confirm("Would you like to include uppercase?")) {
        approvedCharacters += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }

    if (confirm("Would you like to include numbers?")) {
        approvedCharacters += "0123456789";
    }

    if (confirm("Would you like to include any of these !@#$%^ special characters?")) {
        approvedCharacters += "!@#$%^";
    }

    //if the user did not pick any approved characters, alert, then call same function
    if (!approvedCharacters) {
        alert("Please choose at least one category of characters.");
        //introduction to recursion;
        setOptions();
    } else {
        console.log(approvedCharacters);
    }
    
}