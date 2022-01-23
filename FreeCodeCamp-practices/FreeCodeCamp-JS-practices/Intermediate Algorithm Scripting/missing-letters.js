// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
function fearNotLetter(str) {
  let fullLetter = "abcdefghijklmnopqrstuvwxyz";
  for (let i=0; i<fullLetter.length; i++) {
  let index = fullLetter.indexOf(str[i]);
  let nextIndex = fullLetter.indexOf(str[i+1]);
  if (nextIndex - index > 1) {
    let fullIndex = fullLetter.indexOf(str[i+1]) - 1;
    console.log(fullLetter[fullIndex]);
    return (fullLetter[fullIndex]);
  };
  };
}

fearNotLetter("abcdefghjklmno");