// Assignment code here
function generatePassword(){
    //prompts need to be sent when this button is clicked, they will each instruct the boundaries of the password 
  //*password boundary variables 
  var lengthPrompt = prompt("type a desired password length between 8 and 128 characters");
  var lowercasePrompt = confirm("Incude lowercase characters?");
  var uppercasePrompt = confirm("Include uppercase characters?");
  var numericPrompt = confirm("Include numbers?");
  var specialCharPrompt = confirm("Include special characters?");
  
  //* establish arrays containing those specific types of characters exclusively 
  var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numberList = "0123456789".split("");
  var specialCharList = "!@#$%^&*()-_=+`,.~?<>?][}{/".split(""); 

  var passwordString = "";
  
    

  //*prevent error with if statement ensuring that lengthPrompt is an integer between 8 and 128 (code directly below)
  // if(lengthPrompt == 1 && lengthPrompt >= 8 && lengthPrompt <= 128){}
    //for loop that takes random indexes from each specified character type array (more from lowerAlphabet, upperAlphabet, and numberList than specialCharPrompt)
     
    while(passwordString.length < lengthPrompt){

        if(lowercasePrompt){passwordString += lowerAlphabet[Math.floor(Math.random() * lowerAlphabet.length)]}
        if (uppercasePrompt){passwordString += upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)]}
        if(numericPrompt){passwordString += numberList[Math.floor(Math.random() * numberList.length)]} 
        if(specialCharPrompt){passwordString += specialCharList[Math.floor(Math.random() * specialCharList.length)]}
    
      }
  
// after the appropriate characters are compiled, we should split the string into an array to shuffle its characters

    return passwordString;
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //* result of function is assigned to password variable
  var passwordText = document.querySelector("#password"); //* passwordText variable is assigned to the #password textarea element which displayszz
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
