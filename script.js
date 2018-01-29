function computerPlay() {
    let choice = '';
    
    let pick = Math.floor(Math.random() * 3);

    if(pick === 0) {
        choice = 'Rock';
    } else if(pick === 1) {
        choice = 'Paper';
    } else if(pick === 2) {
        choice = 'Scissors';
    }

    return choice;
}