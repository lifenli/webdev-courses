const squareList = arr => {
  let newArr = arr.filter(digit => Number.isInteger(digit)&& digit>0);
  console.log(newArr);
  let squaredArr = newArr.map(integ => integ*integ);
  return squaredArr;
};

const squaredIntegers = squareList([-3, 4.8, 5, 12, -3.2]);
console.log(squaredIntegers);
 