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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    switch(humanChoice) {
        case rock :
            if (computerChoice == paper) {
                computerChoice++;
                console.log("You lose! Paper beats rock");
            }
            else if(computerChoice == scissors) {
                humanScore++;
                console.log("You win! Rock beats scissors")
            } else {
                console.log("It's a tie")
            }
            break;
    }
}