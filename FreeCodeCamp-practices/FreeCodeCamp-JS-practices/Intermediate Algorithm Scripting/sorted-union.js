function uniteUnique(arr1,...arr) {
  // two arguments, first and the rest despite the lenghth
  const fullArr = [...arr];
  //spreading the rest of the arrays
  const secondArr = [];
  const finalArr = secondArr.concat(arr1);
  fullArr.map( restArr => {
    restArr.forEach(digit => {
     if ( finalArr.indexOf(digit) === -1 ) {
       // to check whether each digit exists in the finalArr, if not, append it to the list
       return finalArr.push(digit);
     }
    })
  })
  return finalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);