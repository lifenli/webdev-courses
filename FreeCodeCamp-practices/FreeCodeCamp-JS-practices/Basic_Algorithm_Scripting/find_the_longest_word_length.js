// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
    let index = 0;
    let nextIndex = str.indexOf(' ');
    let newStr = [...str];
    let indexArr = [];
    while (nextIndex !== -1) {
        nextIndex = newStr.indexOf(' ');
        newStr.splice(index, nextIndex + 1);
        indexArr.push(nextIndex);
    };
    let lastIndex = newStr.length;
    indexArr.push(lastIndex);
    return Math.max(...indexArr);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");