# Password Generator Project
This project is designed to generate a random password of a length between 8 and 128 characters, based on at least one type of character of four types presented: lowercase, uppercase, numbers, and special symbols.

## Results
Results of the program can be viewed in the console after responding to the prompts presented.

## Progress
I am pleased that I was able to:
- write pseudo code (below) that sequences a solution to the problem
- create prompts and assign responses to those prompts to create variables holding the responses
- create an array of replies (named included) that I later used to check if the user chose at least one type of character
- successfully test for password length of 8 to 128
- create a function, getRandomLower, to use character codes combined with functions I have documented in comments

## Improvements to Be Made
I need to use the function that gets random lowercase characters. Once successful with lowercase, repeat success with other types using similar code.

I need to figure out how to assemble the results, of the requested length, of the types requested, in a random manner, into a string of characters and display it in the document, or at least display it in the console.

## Pseudocode for JavaScript Password Generator

### Document
User is presented with a document form that has a button.

### Prompts for character types (password criteria)
When user clicks a button to generate a password, then the user is asked which of four types of characters (lowercase, uppercase, numeric, special) they want in the password, one at a time.

Keep track of which types of characters user wants included; (lower, upper, numeric, special).

If user has selected at least one type of character to include in the password, then proceed, otherwise quit.

## Valid Characters by Type
lower are abcdefghijklmnopqrstuvwxyz
upper are ABCDEFGHIJKLMNOPQRSTUVWXYZ
numeric are 0123456789
special are ~`!@#$%^&*()-_=+[]{}\|;:'",<.>/ and ?.

### Prompt for password length
User is asked for length of password that is desired. It must at least 8 characters and no longer than 128 characters to be valid.

If user inputs a valid number (an integer greater than 7 and less than 129), continue, otherwise quit. 

### Proof of concept
Choosing among lowercase letters only, randomly pick characters from that character set to create a password that is the length requested by the user.

### Program randomly chooses characters among requested types
Then, choosing only among the desired character (types), the program randomly chooses characters for inclusion in the password, one at a time, until the desired length password is reached.

### Password is displayed
Once the desired password length is reached, it is either displayed in an alert, or is written to the page (screen). 

### Author
Thomas van Deusen