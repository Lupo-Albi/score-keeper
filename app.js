const player1Button = document.querySelector('#player1');
const player2Button = document.querySelector('#player2');
const displayPlayer1 = document.querySelector('#scoreP1');
const displayPlayer2 = document.querySelector('#scoreP2');
const resetButton = document.querySelector('#reset');
const scoreLimit = document.querySelector('#score-limit');

let scorePlayer1 = 0;
let scorePlayer2 = 0;
let isGameOver = false;

let maxPoints = parseInt(scoreLimit.value, 10); // Initial value
// Changing the score limit in the select
scoreLimit.addEventListener('change', function(){
    maxPoints = parseInt(this.value, 10);
    reset();
});

player1Button.addEventListener('click', function(){
    if(!isGameOver) {
        scorePlayer1 += 1;
        if (scorePlayer1 === parseInt(scoreLimit.value, 10)){
            isGameOver = true;
            displayPlayer1.classList.add('winner');
            displayPlayer2.classList.add('loser');
        }
        displayPlayer1.textContent = scorePlayer1;
    }
});

player2Button.addEventListener('click', function(){
    if(!isGameOver) {
        scorePlayer2 += 1;
        if (scorePlayer2 === parseInt(scoreLimit.value, 10)){
            isGameOver = true;
            displayPlayer2.classList.add('winner');
            displayPlayer1.classList.add('loser');
        }
        displayPlayer2.textContent = scorePlayer2;
    }
});

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    player1Button.disabled = false;
    player2Button.disabled = false;
    displayPlayer1.textContent = scorePlayer1;
    displayPlayer2.textContent = scorePlayer2
    displayPlayer1.classList.remove('winner', 'loser');
    displayPlayer2.classList.remove('winner', 'loser');
}