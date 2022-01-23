function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// prototype inheritance of it's constructor

Dog.prototype.isPrototypeOf(beagle);