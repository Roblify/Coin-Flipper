const coin = document.querySelector('#coin');
const button = document.querySelector('#flip');
const status = document.querySelector('#status');

const clickSound = new Audio('Click.mp3');
const partyHornSound = new Audio('Party Horn.mp3');

function deferFn(callback, ms) {
    setTimeout(callback, ms);
}

function processResult(result) {
    status.innerText = result.toUpperCase();
    partyHornSound.play();
}

function flipCoin() {
    coin.setAttribute('class', '');
    const random = Math.random();
    const result = random < 0.5 ? 'heads' : 'tails';
    deferFn(function() {
        coin.setAttribute('class', 'animate-' + result);
        deferFn(processResult.bind(null, result), 2900);
    }, 100);
    clickSound.play();
}

button.addEventListener('click', flipCoin);