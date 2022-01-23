var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    let newArray = []; 
  newArray = arr.concat(); // not to mutate the original array
  let finalArray = newArray.sort((a, b) => a -b );
  return finalArray;
  }
nonMutatingSort(globalArray);