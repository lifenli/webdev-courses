// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
// But for the purpose of this challenge, we would like you to 
// use one of the JavaScript substring methods instead.

function confirmEndding(str, target) {
    let newStr = [...str];
    let splicedStr = '';
    let startIndex = newStr.length - target.length;
    let splicedArr = newStr.splice(startIndex, newStr.length);
    for (let i = 0; i < splicedArr.length; i++) {
        splicedStr += splicedArr[i];
        if (splicedStr.localeCompare(target) === 0) {
            return true;
        } else {
            return false;
        };
    };
}

confirmEndding("He has a new name", "name")