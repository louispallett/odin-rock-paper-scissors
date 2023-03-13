let userScore = 1;
let computerScore = 1;
let userChoice;

//User selection variables
const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorsButton = document.querySelector("#Scissors");

//take in the user's choice via event listeners
rockButton.addEventListener('click', (e) => 
{
    console.log(playRound(e.target.id, computerChoice));
})

paperButton.addEventListener('click', (e) => 
{
    console.log(playRound(e.target.id, computerChoice));
})

scissorsButton.addEventListener('click', (e) => 
{
    console.log(playRound(e.target.id, computerChoice));
})

//calculate computer choice each round
let computerChoice = ["Rock", "Paper", "Scissors"];

function getComputerChoice()
{
    //Select one value of array at random
    let randomiseComputerChoice = Math.floor(Math.random() * computerChoice.length) + 1;

    //Define index of array as strings
    if (randomiseComputerChoice === 1)
    {
        return "Rock";
    } else if (randomiseComputerChoice === 2)
    {
        return "Paper";
    } else if (randomiseComputerChoice === 3)
    {
        return "Scissors";
    }
}

function playRound (userChoice, computerChoice)
{
    computerChoice = (getComputerChoice());

    //Variables to define and show final result
    const finalResultContainer = document.querySelector(".final-result");
    const finalResultText = document.createElement("div");

    //Score DOM variables
    const resultContainer = document.querySelector(".scores-inner");
    const roundResult = document.createElement("div");
    
    //Run round and present results
    if (userScore < 6 && computerScore < 6)
    {
        if (userChoice === "Paper" && computerChoice === "Rock")
        {
            roundResult.textContent = `You chose: ${userChoice}, the computer chose: ${computerChoice}. Paper beats rock, you won! Your score is ` + (userScore++);
            resultContainer.appendChild(roundResult);
        } else if (userChoice === "Paper" && computerChoice === "Scissors")
        {
            roundResult.textContent = `You chose: ${userChoice}, the computer chose: ${computerChoice}. Scissors beats paper, you lost! The computer's score is ` + (computerScore++);
            resultContainer.appendChild(roundResult);
        } else if (userChoice === "Scissors" && computerChoice === "Rock")
        {
            roundResult.textContent = `You chose: ${userChoice}, the computer chose: ${computerChoice}. Rock beats scissors, you lost! The computer's score is ` + (computerScore++);
            resultContainer.appendChild(roundResult);
        } else if (userChoice === "Scissors" && computerChoice === "Paper")
        {
            roundResult.textContent = `You chose: ${userChoice}, the computer chose: ${computerChoice}. Scissors beats paper, you won! Your score is ` + (userScore++);
            resultContainer.appendChild(roundResult);
        } else if (userChoice === "Rock" && computerChoice === "Paper")
        {
            roundResult.textContent = `You chose: ${userChoice}, the computer chose: ${computerChoice}. Paper beats rock, you lost! The computer's score is ` + (computerScore++);
            resultContainer.appendChild(roundResult);
        } else if (userChoice === "Rock" && computerChoice === "Scissors")
        {
            roundResult.textContent = `You chose: ${userChoice}, the computer chose: ${computerChoice}. Rock beats scissors, you won! Your score is ` + (userScore++);
            resultContainer.appendChild(roundResult);
        } else 
        {
            roundResult.textContent = `You chose: ${userChoice}, the computer chose: ${computerChoice}. You tied!`;
            resultContainer.appendChild(roundResult);
        }
    } else 
    {
        //When finished, show results
        finalResultText.setAttribute("style", "padding: 10px; font-size: 24px; font-weight: bold; border: 3px solid black; background-color: #0A23AA;")
        if(userScore > computerScore)
        {
            finalResultText.textContent = "You scored a total of " + (userScore - 1) + ", whilst the computer scored a total of " + (computerScore - 1) + ". Well done - you won!";
            finalResultContainer.appendChild(finalResultText);
        } else if (userScore < computerScore)
        {
            finalResultText.textContent = "You scored a total of " + (userScore - 1) + ", whilst the computer scored a total of " + (computerScore - 1) + ". Better luck next time!";
            finalResultContainer.appendChild(finalResultText);
        } else 
        {
            finalResultText.textContent = "You scored a total of " + (userScore - 1) + ", whilst the computer scored a total of " + (computerScore - 1) + ". You tied! Care to refresh and try again?";
            finalResultContainer.appendChild(finalResultText);
        }
    }
}