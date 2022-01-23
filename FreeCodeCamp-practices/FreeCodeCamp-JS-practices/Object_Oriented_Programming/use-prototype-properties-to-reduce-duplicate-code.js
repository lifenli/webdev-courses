// Setting a univresal property "numLegs" for All instances of Dog.

function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");