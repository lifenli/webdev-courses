// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
   let regex = /([a-z])([A-Z])/g;
      // Capture groups for repeated substrings in parenthese/(\w+)/
   // Replace low-upper case to low-space-uppercase

   str = str.replace(regex, "$1 $2");  
   let newRegex = /(\s+)|(\_+)/g;
   return str.replace(newRegex, "-").toLowerCase();
}

spinalCase('thisIsSpinalTap');
// spinalCase("AllThe-small Things") should return the string all-the-small-things.
// spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.
// 