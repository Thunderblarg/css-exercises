let score = 0;
let wins = 0;
let victoryMessage = "You will must be a winner!";
let defeatMessage = "You have been taste defeat"; 
let youWin = "Your opponent has been beaten!";
let gameWin = `<p>You have dealt a killing blow to your opponent. You are victorious!</p>
               <p>Would you like to play again?</p>
               <button id="reset">Yes!</button>`;
let gameLoss = `<p>Your soul ejects itself from your body. 
                    You look upon your body from a floating vantage point. 
                    You are dead!</p>
                <p>Would you like to play again?</p>
                <button id="reset">Holy Fuck!</button>`;
let youreAlive = `<p>You rise from the beyond to avenge yourself!</p>
                  <p>What say you?</p>`;
let opponentAlive = `<p>Your opponent rises from the grave and challenges you to a rematch!</p>
                     <p>What say you?</p>`;    






document.addEventListener( "DOMContentLoaded", function(){
    document.removeEventListener("DOMContentLoaded", arguments.callee, false);
    let buttons = document.querySelectorAll('button');
    let goof = null;
    let playerSelection = ""; 
    const Selections = {
        0: "rock",
        1: "paper",
        2: "scissors"
    };

    buttons.forEach(button =>{
        button.addEventListener("click", () => {
            printResults(playRound(button.id, getComputerSelection(button.id)));
        }); 
    });
});
    

function printResults(game){

    let prompt = document.getElementById("prompt");
    score += score < 5 ? score >= 0 ? 1 : 0
                       : 0;
    let bat = document.getElementById("bat-" + score);
    bat.innerHTML = game ? "Win!"
                         : "Lose!";
    bat.classList.add(game ? "winner"
                           : "loser");
    
    if (0 <= score && score < 5)
    {
        prompt.innerHTML =  game ? `<p>${victoryMessage}</p>
                                    <p>How do you follow up?</p>`
                                 : `<p>${defeatMessage}</p>
                                    <p>What do you do next??</p>`;
        wins += game ? 1 : 0;
    } 
    else if (score == 5)
    {
        score = -1;
        prompt.innerHTML = wins >=3 ? gameWin
                                    : gameLoss;
        document.getElementById("reset").addEventListener("click", () =>{
            // document.getElementById("reset").removeEventListener("click");
            prompt.innerHTML = game ? youreAlive
                                    : opponentAlive;
            score = 0;
            clearBoard();
        });
    }
    
}

function clearBoard(){
    document.querySelectorAll('li').forEach(battle => {
        battle.innerHTML = "";
        battle.classList.remove("winner");
        battle.classList.remove("loser");
        wins = 0;
    });
}




//for(idx = 0; idx < 5; idx++)console.log(playRound(getPlayerSelection(), getComputerSelection()));

function getComputerSelection(player)
{
    // Roll opponent choice until it doesn't match the users choice, random number 0-2
    let computerRoll = null;
    do{
        computerRoll = Math.floor(Math.random() * 3);
    } while (computerRoll == player);
    return computerRoll;
}

// Compare choices, evaluate who wins, tell user how it went
function playRound(playerSelection, computerSelection)
{
    // todo: remove ternary operator, it's redundant 
    return (playerSelection + 2) % 3 == computerSelection ? true : false;
}
