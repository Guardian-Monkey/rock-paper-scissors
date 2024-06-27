// Function returns the following string at random: rock, paper, or scissors
function getComputerChoice() {
    // Multiply the random number by 3, and floor it so the max is whole; add 1 to make the range from 1 to 3
    let num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) return "rock";
    else if (num == 2) return "paper";
    else return "scissors";
}