function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // A more efficient way is to set the prototype to a new object that already contains the properties. 
     numLegs: 4,
     eat: function() {
       console.log("hum hum hum");
     },
     describe: function() {
       console.log("My name is " + this.name);
     }
};