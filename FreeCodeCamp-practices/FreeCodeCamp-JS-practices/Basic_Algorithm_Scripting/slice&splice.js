// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    let splicedArr = arr2.slice(0, n);
    let leftArr = arr2.slice(n, arr2.length);
    let newArr = [...arr1];
    newArr.unshift(...splicedArr);
    newArr.push(...leftArr);
    return (newArr);
}

frankenSplice([1, 2, 3], [4, 5], 1)