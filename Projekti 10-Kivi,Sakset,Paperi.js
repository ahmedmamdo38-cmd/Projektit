const choices = ["rock", "paper", "scissor"];
const playerScore = document.getElementById("playerScore");
const cpuScore = document.getElementById("computerScore");
const timer = document.getElementById("timer");


function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(computerChoice);
    let result = "";

    if(playerChoice === computerChoice ){
        result = "it's a tie";
      
    } else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissor") ? "You win!" : "You lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win!" : "You lose!";
                break;
            case "scissor":
                result = (computerChoice === "paper") ? "You win!" : "You lose!";
                break;
        }
    }

   playerScore.textContent = `Player: ${playerScore}`;
   cpuScore.textContent = `Computer: ${computerChoice}`
   resultDisplay.textContent = result;
}