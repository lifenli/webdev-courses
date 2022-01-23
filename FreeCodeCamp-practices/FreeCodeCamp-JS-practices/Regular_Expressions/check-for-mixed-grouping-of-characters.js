let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin).* Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// It checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.