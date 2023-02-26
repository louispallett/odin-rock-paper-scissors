//take in the user's choice

let userChoice = prompt("Rock, paper, or scissors?", "Rock");

//ensure users choice is not case sensitive (i.e. rock or Rock or rOck is accepted)
function userChoiceCapitalize (userChoice)
{
    return userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
}

//print user choice (check)
console.log(userChoiceCapitalize(userChoice));

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
    console.log(getComputerChoice());
    

//set out rules: rock beats scissors, scissors beats paper, paper beats rock

//test result based on player choice and computer's choice

//return result

//return result via the console.