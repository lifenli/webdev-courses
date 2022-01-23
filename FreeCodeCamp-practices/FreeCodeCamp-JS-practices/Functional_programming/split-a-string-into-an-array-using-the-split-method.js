function splitify(str) {
   let separator = /[" ", \-, \,, .]/
   // seperator list includes (" ", ",", "-", ".")
   let newStr = str.split(separator);
   console.log(newStr);
   return newStr;
}
splitify("Hello World,I-am code");