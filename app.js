let scorePlayer1 = document.querySelector('#scoreP1');
let scorePlayer2 = document.querySelector('#scoreP2');
const player1Button = document.querySelector('#player1');
const player2Button = document.querySelector('#player2');
const resetButton = document.querySelector('#reset');
const scoreLimit = document.querySelector('#score-limit');

// Changing the score limit in the select
let maxPoints = parseInt(scoreLimit.value, 10); // Initial value
scoreLimit.addEventListener('change', function(event){
    maxPoints = parseInt(event.target.value, 10);
});


player1Button.addEventListener('click', function(){
    scorePlayer1.innerText = parseInt(scorePlayer1.innerText, 10) + 1;

    checkGame(scorePlayer1, scorePlayer2, maxPoints);
});

player2Button.addEventListener('click', function(){
    scorePlayer2.innerText = parseInt(scorePlayer2.innerText, 10) + 1;

    checkGame(scorePlayer2, scorePlayer1, maxPoints);
});

resetButton.addEventListener('click', function() {
    scorePlayer1.innerText = '0';
    scorePlayer2.innerText = '0';
    player1Button.disabled = false;
    player2Button.disabled = false;
    scorePlayer1.style.color = 'black';
    scorePlayer2.style.color = 'black';
});

function checkGame(scorePlayerWin, scorePlayerLose, maxPoints) {
    if(parseInt(scorePlayerWin.innerText, 10) === maxPoints) {
        player1Button.disabled = true;
        player2Button.disabled = true;
    
        scorePlayerWin.style.color = 'green';
        scorePlayerLose.style.color = 'red';
    }
}