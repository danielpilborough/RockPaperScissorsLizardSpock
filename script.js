
const choices = ["Rock","Paper","Scissors","Lizard","Spock"];
let playerDisplay = document.getElementById("playerDisplay");
let computerDisplay = document.getElementById("computerDisplay");
let resultDisplay = document.getElementById("resultDisplay");
let playerScoreDisplay = document.getElementById("playerScoreDisplay");
let computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
let result;
let winnerDisplay = document.getElementById("winnerDisplay");
let scoreDisplay = document.getElementById("scoreDisplay");

// main function
function playGame(playerChoice){
    scoreDisplay.style.display = "inline";
    winnerDisplay.innerHTML = "";
    resultDisplay.classList.remove("green","red","orange")
    playerDisplay.innerHTML = `PLAYER: ${playerChoice}`;


    let ranNum = Math.floor(Math.random() * 5);
    computerChoice = choices[ranNum];
    computerDisplay.innerHTML = `COMPUTER: ${choices[ranNum]}`;

//check if user has won or lost and update score
    if(playerChoice === computerChoice){
        result = "You Tie!"
    }else if(
        (playerChoice === "Rock" && (computerChoice === "Scissors" || computerChoice === "Lizard")) ||
        (playerChoice === "Paper" && (computerChoice === "Rock" || computerChoice === "Spock")) ||
        (playerChoice === "Scissors" && (computerChoice === "Paper" || computerChoice === "Lizard")) ||
        (playerChoice === "Lizard" && (computerChoice === "Paper" || computerChoice === "Spock")) ||
        (playerChoice === "Spock" && (computerChoice === "Scissors" || computerChoice === "Rock"))
    ){
        result = "You Win!"
        playerScore++;
    }else{
        result = "You Lose!"
        computerScore++;
    }

// check outcome and update with flavour text
    if (
        (playerChoice === "Rock" && computerChoice === "Scissors" || playerChoice === "Scissors" && computerChoice === "Rock")
    ){
        result += " Rock Crushes Scissors!";
    }else if (
        (playerChoice === "Rock" && computerChoice === "Paper" || playerChoice === "Paper" && computerChoice === "Rock")
    ){
        result += " Paper Covers Rock!";
    }else if (
        (playerChoice === "Rock" && computerChoice === "Lizard" || playerChoice === "Lizard" && computerChoice === "Rock")
    ){
        result += " Rock Crushes Lizard!";
    }else if (
        (playerChoice === "Rock" && computerChoice === "Spock" || playerChoice === "Spock" && computerChoice === "Rock")
    ){
        result += " Spock Vaporizers Rock!";
    }else if (
        (playerChoice === "Paper" && computerChoice === "Spock" || playerChoice === "Spock" && computerChoice === "Paper")
    ){
        result += " Paper Disproves Spock!";
    }else if (
        (playerChoice === "Paper" && computerChoice === "Lizard" || playerChoice === "Lizard" && computerChoice === "Paper")
    ){
        result += " Lizard Eats Paper!";
    }else if (
        (playerChoice === "Paper" && computerChoice === "Scissors" || playerChoice === "Scissors" && computerChoice === "Paper")
    ){
        result += " Scissors Cuts Paper!";
    }else if (
        (playerChoice === "Scissors" && computerChoice === "Spock" || playerChoice === "Spock" && computerChoice === "Scissors")
    ){
        result += " Spock Smashes Scissors!";
    }else if (
        (playerChoice === "Scissors" && computerChoice === "Lizard" || playerChoice === "Lizard" && computerChoice === "Scissors")
    ){
        result += " Scissors Decapitates Lizard";
    }else if (
        (playerChoice === "Lizard" && computerChoice === "Spock" || playerChoice === "Spock" && computerChoice === "Lizard")
    ){
        result += " Lizard Poisons Spock!";
    }
    

    // add green or red class based on win or lose

    if(result.includes("You Win!")){
        resultDisplay.classList.add("green");
    }else if(result.includes("Lose!")){
        resultDisplay.classList.add("red");
    }else{
        resultDisplay.classList.add("orange");
    }

   


    resultDisplay.innerHTML = result;
    playerScoreDisplay.innerHTML = `Player Current Score: ${playerScore}`;
    computerScoreDisplay.innerHTML = `Computer Current Score: ${computerScore}`;

    // calculate the winner
    if(playerScore === 10 && computerScore != 10 ){
        winnerDisplay.innerHTML = "YOU WIN!";
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.innerHTML = "";
        computerScoreDisplay.innerHTML = "";
        playerDisplay.innerHTML = "";
        computerDisplay.innerHTML = "";
        resultDisplay.innerHTML = "";
        scoreDisplay.style.display = "none";
    }else if(playerScore != 10 && computerScore === 10 ){
        winnerDisplay.innerHTML = "YOU LOSE!";
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.innerHTML = "";
        computerScoreDisplay.innerHTML = "";
        playerDisplay.innerHTML = "";
        computerDisplay.innerHTML = "";
        resultDisplay.innerHTML = "";
        scoreDisplay.style.display = "none";
    }
}












