function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

Object.prototype.isPrototypeOf(Dog.prototype); 
//Object is a supertype for all objects in JavaScript