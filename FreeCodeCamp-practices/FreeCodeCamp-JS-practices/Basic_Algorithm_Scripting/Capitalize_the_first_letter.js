// This script is going to capitalize the first letter of each word in a string.
// The rest of the word will be in lower case.


function titleCase(str) {
    let splicedArr = [];
    let newArr = [...str];
    while (newArr.indexOf(' ') !== -1) {
        let firstIndex = newArr.indexOf(' ');
        let secondIndex = newArr.splice(0, firstIndex + 1);
        splicedArr.push(secondIndex);
    };
    let lastArr = newArr;
    splicedArr.push(lastArr);
    let fullString = '';
    for (let i = 0; i < splicedArr.length; i++) {
        let firstLetter = splicedArr[i][0].toUpperCase();
        let littleCase = '';
        for (let j = 1; j < splicedArr[i].length; j++) {
            littleCase += splicedArr[i][j].toLowerCase();
        }
        fullString += firstLetter;
        fullString += littleCase;
    };
    return fullString;
}