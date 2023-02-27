let userScore = 1;
let computerScore = 1;

//Create a function to play the game in 5 rounds
function game(numOfRounds)
{
    
    
    numOfRounds = numOfRounds || 0;
    let i;
    for(i = 1; i < numOfRounds; i++)
    {

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
        function playRound ()
        {
            if (userChoice === "Paper" && computerChoice === "Rock")
            {
                return("Paper beats rock, you won! Your score is " + (userScore++));
            } else if (userChoice === "Paper" && computerChoice === "Scissors")
            {
                return("Scissors beats paper, you lost! The computer's score is " + (computerScore++));
            } else if (userChoice === "Scissors" && computerChoice === "Rock")
            {
                return("Rock beats scissors, you lost! The computer's score is " + (computerScore++));
            } else if (userChoice === "Scissors" && computerChoice === "Paper")
            {
                return("Scissors beats paper, you won! Your score is " + (userScore++));
            } else if (userChoice === "Rock" && computerChoice === "Paper")
            {
                return("Paper beats rock, you lost! The computer's score is " + (computerScore++));
            } else if (userChoice === "Rock" && computerChoice === "Scissors")
            {
                return("Rock beats scissors, you won! Your score is " + (userScore++));
            } else 
            {
                return("You tied!");
            }
        }
        
        //return result
        console.log(playRound());  
    }
}

//Call function to initialize game
game(11);

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

//Return final result and verdict
console.log(finalResult());