// Return true if the string in the first element of the array contains all of the letters 
// of the string in the second element of the array.


function mutation(arr) {
  let firstStr = arr[0].toLowerCase();
  let secondStr = arr[1].toLowerCase();
  let secondArr = [...secondStr];
  for (let eachAlph of secondArr) {
    if (firstStr.indexOf(eachAlph) === -1) {
      return false;
    };
  };
  return true;
}


mutation(["hello", "neo"]);