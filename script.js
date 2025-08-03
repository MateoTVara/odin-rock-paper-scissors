const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
let computerScore = 0;
let humanScore = 0;

let getComputerChoice = () => {
  let numericVal = Math.floor(Math.random() * 3) + 1;
  switch (numericVal){
    case 1:
      return ROCK;
    case 2:
      return PAPER;
    case 3:
      return SCISSORS;
  }
}

let getHumanChoice = () => {
  let stringVar = prompt("Please enter either 'Rock', 'Paper' or 'Scissors'");
  if (stringVar == null){
    console.log("Enter a valid option");
    return getHumanChoice();
  }
  stringVar = stringVar.toLowerCase();
  switch(stringVar){
    case ROCK:
      return ROCK
    case PAPER:
      return PAPER
    case SCISSORS:
      return SCISSORS
    default:
      console.log("Enter a valid option");
      return getHumanChoice();
  }
}

let playRound = (humanChoice, computerChoice) => {
  if (humanChoice == computerChoice) {
    return "tied this round"
  } else if (humanChoice == ROCK && computerChoice == SCISSORS ||
             humanChoice == PAPER && computerChoice == ROCK ||
             humanChoice == SCISSORS && computerChoice == PAPER){
    humanScore += 1;
    return "win this round"
  } else {
    computerScore += 1;
    return "lose this round"
  }
}

let playGame = () => {
  let i = 1;
  for (i; i <= 5; i++){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let loseOrWing = playRound(humanChoice, computerChoice);
    console.log(`Round ${i}:
                -Human: ${humanChoice}
                -Computer: ${computerChoice}\n\nyou ${loseOrWing}`)
  }
  let resultingScoreStr = `(H ${humanScore} - ${computerScore} C)`
  if (humanScore == computerScore) {
    alert(`TIED! ${resultingScoreStr}`)   
  } else if (humanScore < computerScore){
    alert(`Computer won ${resultingScoreStr}`)
  } else {
    alert(`Human won! ${resultingScoreStr}`)
  }
  console.clear()
  humanScore = 0;
  computerScore = 0;
}

playGame();