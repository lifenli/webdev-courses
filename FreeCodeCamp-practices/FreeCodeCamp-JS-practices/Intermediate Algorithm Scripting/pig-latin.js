function translatePigLatin(str) {
  let regex = /[a,e,i,o,u]+/;
  let vowelIndex = str.search(regex);
   // get the letter by doing a "search" on the string=get the index;
  // if it begins with vowel
  let conString = str.substring(0,vowelIndex);
  // if it begins with consonant
  let vowelString = str.substring(vowelIndex,str.length);
  if (vowelIndex === 0) {
    return str.padEnd(str.length+3, "way");
}
 else {
 return vowelString.padEnd(str.length+2, conString+"ay");
};
}
translatePigLatin("glove");