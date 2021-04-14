const player1 = {
    score: 0,
    button: document.querySelector('#player1Button'),
    display: document.querySelector('#scoreP1')
}
const player2 = {
    score: 0,
    button: document.querySelector('#player2Button'),
    display: document.querySelector('#scoreP2')
}

const resetButton = document.querySelector('#reset');
const scoreLimit = document.querySelector('#score-limit');
let maxPoints = parseInt(scoreLimit.value, 10); // Initial value
let isGameOver = false;

// Changing the score limit in the select
scoreLimit.addEventListener('change', function(){
    maxPoints = parseInt(this.value, 10);
    reset();
});

player1.button.addEventListener('click', function(){
    updateScores(player1, player2);
});

player2.button.addEventListener('click', function(){
    updateScores(player2, player1);
});

resetButton.addEventListener('click', reset);

function updateScores(player, opponent) {
    if(!isGameOver) {
        player.score += 1;
        if (player.score >= maxPoints & (player.score - opponent.score) >= 2){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            player.button.disabled = true;
            opponent.display.classList.add('has-text-danger');
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

function reset() {
    isGameOver = false;

    for(let player of [player1, player2]) {
        player.score = 0;
        player.button.disabled = false;
        player.display.textContent = player.score;
        player.display.classList.remove('has-text-success', 'has-text-danger');
    }
}