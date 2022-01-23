// In JavaScript, a function always has access to the context in which it was created. This is called closure.
// Making "weight" variable private.

function Bird() {
  let weight = 15;
  this.getWeight = function() {
    return weight;
  };
  
}