// Function returns the following string at random: rock, paper, or scissors
function getComputerChoice() {
    // Multiply the random number by 3, and floor it so the max is whole; add 1 to make the range from 1 to 3
    let num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) return "rock";
    else if (num == 2) return "paper";
    else return "scissors";
}

function playGame() {
    // Variables track the score of the user, and the computer
    let humanScore = 0;
    let computerScore = 0;

    // Select the result div for displaying the result of playRound()
    const result = document.querySelector("#result");
    // Select the score spans to modify the scores of the players as each round finishes
    const humanSpan = document.querySelector("#humanScore");
    const computerSpan = document.querySelector("#computerScore");

    // Create a function that plays a round of rock paper scissors
    // The function prints the winner to the console, and increments the score of the winner by 1
    const playRound = (humanChoice) => {
        let computerChoice = getComputerChoice();
        if (computerChoice == humanChoice)
            result.textContent = "Draw!";
        else if (humanChoice == 'rock' && computerChoice == 'paper') {
            result.textContent = "Computer Wins!";
            computerScore++;
        }
        else if (humanChoice == 'rock' && computerChoice == 'scissors') {
            result.textContent = "You Win!";
            humanScore++;
        }
        else if (humanChoice == 'paper' && computerChoice == 'rock') {
            result.textContent = "You Win!";
            humanScore++;
        }
        else if (humanChoice == 'paper' && computerChoice == 'scissors') {
            result.textContent = "Computer Wins!";
            computerScore++;
        }
        else if (humanChoice == 'scissors' && computerChoice == 'rock') {
            result.textContent = "Computer Wins!";
            computerScore++;
        }
        else if (humanChoice == 'scissors' && computerChoice == 'paper') {
            result.textContent = "You Win!";
            humanScore++;
        }

        // Display the new scores of the player and the computer after every round
        computerSpan.textContent = computerScore;
        humanSpan.textContent = humanScore;

        // print the winner of the game to the console
        if (humanScore == 5 || computerScore == 5) {
            // Display the winner of the game within the result div
            result.textContent = humanScore == 5 ? "Congrats! You've won the game!" : "Aw shucks, the computer won the game! You lose!";
            // Reset the game
            humanScore = 0;
            humanSpan.textContent = 0;
            computerScore = 0;
            computerSpan.textContent = 0;
        }
    }

    // Add event listener to each button
    const choices = document.querySelectorAll("button");
    choices.forEach((choice) => {
        choice.addEventListener('click', () => {
            // call playRound() with the correct player selection
            let choiceStr = choice.getAttribute('id');
            playRound(choiceStr);
        });
    });

}

playGame();