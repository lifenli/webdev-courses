let ohStr = "Ohhh no";
let ohRegex = /oh{3,6} no/i; // Change this line
let result = ohStr.match(ohRegex);
console.log(result);