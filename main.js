
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function getComputerChoice() {
    const num = getRandomInt(3);

        if (num == 1) return "rock";
        else if (num == 2) return "paper";
        else return "scissors";
        
}