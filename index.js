//take in the user's choice
let userChoice = prompt("Rock, Paper, or Scissors?", "Rock");

//ensure users choice is not case sensitive (i.e. rock or Rock or rOck is accepted)
function userChoiceCapitalize (userChoice)
{
    return userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
}

//print userChoice (check)
userChoice = userChoiceCapitalize(userChoice);
console.log(userChoice);

//randomly generate the computer's choice

    //Pseudocode:
    //We need to define three string values.

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
    //We need to print out the getComputerChoice() function
    
    computerChoice = (getComputerChoice());
    console.log(computerChoice);
    

//set out rules: rock beats scissors, scissors beats paper, paper beats rock
//test result based on player choice and computer's choice

//return result
function playRound (userChoice, computerChoice)
{
    if (userChoice === "Paper" && computerChoice === "Rock")
    {
        return("Paper beats rock, you won!");
    } else if (userChoice === "Paper" && computerChoice === "Scissors")
    {
        return("Scissors beats paper, you lost!");
    } else if (userChoice === "Scissors" && computerChoice === "Rock")
    {
        return("Rock beats scissors, you lost!");
    } else if (userChoice === "Scissors" && computerChoice === "Paper")
    {
        return("Scissors beats paper, you won!");
    } else if (userChoice === "Rock" && computerChoice === "Paper")
    {
        return("Paper beats rock, you lost!");
    } else if (userChoice === "Rock" && computerChoice === "Scissors")
    {
        return("Rock beats scissors, you won!");
    } else 
    {
        return("You tied!");
    }
}

console.log(playRound(userChoice, computerChoice));




