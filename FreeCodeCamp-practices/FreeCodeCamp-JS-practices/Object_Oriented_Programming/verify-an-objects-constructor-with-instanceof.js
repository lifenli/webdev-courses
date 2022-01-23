
// instanceof allows you to compare an object to a constructor, 
// returning true or false based on whether or not that object was created with the constructor.

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(3);
myHouse instanceof House;