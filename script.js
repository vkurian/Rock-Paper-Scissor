const Choice=["rock","paper","scissor"]

 
 
 function getComputerChoice(){

    let Computerchoice= Choice[Math.floor(Math.random() * Choice.length)];
    return Computerchoice;
 }

 getComputerChoice()

 function singleRound(playerSelection, computerSelection){
    if (playerSelection=='rock' && computerSelection == 'scissor'
    || playerSelection=='scissor' && computerSelection == 'paper'
    || playerSelection=='paper' && computerSelection == 'rock'){
        console.log(`You Win ${playerSelection} beats ${computerSelection}`)
    }
   else if(playerSelection=='scissor' && computerSelection == 'rock'
   || playerSelection=='paper' && computerSelection == 'rock'
   || playerSelection=='rock' && computerSelection == 'paper'){

    console.log(`You lose ${computerSelection} beats ${playerSelection}`)
   }

   else{
    console.log("Tie")
   }

 }

const playerSelection = "rock";
const computerSelection = getComputerChoice();
singleRound(playerSelection, computerSelection)