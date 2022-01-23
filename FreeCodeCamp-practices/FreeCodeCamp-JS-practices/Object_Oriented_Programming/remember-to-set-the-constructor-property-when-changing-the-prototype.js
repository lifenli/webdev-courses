function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog, // whenever a prototype is manually set to a new object, remember to define the constructor property
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};