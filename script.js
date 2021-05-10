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
  var specialCharList = "!@#$%^&*()-_=+`,.~?<>?][}{/\\\"".split(""); // need to use escape characters and add \ and "

  var passwordString = "";
  
    

  //*prevent error with if statement ensuring that lengthPrompt is an integer between 8 and 128 (code directly below)
  // if(lengthPrompt == 1 && lengthPrompt >= 8 && lengthPrompt <= 128){}
    //for loop that takes random indexes from each specified character type array (more from lowerAlphabet, upperAlphabet, and numberList than specialCharPrompt)
     
    while(passwordString.length < lengthPrompt){

        if(lowercasePrompt && passwordString.length < lengthPrompt ){passwordString += lowerAlphabet[Math.floor(Math.random() * lowerAlphabet.length)]}
        if (uppercasePrompt && passwordString.length < lengthPrompt){passwordString += upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)]}
        if(numericPrompt && passwordString.length < lengthPrompt){passwordString += numberList[Math.floor(Math.random() * numberList.length)]} 
        if(specialCharPrompt && passwordString.length < lengthPrompt){passwordString += specialCharList[Math.floor(Math.random() * specialCharList.length)]}


    }

      // load a new password 
        


      // need to set a length check for the password after while loop iterates OR a for loop that transfers an appropriate length into a new array 
// after the appropriate characters are compiled, we should split the string into an array to shuffle its characters
    if(passwordString.length < 8){
      return "Insufficient password length specified! Please retry.";
    }else{
       return passwordString;
    }
   
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //* result of function is assigned to password variable
  var passwordText = document.querySelector("#password"); //* passwordText variable is assigned to the #password textarea element which displays
  passwordText.value = password;
  
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
