
var humanScore = 0;
var computerScore = 0;

function play (humanPlay, computerPlay) {
    console.log ("You played" + humanPlay + "." + "The bot played" + computerPlay + ".")

  if (humanPlay === computerPlay) {
    console.log ("You tied :/")
  } else if (humanPlay === "rock" && computerPlay === "scissors"
  || humanPlay === "scissors" && computerPlay === "paper"
  || humanPlay === "paper" && computerPlay === "rock") {
    console.log ("You win! :)");
var humanScore += 1;
  } else {
    console.log ("You lose. :(");
var computerScore += 1;
  }
console.log ("You have" + humanScore + "points.")
console.log ("The bot has" + computerScore + "points")
}

play ("rock", "paper");
play ("rock", "rock");
play ("rock", "scissors");
play ("paper", "paper");
play ("paper", "rock");
play ("paper", "scissors");
play ("scissors", "paper");
play ("scissors", "rock");
play ("scissors", "scissors");

// BONUS:
// Create a "best of 3" version

function bestOfThree (humanScore, computerScore) {
  if (humanScore === 2) {
    console.log ("You won the game!")
  } else if (computerScore == 2) {
    console.log ("Whoops! The computer won this time!")
  }
}

// SUPER CHALLENGE:
// Google and implement a random choice for the computer each time.
