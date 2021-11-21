const playerOne = document.querySelector('#playerOne');
const playerTwo = document.querySelector('#playerTwo');
const selectBtn = document.querySelector('#sets')
const resetBtn = document.querySelector('#reset');
let leftTotal = 0;
let rightTotal = 0;
let newVal = 3;



function leftAddNumber() {
    newVal > leftTotal && leftTotal++;
    console.log(leftTotal);
    left.innerText = leftTotal;
}


function rightAddNumber() {
    newVal > rightTotal && rightTotal++;
    console.log(rightTotal);
    right.innerText = rightTotal;
}

function reset() {
    lefttotal = 0;
    rightTotal = 0;
    left.textContent = 0;
    right.textContent = 0;
    left.style.color = 'black';
    right.style.color = 'black';
    document.querySelector("#playerOne").disabled = false;
    document.querySelector("#playerTwo").disabled = false;
}



selectBtn.addEventListener('change', function (e) {
    newVal = parseInt(this.value);
    // *******************PARSEINT because it's a string, not a number.!!!!!!!!!!!!!!!!!!!!!!!!!!
    reset(); // with (), it's called to be executed
});
console.log(newVal);

playerOne.addEventListener('click', function (e) {
    e.preventDefault;
    leftAddNumber();
    if (leftTotal === newVal) {
        left.style.color = 'green';
        right.style.color = 'red';
        document.querySelector("#playerOne").disabled = true;
        document.querySelector("#playerTwo").disabled = true;
    }
});


playerTwo.addEventListener('click', function (e) {
    e.preventDefault;
    rightAddNumber();
    if (rightTotal === newVal) {
        left.style.color = 'red';
        right.style.color = 'green';
        document.querySelector("#playerOne").disabled = true;
        document.querySelector("#playerTwo").disabled = true;
    }
})


resetBtn.addEventListener('click', reset);
// here "reset" is only being passed to this event, it's not called to be executed.
