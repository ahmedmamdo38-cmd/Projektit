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
<<<<<<< HEAD
                result = (computerChoice === "rock") ? "You win!" : "You lose!";
=======
                if (computerChoice === "rock") {
                    result = "You win!";
                    playerScore++;
                } else {
                    result = "You lose!";
                    computerScore++;
                }
>>>>>>> 0693cbb9c422014664f0fd95b86243c4d6789b9f
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

<<<<<<< HEAD
   playerScore.textContent = `Player: ${playerScore}`;
   cpuScore.textContent = `Computer: ${computerChoice}`
   resultDisplay.textContent = result;
}
=======
    // Päivitä tekstit
    playerScoreSpan.textContent = `Player: ${playerScore}`;
    cpuScoreSpan.textContent = `Computer: ${computerScore}`;
    resultDisplay.textContent = result;
}
>>>>>>> 0693cbb9c422014664f0fd95b86243c4d6789b9f
