// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
  let newArr = [];
  let number = arr[0];
   newArr.push(number);   
  if (arr[0] <= arr[1]) {
      while (number < arr[1]) {
        number ++;
       newArr.push(number);
      } 
      } else if (arr[0] > arr[1]) {
        while (number > arr[1]) {
          number --;
       newArr.push(number);
        };
      };
  console.log(newArr);
  return newArr.reduce((a,b) => a+b);
}

sumAll([8, 3]);
