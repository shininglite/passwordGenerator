# Password Generator Project
This project is designed to generate a random password of a length between 8 and 128 characters, based on at least one type of character of four types presented: lowercase, uppercase, numbers, and special symbols.

## Results
Results of the program can be viewed in the console after responding to the prompts presented, and in the main window of the document.

## Improvements to Be Made
Styling via an external style sheet, or a framework such as Bootstrap could make the visual end result more appealing or interesting

## Pseudocode for JavaScript Password Generator

### Document
User is presented with a document form that has a button.

### Prompts for character types (password criteria)
When user clicks a button to generate a password, then the user is asked which of four types of characters (lowercase, uppercase, numeric, special) they want in the password, one at a time.

Keep track of which types of characters user wants included; (lower, upper, numeric, special).

If user has selected at least one type of character to include in the password, then proceed, otherwise quit.

### Valid Characters by Type
lower are abcdefghijklmnopqrstuvwxyz
upper are ABCDEFGHIJKLMNOPQRSTUVWXYZ
numeric are 0123456789
special are !@#$%^.

### Prompt for password length
User is asked for length of password that is desired. It must at least 8 characters and no longer than 128 characters to be valid.

If user inputs a valid number (an integer greater than 7 and less than 129), continue, otherwise quit. 

### Program randomly chooses characters among requested types
Then, choosing only among the desired character (types), the program randomly adds valid characters until the desired length password is reached.

### Password is displayed
Once the desired password length is reached, it is either displayed in an alert, or is written to the page (screen). 

### Author
Thomas van Deusen

