// Your regex should not match the string "Free Code Camp"
// Your regex should match the string FreecodeCamp/FreeCodeCamp/freeCodeCamp/FreeCOdeCamp...
// Your regex should not match the string FCC

let myString = "freeCodeCamp";
let fccRegex = /f+[a-z]+p/i; // Change this line
let result = fccRegex.test(myString);

