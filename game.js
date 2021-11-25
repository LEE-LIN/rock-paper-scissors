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

    if (playerSelection === 'rock' && computerSelection == 'paper') {
        return [[0, 1], 'You Lose! Paper beats Rock'];
    } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
        return [[0, 1], 'You Lose! Scissors beats paper'];
    } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        return [[0, 1], 'You Lose! Rock beats Scissors'];
    } else if (playerSelection === 'paper' && computerSelection == 'rock') {
        return [[1, 0], 'You Win! Paper beats Rock'];
    } else if (playerSelection === 'scissors' && computerSelection == 'paper') {
        return [[1, 0], 'You Win! Scissors beats paper'];
    } else if (playerSelection === 'rock' && computerSelection == 'scissors') {
        return [[1, 0], 'You Win! Rock beats Scissors'];
    } else {
        return [[0, 0], 'Even! Try again'];
    }
}

function playerPlay() {
    let playerSelection = prompt("Rock, paper, or scissors?");
    return playerSelection;
}

window.addEventListener('click', function(e) {   
    const btn = e.target;
    if (!btn.hasAttribute('btn-name')) return;
    if (gameEnd === 1) resetGame();
    const computerSelection = computerPlay()
    const playerSelection = btn.getAttribute('btn-name');
    const result = playRound(playerSelection, computerSelection);
    points = calculatePoints(result[0]);
    displayResult(points, result)
});

function calculatePoints(currentResult) {
    return points.map((point, i) => point + currentResult[i]);
}

function displayResult(points, result) {
    resultDiv.textContent = result[1]+'\r\n';
    scoreDiv.textContent = `YOU:Computer = ${points[0]}:${points[1]}\r\n`;
    if (points[0] === winnerPoint) {
        winnerDiv.textContent = 'You win! Congrats!';
        gameEnd = 1;
    }
    if (points[1] === winnerPoint) {
        winnerDiv.textContent = 'Computer wins! Try again';
        gameEnd = 1;
    }
}

function resetGame() {
    points = [0, 0];
    resultDiv.textContent = '';
    scoreDiv.textContent = '';
    winnerDiv.textContent = '';
    gameEnd = 0;
}

const winnerPoint = 5;
let points = [0, 0];
let gameEnd = 0;
const resultDiv = document.querySelector('.result');
const scoreDiv = document.querySelector('.score');
const winnerDiv = document.querySelector('.winner-declaration');