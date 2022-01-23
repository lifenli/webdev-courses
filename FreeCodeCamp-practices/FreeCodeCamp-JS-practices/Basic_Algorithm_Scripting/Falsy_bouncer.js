// Remove all falsy values from an array.
// Falst values in javasccript are "false, null, 0, ' ', undefined and NaN"

function bouncer(arr) {
    let newArr = [];
    let valueArr = [false, null, 0, " ", undefined]
    function checkBoolean(checkList) {
        for (let value of arr) {
            if (checkList.indexOf(value) === -1 && !Number.isNaN(value)) {
                newArr.push(value);
            };
        };
    };
    checkBoolean(valueArr);
    return newArr;
}

bouncer([7, "ate", " ", false, 9]);