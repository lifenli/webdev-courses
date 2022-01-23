
// Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). 
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  let arr = [...s]; // Spread through the variable without changing the original variabl
  arr.forEach(element => newArray.push(callback(element))); // go through each element and execute the "callback" function and push it to the newArray array.
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});