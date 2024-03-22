const Choice=["rock","paper","scissor"]

 
 
 function getComputerChoice(){

    let Computerchoice= Choice[Math.floor(Math.random() * Choice.length)];
    return Computerchoice;
 }
 function playerChoice(){
    //var humanChoice=prompt("Rock, Paper OR Scissor")
    //var humanChoiceinLower=humanChoice.toLowerCase()
    let input=false;
    
    
    while(input==false){
        var humanChoice=prompt("Rock, Paper OR Scissor")
        if (humanChoice==null){
            continue;
        }
         
    var humanChoiceinLower= humanChoice.toLowerCase()
    if(Choice.includes(humanChoiceinLower)){
        input=true;
        return humanChoiceinLower;
    }

    }
}
    

    
    

 function singleRound(playerSelection, computerSelection){
    if (playerSelection=='rock' && computerSelection == 'scissor'
    || playerSelection=='scissor' && computerSelection == 'paper'
    || playerSelection=='paper' && computerSelection == 'rock'){
        return `You Win ${playerSelection} beats ${computerSelection}`
    }
   else if(playerSelection=='scissor' && computerSelection == 'rock'
   || playerSelection=='paper' && computerSelection == 'rock'
   || playerSelection=='rock' && computerSelection == 'paper'){

    return `You lose ${computerSelection} beats ${playerSelection}`
   }

   else{
    return "Tie"
   }


 }

 function playGame(){
    var playerScore=0;
    var computerScore=0;
  for(let i=0; i<5; i++){
  var playerSelection =  playerChoice(); 
  var computerSelection = getComputerChoice();


  console.log( singleRound(playerSelection, computerSelection))
  console.log("____________________________________")

  if(singleRound(playerSelection, computerSelection)==`You Win ${playerSelection} beats ${computerSelection}`){
    playerScore++
  }
  else if(singleRound(playerSelection, computerSelection)==`You lose ${computerSelection} beats ${playerSelection}`){
    computerScore++
  }

  
  }
  console.log("Total winner");
  if (playerScore>computerScore){
    console.log(`you win the game palyerscore`)
}

else if (playerScore<computerScore){
    console.log(`Computer wins the game `)
}

else{
    console.log("ITs a Tie game ")
}

 }

 playGame()