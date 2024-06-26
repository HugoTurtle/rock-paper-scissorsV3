let humanScore = 0;
let computerScore = 0;
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let gamesPlayed = 0;

const resultContainer = document.querySelector('#result-container');
let score = document.createElement('p');
let matchResult = document.createElement('p');

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function getComputerChoice() {
    const num = getRandomInt(3);

        if (num == 1) return rock;
        else if (num == 2) return paper;
        else return scissors;
        
}

function displayScore() {
    score.textContent = `Player score : ${humanScore} Computer Score : ${computerScore}`;
    resultContainer.appendChild(score);
}

function playRound(humanChoice, computerChoice) {

    switch(humanChoice) {
        case rock :
            if (computerChoice == paper) {
                computerScore++;
                matchResult.textContent = "You lose! Paper beats rock";
            }
            else if(computerChoice == scissors) {
                humanScore++;
                matchResult.textContent = "You win! Rock beats scissors";
            } else {
                matchResult.textContent = "It's a tie";
            }
            break;
        case paper :
            if (computerChoice == scissors) {
                computerScore++;
                matchResult.textContent = "You lose! Scissors beats paper";
            }
            else if(computerChoice == rock) {
                humanScore++;
                matchResult.textContent = "You win! Paper beats rock";
            } else {
                matchResult.textContent = "It's a tie";
            }
            break;
        case scissors : 
            if(computerChoice == rock) {
                computerScore++;
                matchResult.textContent = "You lose! Rock beats scissors";
            }
            else if(computerChoice == paper) {
                humanScore++; 
                matchResult.textContent = "You win! Scissors beats paper";
            } else {
                matchResult.textContent = "It's a tie";
            }
            break;
    }
    resultContainer.appendChild(matchResult);
    displayScore();
}

function determineWinner(humanScore,computerScore) {
    if(humanScore > computerScore) matchResult.textContent = "You win! Congratulation";
    else if(computerScore >  humanScore) matchResult.textContent = "You lose. Please try again!";
    else matchResult.textContent = "It's a tie! Please try again!";

    resultContainer.appendChild(matchResult);
}

const buttonContainer = document.querySelector("#button-container");

buttonContainer.addEventListener(`click`, (Event) => {
    let target = Event.target;

    //Play the round
    switch(target.id) {
        case 'rock':
            playRound(rock, getComputerChoice());
            ++gamesPlayed;
        break;
        
        case 'paper':
            playRound(paper, getComputerChoice());
            ++gamesPlayed;
        break;

        case 'scissors': 
            playRound(scissors, getComputerChoice());
            ++gamesPlayed;
        break;
    }

    //Checks if the max number of games has been reached
    if(gamesPlayed == 5) {
        determineWinner(humanScore,computerScore);
        let buttons = document.querySelectorAll("button");
        for(currentButton of buttons) {
            currentButton.disabled = true;
        }
    }

})
