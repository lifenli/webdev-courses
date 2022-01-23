// let isCuteMixin = function(obj) {
//   obj.isCute = function() {
//     return true;
//   };
// };
// let singMixin = function(obj) {
//   obj.sing = function() {
//     console.log("Singing to an awesome tune");
//   };
// };

 
 let funModule = (function() {
   return {
     isCuteMixin: function(obj) {
       return obj.isCute; 
     }, //  isCuteMixin is a method inside funModule
     singMixin: function(obj) {
       obj.sing = function(){
         console.log("Singing to an awesome tune");
  }; //  singMixin is a method inside funModule
       }
     };
 }) () // wrapping up both into one object


function Bird() {}; // Constructing a function called "Bird"
let duck = new Bird();
//  In order to make use of the method, 
funModule.singMixin(duck); // accessing the object property
duck.sing();// calling the method