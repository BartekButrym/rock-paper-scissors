function computerPlay() {
    let choice;
    
    let pick = Math.floor(Math.random() * 3);

    switch(pick) {
        case 0:
            choice = 'Rock';
            break;
        case 1:
            choice = 'Paper';
            break;
        case 2:
            choice = 'Scissors';
            break;
    }

    return choice;
}

function playerPlay() {
    let input;
    let query = prompt('Choose:\nrock, paper, scissors');

    if(query == null) {
        alert('You canceled the game\n\nAu revoir!');
    } else if(query.toLowerCase() === 'rock') {
        input = 'Rock';
    } else if(query.toLowerCase() === 'paper') {
        input = 'Paper';
    } else if(query.toLowerCase() === 'scissors') {
        input = 'Scissors';
    } else if(query.toLowerCase() !== 'rock' || 'paper' || 'scissors') {
        alert('Choose correct option\nrock, paper, scissors');
        window.location.reload();
    }

    return input;
}

function game() {
    
    let score;
    let playerPoints = 0;
    let computerPoints = 0;

    function playRound(playerSelection, computerSelection) {
        let result;
        
        if(playerSelection === 'Rock' && computerSelection === 'Rock' ||
           playerSelection === 'Paper' && computerSelection === 'Paper' ||
           playerSelection === 'Scissors' && computerSelection === 'Scissors') {
            result = 'Dead-heat!';
        } else if(playerSelection === 'Rock' && computerSelection === 'Paper') {
            result = 'You Lose! Paper beats Rock';
        } else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
            result = 'You Lose! Rock beats Scissors';
        } else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
            result = 'You Lose! Scissors beats Paper';
        } else if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
            result = 'You Win! Rock beats Scissors';
        } else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
            result = 'You Win! Paper beats Rock';
        } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
            result = 'You Win! Scissors beats Paper';
        }

        return result;
    }

    for(let i = 1; i <= 5; i++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();

        console.log(`Player chooses: ${playerSelection}`);
        console.log(`Computer chooses: ${computerSelection}`);
        let subscore = playRound(playerSelection, computerSelection);
        console.log(`Result: ${subscore}`);
        
        if(subscore.search(/win/i) !== -1) {
            playerPoints++;
        } else if(subscore.search(/lose/i) !== -1) {
            computerPoints++;
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