(function(){
// ###### START BUTTON ######
function styleStartButton() {
    this.classList.add('startClick');
    const disabledButtons = document.querySelectorAll('#btn');
    disabledButtons.forEach(e => e.removeAttribute('disabled'));
}

const startButton = document.querySelector('#startBtn');
startButton.addEventListener('click', styleStartButton);
startButton.addEventListener('transitionend', removeStartClickClass);

function removeStartClickClass(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('startClick');
  }

// remove header
function rmStartButton() {
    setTimeout(() => {
        divStartButton.setAttribute('style', 'display: none;');
        h1.style.opacity = 0;
    }, 270);
}

const divStartButton = document.querySelector('#startButton');
divStartButton.addEventListener('click', rmStartButton);
const h1 = document.querySelector('h1');
// ###### end of START BUTTON ######

// ###### CONTROLS BUTTONS ######
function styleCtrlsButton() {
    this.classList.add('ctrlClick'); 
    playerMovesCounter++;
}
    
const button = document.querySelectorAll('#btn');
button.forEach(e => e.addEventListener('click', styleCtrlsButton));
    
function removeStyleCtrlsButton(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('ctrlClick');
}
    
const buttons = document.querySelectorAll('#btn');
buttons.forEach(e => e.addEventListener('transitionend', removeStyleCtrlsButton));
// ###### end of CONTROLS BUTTONS ######

// ###### GAME ######
const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';
const tableBadgePlayer = document.querySelector('#player');
const tableBadgeComputer = document.querySelector('#computer');
const playerSubScore = document.querySelector('#playerScore');
const computerSubScore = document.querySelector('#computerScore');

let score;
let playerPoints = 0;
let computerPoints = 0;
let playerMovesCounter = 0;

function getScore() {
    const disableButtons = document.querySelectorAll('#btn');
    disableButtons.forEach(e => e.setAttribute('disabled', true));
    if(playerPoints > computerPoints) {
        score = "Player won!";
    } else if(playerPoints < computerPoints) {
        score = "Computer won!";
    } else if(playerPoints === computerPoints) {
        score = "Tie!";
    }
    h1.textContent = score;
    h1.style.opacity = 1;
    const quit = document.querySelector('#startBtn');
    quit.textContent = 'Quit';
    divStartButton.setAttribute('style', 'display: block;');
    divStartButton.onclick = () => location.reload();
    return score;
}

function computerPlay() {
    let pick = Math.floor(Math.random() * 3);
    switch(pick) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

const init = document.querySelectorAll('#btn');
init.forEach(elem => elem.addEventListener('click', playerPlay));

function playerPlay() {
    let playerAction = this.getAttribute('title');

    function playRound(playerSelection, computerSelection) {
        if(playerSelection === computerSelection) {
            return 0;
        } else if(playerSelection === ROCK && computerSelection === PAPER ||
                  playerSelection === SCISSORS && computerSelection === ROCK ||
                  playerSelection === PAPER && computerSelection === SCISSORS) {
            return -1;
        } else if(playerSelection === ROCK && computerSelection === SCISSORS ||
                  playerSelection === PAPER && computerSelection === ROCK ||
                  playerSelection === SCISSORS && computerSelection === PAPER) {
            return 1;
        }
    }

    const playerSelection = playerAction;
    const computerSelection = computerPlay();

    tableBadgePlayer.textContent = `Player: ${playerSelection}`;
    tableBadgeComputer.textContent = `Computer: ${computerSelection}`;

    let subscore = playRound(playerSelection, computerSelection);

    if(subscore === 1) {
        h1.textContent = `You Win!`;
        h1.style.opacity = 1;
        playerPoints++;
    } else if(subscore === -1) {
        h1.textContent = `You Lose!`;
        h1.style.opacity = 1;
        computerPoints++;
    } else if(subscore === 0) {
        h1.textContent = `Tie!`;
        h1.style.opacity = 1;
    }

    playerSubScore.textContent = playerPoints;
    computerSubScore.textContent = computerPoints;

    if(playerMovesCounter === 5) {
        getScore();
    }
}
})();