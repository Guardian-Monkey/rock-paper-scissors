// Function returns the following string at random: rock, paper, or scissors
function getComputerChoice() {
    // Multiply the random number by 3, and floor it so the max is whole; add 1 to make the range from 1 to 3
    let num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) return "rock";
    else if (num == 2) return "paper";
    else return "scissors";
}

// Take correct input from the user
function getHumanChoice() {
    let input;
    do {
        input = prompt("Type rock, paper, or scissors: ").toLowerCase();
    } while (input != 'rock' && input != 'paper' && input != 'scissors');
    return input;
}

function playGame() {
    // Variables track the score of the user, and the computer
    let humanScore = 0;
    let computerScore = 0;

    // Create a function that plays a round of rock paper scissors
    // The function prints the winner to the console, and increments the score of the winner by 1
    const playRound = () => {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        if (computerChoice == humanChoice)
            console.log("Draw!");
        else if (humanChoice == 'rock' && computerChoice == 'paper') {
            console.log("Computer Wins!");
            computerScore++;
        }
        else if (humanChoice == 'rock' && computerChoice == 'scissors') {
            console.log("You Win!");
            humanScore++;
        }
        else if (humanChoice == 'paper' && computerChoice == 'rock') {
            console.log("You Win!");
            humanScore++;
        }
        else if (humanChoice == 'paper' && computerChoice == 'scissors') {
            console.log("Computer Wins!");
            computerScore++;
        }
        else if (humanChoice == 'scissors' && computerChoice == 'rock') {
            console.log("Computer Wins!");
            computerScore++;
        }
        else if (humanChoice == 'scissors' && computerChoice == 'paper') {
            console.log("You Win!");
            humanScore++;
        }
    }
}