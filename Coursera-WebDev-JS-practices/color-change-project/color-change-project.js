

// Color change project
function newColor() {
    const body = document.querySelector('body');
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('#rgb');
    const ranOne = Math.round(Math.random(1) * 256);
    const ranTwo = Math.round(Math.random(1) * 256);
    const ranThree = Math.round(Math.random(1) * 256);
    h2.innerText = `RGB (${ranOne},${ranTwo},${ranThree})`;
    body.style.backgroundColor = `rgb(${ranOne},${ranTwo},${ranThree})`;

}

const btn = document.querySelector('#changeBTN');
btn.addEventListener('click', newColor);


// FORMEVENT project
const form = document.querySelector('form');
const product = form.elements.product;
const qty = form.elements.qty;

function addList() {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerText = `${qty.value} ${product.value}`;
    ul.appendChild(li);
    qty.value = '';
    product.value = '';
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    addList();
});

// INPUT AND CHANGE PROJECT
const h3 = document.querySelector('#title');
const change = document.querySelector('#changeEvt');
change.addEventListener('change', function (e) {
    h3.innerText = change.value;
});

const input = document.querySelector('#inputEvt');
input.addEventListener('input', function (e) {
    h3.innerText = input.value;
});


