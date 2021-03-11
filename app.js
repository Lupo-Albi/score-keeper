let scorePlayer1 = document.querySelector('#scoreP1');
let scorePlayer2 = document.querySelector('#scoreP2');
const player1Button = document.querySelector('#player1');
const player2Button = document.querySelector('#player2');
const resetButton = document.querySelector('#reset');

player1Button.addEventListener('click', function(){
    scorePlayer1.innerText = parseInt(scorePlayer1.innerText, 10) + 1;
});

resetButton.addEventListener('click', function() {
    scorePlayer1.style.color = 'red';
});