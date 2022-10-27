// Run through this until we get good input
let goof = null;
let input = ""; 
const Selections = {
    0: "rock",
    1: "paper",
    2: "scissors"
}
do{  
    // Prompt the user for their input. store in variable
    input = prompt("Rock (1), Paper (2), Scissors(3)\nWhat is your choice? Select a number 1-3:");
    // validate input
        // if it doesn't exist
    if (!input){
        alert("You done goofed, try again");
    }
        // it it's not 1, 2, or 3 
    else if (input != 1 && input != 2 && input != 3){
        //clear whatever garbage this """yEw-ZuRr""" tried feeding to us
        input = null;
        alert("You done goofed, try again");
    } 
    goof = !goof ? input : null; 
} while (!goof)
// shift user input to 0 base
input--;

// Roll opponent choice until it doesn't match the users choice, random number 0-2
let opponentChoice;
do{
    opponentChoice = Math.floor(Math.random() * 3);
} while (opponentChoice == input);
// Compare choices, evaluate who wins

console.log(`Input is: ${input}\n Opponent is ${opponentChoice}`);

// Compare choices, evaluate who wins, tell user how it went
(input + 2) % 3 == (opponentChoice + 3) % 3 ? console.log(`You selected ${Selections[input]}\nOpponent selected ${Selections[opponentChoice]}\nDid you win?`) : console.log(`You selected ${Selections[input]}\nOpponent selected ${Selections[opponentChoice]}\nDid you lose?`);
