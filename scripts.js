let computerMove = '';
let result = '';
let score = JSON.parse(localStorage.getItem('score')) || { win: 0, loss: 0, tie: 0 };

function cmptMove() {
    const randomNumber = Math.random();
    if (randomNumber < 1/3) return 'Rock';
    if (randomNumber < 2/3) return 'Paper';
    return 'Scissors';
}

function playgame(playerMove) {
    computerMove = cmptMove();

    if (playerMove === computerMove) {
        result = 'Tie';
    } else if (
        (playerMove === 'Rock' && computerMove === 'Scissors') ||
        (playerMove === 'Paper' && computerMove === 'Rock') ||
        (playerMove === 'Scissors' && computerMove === 'Paper')
    ) {
        result = 'Win';
        score.win++;
    } else {
        result = 'Loss';
        score.loss++;
    }

    score.tie += result === 'Tie' ? 1 : 0;
    localStorage.setItem('score', JSON.stringify(score));

    alert(`You picked ${playerMove}. Computer picked ${computerMove}.
Win: ${score.win}, Loss: ${score.loss}, Tie: ${score.tie}`);
}

function resetScore() {
    score = { win: 0, loss: 0, tie: 0 };
    localStorage.removeItem('score');
    alert("Score reset!");
}
