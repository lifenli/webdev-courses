function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Use Object.create to make two instances of Animal named duck and beagle.

let duck = Object.create(Animal.prototype);  
let beagle = Object.create(Animal.prototype); 