// Assignment code here
special = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "`", "{", "|", "}", "~", "(", ")", "_"];
numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var promtLowerCase;
var promtUpperCase;
var promtNumeric;
var promtSpecial;
var promtLength;
var picks;

function generatePassword() {
  var length = window.prompt("Choose a password length between 8 and 128");

  if (!length) {
      alert("Choose a correct length between 8 and 128")
      return generatePassword();
    }

    else if (length < 8 || length > 128) {
      alert("The password length must be between 8 and 128 characters")
      return generatePassword();
    }

    else if (isNaN(length)) {
      alert ("Please enter a number!")
      return generatePassword();
    }

    else {
    promtLowerCase = confirm("Will this password use lowercase letters?");
    promtUpperCase = confirm("Will this password use Uowercase letters?");
    promtNumeric = confirm("Will this password use numbers?");
    promtSpecial = confirm("Will this password contain special letters?");
    };
   
    if (!promtLowerCase && !promtUpperCase && !promtNumeric && !promtSpecial) {
      picks = alert("Choose atleast one option!");
      return generatePassword();
    }

    else if (promtLowerCase && promtUpperCase && promtNumeric && promtSpecial) {
        picks = alphabetLower.concat(alphabetUpper, numeric, special);
    }

    else if (promtLowerCase && promtUpperCase && promtNumeric) {
      picks = alphabetLower.concat(alphabetUpper, numeric);
    }

    else if (promtLowerCase && promtUpperCase) {
      picks = alphabetLower.concat(alphabetUpper);
    }

    else if (promtLowerCase && promtSpecial) {
      picks = alphabetLower.concat(special);
    }

    else if (promtLowerCase && promtNumeric) {
      picks = alphabetLower.concat(numeric);
    }

    else if (promtLowerCase) {
      picks = alphabetLower;
    }

    else if (promtUpperCase && promtNumeric && promtSpecial) {
      picks = alphabetUpper.concat(numeric, special);
    }

    else if (promtUpperCase && promtNumeric) {
      picks = alphabetUpper.concat(numeric);
    }

    else if (promtUpperCase && promtSpecial) {
      picks = alphabetUpper.concat(special);
    }

    else if (promtUpperCase) {
      picks = alphabetUpper;
    }

    else if (promtNumeric && promtSpecial) {
      picks = numeric.concat(special);
    }

    else if (promtNumeric) {
      picks = numeric;
    }

    else if (promtSpecial) {
      picks = special;
    };

    



      
    
  return(picks);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
