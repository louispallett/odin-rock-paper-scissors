# odin-rock-paper-scissors
The Odin Project - Rock Paper Scissors Project

Part of The Odin Project Foundations course. Create a game of "rock, paper, scissors". Played entirely in the console.

26.02.23 - Prompted user to give result (ensuring this is not case sensitive) and directed the computer to give a random choice of "Rock", "Paper", or "Scissors".

26.02.23 (22:30) - Added play round function. Cleaned up code created early to ensure the round works (redefining variables so not using functions as parameters).

26.02.23 (23:54) - Added loop to play 5 times.

27.02.23 (19:06) - Added a function to keep score of player and computer. Added function to return final result. Project now complete.

27.02.23 (19:10) - Reflection and debrief.

    Things I found straightforward:

        Getting a choice from the user (I thought immediately of prompt()).

        Ensuring this choice was case insensitive (I knew to use the slice() command although I had to look up the exact syntax).

        Calculating the number of rounds - I knew that I had to use a for loop here, although it took a few tries.


    Things I found challenging:

        Getting a result from the computer:

            This was by far the most challenging task. Initially, I didn't really know where to start. So, I followed TOP's advice - understand the problem, plan, and break it down into smaller problems. Wrote out some pseudocode. This helped A LOT - once I'd done this, and once I'd started thinking about the first problem I thought - an Array, maybe? 

            That worked. For the other problems I did have to look up syntax (such as making a random choice with Math.floor() etc.).

            Finally, remember to redefine variables as the functions before passing them to the log. Such as the computerChoice (as it had to equal the results of the getComputerChoice() function).

        Running the playRound() function:

            At first I thought to write out a switch statement - that didn't really work (although upon reflection it may have done), so I went back to an if statement. 
            
            From here on out it wasn't too difficult, one I remembered to use && and === operators!

        Keeping a score and calculating a final result:

            I knew I had to increment these variables here - it was just how I put this into the function. In the end, it was the simpliest solution which worked - just ' + (userScore++)' on the end of the return statement, because I was just saying a sentence.

            At first I tried it without the parentheses, but then remembered that it is a calculation still! so it has to be (userScore++) = not just userScore++ (in this instance).

        Outputting the final result:

        I'm still not completely happy with this, as the final result was + 1 the actual final result, so I just did a quick fix of (userScore - 1). Still, it works, although it is a bit messy.

        I knew I had to use an if... else if statement here and just do a greater or less than parameter.

    
    The main thing I learnt, however, was that breaking down everything REALLY helps - it allowed me to come up with my own solutions to fixing the problem, rather than just looking up the big issues and copying code. I would never have though about Arrays if I hadn't written that pseudocode!