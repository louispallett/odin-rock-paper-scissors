let userScore = 1;
let computerScore = 1;
let userChoice;

//User selection variables
const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorsButton = document.querySelector("#Scissors");

//take in the user's choice
rockButton.addEventListener('click', (e) => {
    console.log(playRound(e.target.id, computerChoice));
})

paperButton.addEventListener('click', (e) => {
    console.log(playRound(e.target.id, computerChoice));
})

scissorsButton.addEventListener('click', (e) => {
    console.log(playRound(e.target.id, computerChoice));
})

//Create a function to play the game in 5 rounds
    let computerChoice = ["Rock", "Paper", "Scissors"];

        function getComputerChoice()
        {
            
            //We need to select one of those at random
            let randomiseComputerChoice = Math.floor(Math.random() * computerChoice.length) + 1;

            //We need to define the array numbers as strings
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

//calculate final result
function finalResult()
{
    if(userScore > computerScore)
    {
        return("You scored a total of " + (userScore - 1) + ", whilst the computer scored a total of " + (computerScore - 1) + ". Well done - you won!");
    } else if (userScore < computerScore)
    {
        return("You scored a total of " + (userScore - 1) + ", whilst the computer scored a total of " + (computerScore - 1) + ". Better luck next time!");
    } else 
    {
        return("You scored a total of " + (userScore - 1) + ", whilst the computer scored a total of " + (computerScore - 1) + ". You tied! Care to refresh and try again?")
    }
}
//set out rules: rock beats scissors, scissors beats paper, paper beats rock
//test result based on player choice and computer's choice
function playRound (userChoice, computerChoice)
{
    //Score DOM variables
    const resultContainer = document.querySelector(".scores-inner");
    const roundResult = document.createElement("div");

    computerChoice = (getComputerChoice());
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
        return(finalResult());
    }
}

//Return final result and verdict
//console.log(finalResult());

/* Creating the UI for the website:

Tasks:
    Allow the userChoice to equal what the user selects.
        If the user presses this, userChoice is equal to this (i.e. rock button user choice is "rock")
    
    Display compChoice
        Should ONLY display choice once selection is made (and by extension, when results are displayed)
    
    Display result of round (and round number)
    
    Display final result.*/
