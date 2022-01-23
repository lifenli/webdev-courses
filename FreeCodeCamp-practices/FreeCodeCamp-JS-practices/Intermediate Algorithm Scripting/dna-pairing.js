// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.


function pairElement(str) {
  let arr = [...str];
  // console.log(arr);
 let lastArr = arr.map(letter => {
     let eachArr = [];
     let secondLetter = "";
     switch (letter) {
       case "G":
       secondLetter= "C";
       break;
       case "C":
       secondLetter= "G";
       break;
       case "A":
       secondLetter= "T";
       break;
       case "T":
       secondLetter= "A";
       break;
     }
       eachArr.push(letter);
       let newArr = eachArr.concat(secondLetter);
      //  console.log(newArr);
       return newArr;
  })
  console.log(lastArr);
  return lastArr;
}

pairElement("ATCGA");