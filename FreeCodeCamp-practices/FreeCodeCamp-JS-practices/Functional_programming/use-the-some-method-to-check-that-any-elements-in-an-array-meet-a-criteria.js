function checkPositive(arr) {
  return arr.some(element => Math.sign(element) === 1);
}
checkPositive([1, 2, 3, -4, 5]);