const choices = ["rock", "paper", "scissor"];

// DOM-elementit
const playerScoreSpan = document.getElementById("playerScore");
const cpuScoreSpan = document.getElementById("computerScore");
const resultDisplay = document.getElementById("resultDisplay");

// Pistemäärät (numerot)
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log("Computer chose:", computerChoice);

    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else {
        switch (playerChoice) {
            case "rock":
                if (computerChoice === "scissor") {
                    result = "You win!";
                    playerScore++;
                } else {
                    result = "You lose!";
                    computerScore++;
                }
                break;

            case "paper":
                if (computerChoice === "rock") {
                    result = "You win!";
                    playerScore++;
                } else {
                    result = "You lose!";
                    computerScore++;
                }
                break;

            case "scissor":
                if (computerChoice === "paper") {
                    result = "You win!";
                    playerScore++;
                } else {
                    result = "You lose!";
                    computerScore++;
                }
                break;
        }
    }

    // Päivitä tekstit
    playerScoreSpan.textContent = `Player: ${playerScore}`;
    cpuScoreSpan.textContent = `Computer: ${computerScore}`;
    resultDisplay.textContent = result;
}
