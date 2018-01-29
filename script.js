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

const computerSelection = computerPlay();

function playerPlay() {
    let input;
    let query = prompt('Choose:\nrock, paper, scissors');

    switch(query.toLowerCase()) {
        case 'rock':
            input = 'Rock';
            break;
        case 'paper':
            input = 'Paper';
            break;
        case 'scissors':
            input = 'Scissors';
            break;
        default:
            prompt('Choose right option:\nrock, paper, scissors');
    }
    return input;
}

function playRound(playerSelection, computerSelection) {

}


// const playerSelection = 'rock';
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection))







