let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


function generateTarget() {
    return Math.floor(Math.random() * 9)
}

function compareGuesses(userGuess, compGuess, secretNum){
    if(Math.abs(userGuess - secretNum) < Math.abs(compGuess - secretNum) || Math.abs(userGuess - secretNum) === Math.abs(compGuess - secretNum)) {
        return true
    } else if(Math.abs(compGuess - secretNum) < Math.abs(userGuess - secretNum)) {
        return false
    }
}

function updateScore(winner){
    if(winner === 'human'){
        humanScore += 1
    } else if(winner === 'computer'){
        computerScore += 1
    }
}

function advanceRound() {
    currentRoundNumber += 1
}
