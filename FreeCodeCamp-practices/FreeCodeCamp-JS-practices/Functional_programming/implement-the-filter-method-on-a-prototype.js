// Write your own Array.prototype.myFilter(), 
// which should behave exactly like Array.prototype.filter().

// The global variable

var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {

  var newArray = [];
  let newArr = [...s];
   newArr.forEach((element, index) => {
  if (callback(element)) { //when the callback returns true
      let eachEle = newArr[index]; // get the indexed value of the element
      newArray.push(eachEle);
     };
     });
  return newArray;
  };

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});