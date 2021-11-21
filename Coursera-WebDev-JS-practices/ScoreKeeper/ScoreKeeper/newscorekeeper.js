const p1 = {
    button: document.querySelector('#p1Btn'),
    display: document.querySelector('#p1Score'),
    score: 0
}

const p2 = {
    button: document.querySelector('#p2Btn'),
    display: document.querySelector('#p2Score'),
    score: 0
}

const reset = document.querySelector('#reset');

let sets = 3;
const playingTo = document.querySelector("#sets");
playingTo.addEventListener('change', function () {
    sets = parseInt(this.value);
    console.log(sets);
    resetAll(p1, p2);
    resetAll(p2, p1);
})



function addNumber(player, opponent) {
    player.button.addEventListener('click', function () {
        player.score < sets && player.score++;
        console.log(player.score);
        player.display.textContent = player.score;
        if (player.score === sets) {
            player.button.disabled = true;
            opponent.button.disabled = true;
            player.display.classList.add('green');
            opponent.display.classList.add('red');
        };
    });

}

function resetAll(player, opponent) {
    player.score = 0;
    opponent.score = 0;
    player.display.textContent = 0;
    opponent.display.textContent = 0;
    player.button.disabled = false;
    opponent.button.disabled = false;
    player.display.classList.remove('green');
    opponent.display.classList.remove('red');
}

reset.addEventListener('click', function () {
    resetAll(p1, p2);
    resetAll(p2, p1);
})

addNumber(p1, p2);
addNumber(p2, p1);


