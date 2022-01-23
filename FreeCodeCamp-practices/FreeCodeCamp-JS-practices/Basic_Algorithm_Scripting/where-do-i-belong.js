
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) 
// once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
  arr.sort();
  // console.log(newArr);
  let sortedArr = [];
  for (let arrInd of arr) {
    if (arrInd <= num) {
      // console.log(arrInd);
      sortedArr.push(arrInd);
    };
  };
  // console.log(sortedArr);
  sortedArr.push(num);
  console.log(sortedArr);
  return (sortedArr.indexOf(num));
}

getIndexToIns([2, 20, 10], 19);