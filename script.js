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

 function playGame(){
    
  for(let i=0; i<5; i++){
  var playerSelection =  playerChoice(); 
  var computerSelection = getComputerChoice();

  console.log(singleRound(playerSelection, computerSelection))
  }
 }

 playGame()