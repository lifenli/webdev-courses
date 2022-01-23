// Joining two arrays using the concat method
// without mutating the two original arrays

function nonMutatingConcat(original, attach) {
   return original.concat(attach);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);