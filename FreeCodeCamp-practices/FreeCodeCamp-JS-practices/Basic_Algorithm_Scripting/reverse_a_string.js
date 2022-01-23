// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
    let newStr = [...str];
    let newerStr = '';
    for (let i = newStr.length; i > 0; i--) {
        newerStr += (newStr.pop(newStr[newStr.length]));
    }
    return newerStr;
}

reverseString("hello");