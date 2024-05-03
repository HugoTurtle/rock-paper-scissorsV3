let humanScore = 0;
let computerScore = 0;
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function getComputerChoice() {
    const num = getRandomInt(3);

        if (num == 1) return rock;
        else if (num == 2) return paper;
        else return scissors;
        
}

function getHumanChoice() {
    return prompt("Please input : rock, paper, or scissors");
}

function displayScore() {
    return(`Player score : ${humanScore} Computer Score : ${computerScore}`);
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    switch(humanChoice) {
        case rock :
            if (computerChoice == paper) {
                computerScore++;
                console.log("You lose! Paper beats rock");
            }
            else if(computerChoice == scissors) {
                humanScore++;
                console.log("You win! Rock beats scissors");
            } else {
                console.log("It's a tie");
            }
            break;
        case paper :
            if (computerChoice == scissors) {
                computerScore++;
                console.log("You lose! Scissors beats paper");
            }
            else if(computerChoice == rock) {
                humanScore++;
                console.log("You win! Paper beats rock");
            } else {
                console.log("It's a tie");
            }
            break;
        case scissors : 
            if(computerChoice == rock) {
                computerScore++;
                console.log("You lose! Rock beats scissors");
            }
            else if(computerChoice == paper) {
                humanScore++; 
                console.log("You win! Scissors beats paper");
            } else {
                console.log("It's a tie");
            }
            break;
    }

    console.log(displayScore());
}

function determineWinner(humanScore,computerScore) {
    if(humanScore > computerScore) return "You win! Congratulation";
    else if(computerScore >  humanScore) return "You lose. Please try again!";
    else return "It's a tie! Please try again!";
}

function playGame(roundsPlayed) {
    for(let i = 0; i < roundsPlayed; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(determineWinner(humanScore,computerScore));
}

const buttonContainer = document.querySelector("#button-container");

buttonContainer.addEventListener(`click`, (Event) => {
    let target = Event.target;

    switch(target.id) {
        case 'rock':
            playRound(rock, getComputerChoice());
        break;
        
        case 'paper':
            playRound(paper, getComputerChoice());
        break;

        case 'scissors': 
            playRound(scissors, getComputerChoice());
        break;
    }
})
