const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

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

function playerPlay() {
    const listOfActions = [ROCK, PAPER, SCISSORS];
    let query = prompt('Choose:\nrock, paper, scissors');
    let action = listOfActions.find(k => k === query.toLowerCase());
    if(action === undefined) {
        alert('Chose the right option');
        return playerPlay();
    }
    return action;
}

function game() {
    
    let score;
    let playerPoints = 0;
    let computerPoints = 0;

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

    for(let i = 1; i <= 5; i++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();

        console.log(`Player chooses: ${playerSelection}`);
        console.log(`Computer chooses: ${computerSelection}`);
        let subscore = playRound(playerSelection, computerSelection);
                
        if(subscore === 1) {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            playerPoints++;
        } else if(subscore === -1) {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            computerPoints++;
        } else if(subscore === 0) {
            console.log(`Tie!`);
        }

        console.log(`Player: ${playerPoints}`);
        console.log(`Computer: ${computerPoints}`);
    }

    if(playerPoints > computerPoints) {
        score = "Player wins!";
    } else if(playerPoints < computerPoints) {
        score = "Computer wins!";
    } else if(playerPoints === computerPoints) {
        score = "Tie!";
    }
    return score;
};

console.log(game());