function getComputerChoice() {
    let rps_options = ['Rock', 'Paw', 'Claw'];
    return rps_options[Math.floor(Math.random()*rps_options.length)];
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'Rock' && computerSelection == 'Claw')||(playerSelection == 'Paw' && computerSelection == 'Rock')||(playerSelection == 'Claw' && computerSelection == 'Paw')) {
        divStartReaction.replaceChildren();
        divStartReaction.textContent = (`You Win! ${playerSelection} Beats ${computerSelection}`);
        container.appendChild(divStartReaction);
        return [++playerScore,computerScore];
    } else if ((playerSelection == 'Rock' && computerSelection == 'Rock')||(playerSelection == 'Paw' && computerSelection == 'Paw')||(playerSelection == 'Claw' && computerSelection == 'Claw')) {        
        divStartReaction.replaceChildren();
        divStartReaction.textContent = (`It's a Tie! You Chose ${playerSelection} & Computer Chose ${computerSelection}`);
        container.appendChild(divStartReaction);
        return [playerScore,computerScore];
    } else if ((playerSelection == 'Rock' && computerSelection == 'Paw')||(playerSelection == 'Paw' && computerSelection == 'Claw')||(playerSelection == 'Claw' && computerSelection == 'Rock')) {
        divStartReaction.replaceChildren();
        divStartReaction.textContent = (`You Lose! ${computerSelection} Beats ${playerSelection}`);
        container.appendChild(divStartReaction);
        return [playerScore,++computerScore];
    }
}

playerScore = 0;
computerScore = 0;

const initial = document.querySelector('body');
const container = document.querySelector('#container');
const containerTwo = document.querySelector('#containerTwo');

const divStartReaction = document.createElement('div');
divStartReaction.textContent = `Choose Your Weapon Meow!`;
container.appendChild(divStartReaction);

const divStartScorePlayer = document.createElement('div');
const divStartScoreComputer = document.createElement('div');

divStartScorePlayer.textContent = "Player Score: 0";
divStartScoreComputer.textContent = "Computer Score: 0";

containerTwo.appendChild(divStartScorePlayer);
containerTwo.appendChild(divStartScoreComputer);

const rockBtn = document.querySelector('#rock');
const clawBtn = document.querySelector('#claw');
const pawBtn = document.querySelector('#paw');

rockBtn.addEventListener('click', () => {
    buttonFunction('Rock'); 
});

clawBtn.addEventListener('click', () => {
    buttonFunction('Claw');
});

pawBtn.addEventListener('click', () => {
    buttonFunction('Paw');
});

function gameFive() {
    if (playerScore == 5) {
        gameResult("You Won This Game!");
    } else if (computerScore == 5) {
        gameResult("Computer Won This Game!");
    } else if (computerScore == 5 && playerScore == 5) {
        gameResult("It is a Tie!");
    }
}

function buttonFunction(playerChoice) {
    containerTwo.replaceChildren();
    playRound(playerChoice,getComputerChoice());

    divStartScorePlayer.textContent = (`Player Score: ${playerScore}`);
    divStartScoreComputer.textContent = (`Computer Score: ${computerScore}`);

    containerTwo.appendChild(divStartScorePlayer);
    containerTwo.appendChild(divStartScoreComputer);

    gameFive();
}

function gameResult(result) {
    const divNewOne = document.createElement('div');
    container.replaceChildren();
    divNewOne.textContent = result;

    container.appendChild(divNewOne);

    const buttonEnd = document.createElement('button');
    buttonEnd.textContent = ("Play Again");
    buttonEnd.setAttribute('style', 'padding: 14px 40px; font-size: 24px; background-color: black; color:  white;');    

    container.appendChild(buttonEnd);

    buttonEnd.addEventListener('click', () => {
        location.reload();
    });
}