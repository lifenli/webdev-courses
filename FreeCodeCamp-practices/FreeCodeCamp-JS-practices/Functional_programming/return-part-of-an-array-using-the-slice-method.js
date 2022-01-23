
// Return part of an array using the slice method
// Slice method does not mutate the original array

function sliceArray(anim, beginSlice, endSlice) {
   return anim.slice(beginSlice, endSlice);
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);