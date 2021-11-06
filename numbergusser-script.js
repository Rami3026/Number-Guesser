let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
generateTarget = () => {
    return Math.floor(Math.random() * 10)
}
function compareGuesses(humanGuess, computerGuess, targetGuess) {
  computerGuess = generateTarget();

  humanPoint = Math.abs(targetGuess - humanGuess);
  computerPoint = Math.abs(targetGuess - computerGuess);
  console.log(humanPoint);
  console.log(computerPoint);
  
  if (computerPoint >= humanPoint ) {
    return true;
  } else if (computerPoint < humanPoint) {
    return false;
  }
}
/* Project says that we need an updateScore function that takes in only one argument named winner, which will come back as either 'human' or 'computer'. So if the winner comes as 'human' I am to increase the humanScore by 1 else if it comes as 'computer' the computerScore is to increase by 1.
*/

function updateScore(winner) {
  if (winner = 'human') {
    humanScore = humanScore + 1;
  } else {
    computerScore = computerScore + 1;
  }
}

function advanceRound() {
  currentRoundNumber++
}

