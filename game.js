function computerPlay() {
    let randomSeed = Math.floor(Math.random()*3);
    let computerSelection;
    if (randomSeed === 0) {
        computerSelection = 'rock';
    } else if (randomSeed === 1) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let win;

    if (playerSelection === 'rock' && computerSelection == 'paper') {
        console.log('You Lose! Paper beats Rock');
        return win = -1;
    } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
        console.log('You Lose! Scissors beats paper');
        return win = -1;
    } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        console.log('You Lose! Rock beats Scissors');
        return win = -1;
    } else if (playerSelection === 'paper' && computerSelection == 'rock') {
        console.log('You Win! Paper beats Rock');
        return win = 1;
    } else if (playerSelection === 'scissors' && computerSelection == 'paper') {
        console.log('You Win! Scissors beats paper');
        return win = 1;
    } else if (playerSelection === 'rock' && computerSelection == 'scissors') {
        console.log('You Win! Rock beats Scissors');
        return win = 1;
    } else {
        console.log('Even! Try again');
        return win = 0;
    }
}

function game() {
    const totalRound = 5;
    let win = 0;
    for (let rnd = 0; rnd < totalRound; rnd++) {
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        win += playRound(playerSelection, computerSelection);
    }
    
    if (win < 0) {
        console.log("Computer wins! Try again");
    } else {
        console.log("You win! Congrats!")
    }
}

function playerPlay() {
    let playerSelection = prompt("Rock, paper, or scissors?");
    return playerSelection;
}

game();