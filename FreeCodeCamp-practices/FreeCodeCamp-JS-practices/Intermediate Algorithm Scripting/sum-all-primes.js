function sumPrimes(num) {
   let primeArray = [] ;
  for (let i=2; i<=num; i++) {
   if ( primeArray.every((prime) => i % prime !== 0) ) 
        primeArray.push(i);
  }
     console.log(primeArray);
      return primeArray.reduce((sum, currentValue) => sum + currentValue, 0)
}


sumPrimes(100);