let goof = null;
let playerSelection = ""; 
const Selections = {
    0: "rock",
    1: "paper",
    2: "scissors"
}

for(idx = 0; idx < 5; idx++)console.log(playRound(getPlayerSelection(), getComputerSelection()));

function getPlayerSelection(){
    do{ 
        //reset goof variable for multiple runs
        goof = null; 
        // Prompt the user for their playerSelection. store in variable
        playerSelection = prompt("Rock (1), Paper (2), Scissors(3)\nWhat is your choice? Select a number 1-3:");
        // validate playerSelection
            // if it doesn't exist
        if (!playerSelection){
            alert("You done goofed, try again");
        }
            // it it's not 1, 2, or 3 
        else if (playerSelection != 1 && playerSelection != 2 && playerSelection != 3){
            //clear whatever garbage this """yEw-ZuRr""" tried feeding to us
            playerSelection = null;
            alert("You done goofed, try again");
        } 
        goof = !goof ? playerSelection : null; 
    } while (!goof)
                            //shift to 0 base
    return playerSelection - 1;
}

function getComputerSelection(player)
{
    // Roll opponent choice until it doesn't match the users choice, random number 0-2
    let computerRoll = null;
    do{
        computerRoll = Math.floor(Math.random() * 3);
    } while (computerRoll == playerSelection - 1);
    return computerRoll;
}

// Compare choices, evaluate who wins, tell user how it went
function playRound(playerSelection, computerSelection)
{
    return (playerSelection + 2) % 3 == (computerSelection + 3) % 3 
    ? `You win! ${Selections[playerSelection]} beats ${Selections[computerSelection]}` 
    : `You lose! ${Selections[computerSelection]} beats ${Selections[playerSelection]}`;
}
