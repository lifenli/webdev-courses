let sampleWord = "astronaut";
let pwRegex = /(?=\D{3,})(?=\w*\d\d)/; // Change this line
let result = pwRegex.test(sampleWord);

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.

// should have at least 3 non-digits characters (5 characters long - 2 of which are digits)
// at least two consecutive digits along with zero or more alpha-number characters.