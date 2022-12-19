function getComputerChoice() {
    let rps_options = ['Rock', 'Paper', 'Scissors'];
    return rps_options[Math.floor(Math.random()*rps_options.length)];
}

function playRound(playerSelection, computerSelection) {
    first_letter = playerSelection.charAt(0).toUpperCase();
    lower_letters = playerSelection.slice(1).toLowerCase();
    playerSelectionConverted = first_letter+lower_letters;
   
    playerScore = 0;
    computerScore = 0;

    if ((playerSelectionConverted == 'Rock' && computerSelection == 'Scissors')||(playerSelectionConverted == 'Paper' && computerSelection == 'Rock')||(playerSelectionConverted == 'Scissors' && computerSelection == 'Paper')) {
        console.log(`You Win! ${playerSelectionConverted} Beats ${computerSelection}.`);
        return [++playerScore,computerScore];
    } else if ((playerSelectionConverted == 'Rock' && computerSelection == 'Rock')||(playerSelectionConverted == 'Paper' && computerSelection == 'Paper')||(playerSelectionConverted == 'Scissors' && computerSelection == 'Scissors')) {
        console.log(`It's a Tie! You Chose ${playerSelectionConverted} & Computer Chose ${computerSelection}`);
        return [playerScore,computerScore];
    } else if ((playerSelectionConverted == 'Rock' && computerSelection == 'Paper')||(playerSelectionConverted == 'Paper' && computerSelection == 'Scissors')||(playerSelectionConverted == 'Scissors' && computerSelection == 'Rock')) {
        console.log(`You Lose! ${computerSelection} Beats ${playerSelectionConverted}.`);
        return [playerScore,++computerScore];
    } else {
        console.log (`${playerSelectionConverted} Is Not a Valid Response`);
        return [playerScore,computerScore];
    }
}

function game() {

    let finalPlayerScore = 0;
    let finalComputerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose Your Weapon', '');
        const computerSelection = getComputerChoice();
        
        let play = playRound(playerSelection, computerSelection);
        
        if (play[0]==1) {
            finalPlayerScore++;
        } else if (play[1]==1) {
            finalComputerScore++;
        }

        console.log(finalPlayerScore);
        console.log(finalComputerScore);
    }

    if (finalComputerScore < finalPlayerScore) {
        console.log("You Won This Game!");
    } else if (finalComputerScore > finalPlayerScore) {
        console.log("The Computer Won This Game!");
    } else if (finalComputerScore == finalPlayerScore) {
        console.log("It's a Tie!");
    }
}

game();
