function chunkArrayInGroups(arr, size) {
  let newArr = [];
    while (size <= arr.length) {
       let chunkyArr = arr.splice(0, size);
     newArr.push(chunkyArr);
    }; 
    if (arr.length > 0 ) {
       newArr.push(arr);
    };
    return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);