
// Compare two arrays and return a new array with any items only found in one of the two given arrays, 
// but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  var newArr = [];
  function findIndex(firstArr, secondArr) {
    firstArr.forEach((element) => {
      let elementIndex = secondArr.indexOf(element);
      if (elementIndex === -1) {
        console.log(element);
        newArr.push(element);
      };
    });
  };
  findIndex(arr1, arr2);
  findIndex(arr2, arr1);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);