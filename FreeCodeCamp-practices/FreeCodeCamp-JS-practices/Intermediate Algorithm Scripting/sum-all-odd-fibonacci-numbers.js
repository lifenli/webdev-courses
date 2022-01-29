function sumFibs(num) {
  let firstFib = 1;
  let secondFib = 1;
  let fibNumArray = [];
  fibNumArray.push(firstFib);
  fibNumArray.push(secondFib);
 for (let i=2; fibNumArray[i-1]<=num; i++) {
   fibNumArray[i] = fibNumArray[i-1] + fibNumArray[i-2];
 }
       let finalSum = 0;
      for(let fibNum of fibNumArray) {
        if (fibNum %2 !== 0 && fibNum <= num) {
           finalSum = finalSum + fibNum;
        }
      }
              return finalSum;
}

sumFibs(10);