 let text = "<h1>Winter is coming</h1>";
let myRegex = /<.+?>/; // Change this line
let result = text.match(myRegex);
console.log(result);

// By adding the ? after the +, we tell it to repeat as few times as possible, so the first > it comes across, is where we want to stop the matching.