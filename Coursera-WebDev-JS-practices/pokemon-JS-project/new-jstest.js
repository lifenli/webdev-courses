
// function getBetweenAges(min, max) {
//     return function(num) {
//         return num >= min && num <= max;
//     }
// }

// const isChild = getBetweenAges(0, 18);
// const isAdult = getBetweenAges(19, 60);
// const isElderly = getBetweenAges(61, 120);

// RAINBOW project
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const letters = document.querySelectorAll('span');
for (let i = 0; i < colors.length; i++) {
    letters[i].style.color = colors[i];
}

//BUTTONS project
const div = document.querySelector('div')
for (let i = 1; i <= 100; i++) {
    const newButton = document.createElement('button');
    newButton.innerText = 'hey';
    div.appendChild(newButton);
}

// POKEMON project
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const section = document.querySelector('section');
for (let i = 1; i <= 60; i++) {
    const figure = document.createElement('figure');
    section.append(figure);
    figure.classList.add('pokeFig');

    const img = document.createElement('img');
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    figure.append(img);

    const button = document.createElement('button');
    button.innerText = `#${i}`;
    button.type = 'button';
    figure.append(button);
    button.classList.add('btn', 'btn-outline-info');

    // const figcaption = document.createElement('figcaption');
    // figcaption.innerText = `pokemon ${i}`;
    // figure.append(figcaption);
    // figcaption.classList.add('pokeCap');
}
