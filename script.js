// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var passwordlength = prompt("how long do you want your password to be")
  if (passwordlength < 8 || passwordlength > 128) {

    alert("minimum length must be 8 and max must be 128")
    generatePassword()
    return
  }
  var wantsuppercase = confirm("do you want uppercase characters")
  var wantslowercase = confirm("do you want lowercase characters")
  var numbers = confirm("do you want numbers")
  var specialcharacters = confirm("do you want specialcharacters")
  if (wantsuppercase === false && wantslowercase === false && numbers === false && specialcharacters === false) {

    alert("you must choose one option")
    generatePassword()
    return
  }
  var uppercaseletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowercaseletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var numberchars = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  var specialchars = ["?", "@", "$", "!", "#", "%", "+"]
  var options = []
  if (wantsuppercase) {
    options = options.concat(uppercaseletters)
  }
  if (wantslowercase) {
    options = options.concat(lowercaseletters)
  }
  if (numbers) {
    options = options.concat(numberchars)
  }
  if (specialcharacters) {
    options = options.concat(specialchars)
  }
  var password = ""
  for (var i = 0; i < passwordlength; i++) {
    password += options[Math.floor(Math.random() * options.length)]
  }
  return password
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
