// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(...arg) {
  let allArg = [...arg];
  // spread the arguments
  let arr = arg[0];
  // first arguments will be an array
  for (let i=1; i<allArg.length; i++) {
    // check how many arguments after the first one
    arr= arr.filter((argEle) => allArg[i] !== argEle);
    // filter out the arr elements that does not match
    // reassigning the arr after the filtering
  };
  return arr;
}

destroyer(["tree", "hamburger", 53], "tree", 53);