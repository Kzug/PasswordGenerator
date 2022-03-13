// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//////////////////////////////////////////////////////////

function generatePassword() {
passwordPrompt();
// passwordValid()
if 
(userInputPasswordLength < 8 || userInputPasswordLength > 128)
 {
  alert('Password length must be between 8 and 128')
  return null;
}
lowercasePrompt();
uppercasePrompt();
numbersPrompt();
symbolsPrompt();
buildPassword(); 
console.log(userPassword);
return userPassword.join("");
}

function buildPassword() {
  for (var i = 0; i <= userInputPasswordLength - 4; i++) { 
    var randomIndex = Math.floor(Math.random()*wholePassword.length); 
    userPassword.push(wholePassword[randomIndex]);
  }
}

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!","@", "#", "$","%","^","&","*"];
var userArray=[];
var userPassword=[];
var wholePassword=[];

//declaring variables in global scope so they can be used in multiple functions
var userInputPasswordLength;
var chooseLowercase;
var chooseUppercase;
var chooseNumbers;
var chooseSymbols;

//Getting user password length
function passwordPrompt() {
  userInputPasswordLength = parseInt(window.prompt("Enter length of password:"));
  // If user pressed Cancel, immediately end function
  if (!userInputPasswordLength) {
    return;
  }

//   if 
//   (userInputPasswordLength < 8 || userInputPasswordLength > 128)
//    {
//     alert('Password length must be between 8 and 128')
//     return null;
// }
}

// //making sure user inputs a number
// function passwordValid() {
// if (Number.isNaN(userInputPasswordLength));
// else {
//   alert('Password length must be provided as a number');
//   return null;
//   }

// //making sure user puts in correct length of password
// function passwordLengthValid() {
// if (!(userInputPasswordLength >= 8) && !(userInputPasswordLength <= 128));
//   else {
//     alert('Password length must be between 8 and 128')
//     return null;
// }


// Ask user if they want to use lowercase letters
function lowercasePrompt() {
  chooseLowercase = window.confirm("Would you like to include lowercase characters?");
  if (chooseLowercase){
    randomLowercase = Math.floor(Math.random()*lowercase.length); //get a random number
    var addLowLetter = lowercase[randomLowercase]; // gets a random lowercase letter and puts it in a variable called addLowLetter
    userPassword = userPassword.concat(addLowLetter); //adds random lowercase letter to userPassword
    wholePassword = wholePassword.concat(lowercase);
  }
  // If user pressed Cancel, immediately end function
  if (!chooseLowercase){
    return;
  }
}

// Ask user if they want to use uppercase letters
function uppercasePrompt() {
  chooseUppercase = window.confirm("Would you like to include uppercase characters?");
  if (chooseUppercase){
    randomUppercase = Math.floor(Math.random()*uppercase.length); //gets a number 
    var addUppLetter = uppercase[randomUppercase]; //puts the random uppercase letter in a variable called addUppLetter
    userPassword = userPassword.concat(addUppLetter); //adds random uppercase letter to userPassword 
    wholePassword = wholePassword.concat(uppercase);
  }
// If user pressed Cancel, immediately end function
  if (!chooseUppercase) {
    return;
  }
}

// Ask user if they want to use symbols
function numbersPrompt() {
  chooseNumbers = window.confirm("Would you like to include numbers?");
  if (chooseNumbers){
    randomNumber = Math.floor(Math.random()*numbers.length); //gets a number
    var addNumber = numbers[randomNumber];//gets a random number
    userPassword = userPassword.concat(addNumber); //adds random number to password
    wholePassword = wholePassword.concat(numbers);
  }
// If user pressed Cancel, immediately end function
  if (!chooseNumbers) {
    return;
  }
}

// Ask user if they want to use symbols
function symbolsPrompt() {
  chooseSymbols = window.confirm("Would you like to include symbols?");
  if (chooseSymbols){
    randomSymbol = Math.floor(Math.random()*symbols.length); //gets a number
    var addSymbol = symbols[randomSymbol]; // gets a random symbol
    userPassword = userPassword.concat(addSymbol);//adds random symbol to password
    wholePassword = wholePassword.concat(symbols);
    console.log(userPassword);
  }
// If user pressed Cancel, immediately end function
  if (!chooseSymbols) {
    return;
  }
}

