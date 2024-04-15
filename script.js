const Choice=["rock","paper","scissor"]

 
 
 function getComputerChoice(){

    let Computerchoice= Choice[Math.floor(Math.random() * Choice.length)];
    return Computerchoice;
 }


    // Ininate necessary varibles
  let playerScore=0
  let computerScore=0
  gameover= false
  let Scorereach=5
  // call and create elemtns for html
  const para= document.createElement("p") 
  const h4=document.createElement("H4")
  const h5= document.createElement("h5")
  const h1= document.createElement("h1")
  h4.innerText=(" Player Score : " + playerScore + " Computer Score : " + computerScore)
  document.getElementById("outcome").appendChild(h4)


    //function for singleround

 function singleRound(playerSelection, computerSelection){

    if (playerSelection=='rock' && computerSelection == 'scissor'
    || playerSelection=='scissor' && computerSelection == 'paper'
    || playerSelection=='paper' && computerSelection == 'rock'){
      para.innerText= `You Win ${playerSelection} beats ${computerSelection}`
      document.getElementById("outcome").appendChild(para)
      playerScore++
     h4.innerText=(" Player Score : " + playerScore + " Computer Score : " + computerScore)
     document.getElementById("outcome").appendChild(h4)
    
      

    }
   else if(playerSelection=='scissor' && computerSelection == 'rock'
   || playerSelection=='paper' && computerSelection == 'scissor'
   || playerSelection=='rock' && computerSelection == 'paper'){

    para.innerText=`You lose ${computerSelection} beats ${playerSelection}`
    document.getElementById("outcome").appendChild(para)
    computerScore++
    h4.innerText=(" Player Score : " + playerScore + " Computer Score : " + computerScore)
    document.getElementById("outcome").appendChild(h4)
   }

   else{
    para.innerText="Tie"
    document.getElementById("outcome").appendChild(para)
    h4.innerText=(" Player Score : " + playerScore + " Computer Score : " + computerScore)
    document.getElementById("outcome").appendChild(h4)
   }

 }



//calling the children of the html elemenets 

 const outcome= document.getElementById("outcome").children;

 const rock=outcome[0]
 const paper= outcome[1]
 const scissor= outcome[2]
 const reset=outcome[3]
 const para1= outcome[4]
 const para2=outcome[5]



 function events(){
 rock.addEventListener("click",function(){

if(!gameover){
  const computerSelection=getComputerChoice()
  const playerSelection='rock'
  rock.disabled= false;
  singleRound(playerSelection, computerSelection)
  endgame()
  rematch();
  winner()
  para1.innerText="Computer Selection: " + computerSelection;
  para2.innerText="Player Selection: " + playerSelection
}


 
 })
 
  paper.addEventListener("click",function(){
    if (!gameover){
      const computerSelection=getComputerChoice()
      const playerSelection='scissor'
      paper.disabled= false;
      singleRound(playerSelection, computerSelection)
      endgame()
      rematch()
      winner()

     
      }
    
    
     })


 scissor.addEventListener("click",function(){
  if (!gameover){
  const computerSelection=getComputerChoice()
  const playerSelection='scissor'
  scissor.disabled=false;
 singleRound(playerSelection, computerSelection)
 endgame()
 rematch()
 winner()
 
  }

 })
}

 
 
 //First to reach 5 wins 
function endgame(){
  if(playerScore==Scorereach || computerScore==Scorereach){
    rock.disabled= true;
    paper.disabled= true;
    scissor.disabled=true

  }
  else if(playerScore==Scorereach && playerScore>computerScore){
    rock.disabled= true;
    paper.disabled= true;
    scissor.disabled=true

  }
  else if (computerScore==Scorereach && playerScore<computerScore){
    rock.disabled= true;
    paper.disabled= true;
    scissor.disabled=true


  }

}
//Winner is declared     
function winner(){
  if(playerScore>computerScore && playerScore==Scorereach ){
    h1.innerText=("Player wins")
    document.getElementById("outcome").appendChild(h1)

  }
  else if(playerScore<computerScore && computerScore==Scorereach){
    h1.innerText=("Computer wins")
    document.getElementById("outcome").appendChild(h1)
      
  }
  
}

function rematch(){
  reset.addEventListener("click",function(){
    playerScore=0
    computerScore=0
    rock.disabled= false;
    paper.disabled= false;
    scissor.disabled=false;
    //document.getElementById("outcome").innerText="";
    h4.innerText=(" Player Score : " + playerScore + " Computer Score : " + computerScore)
    h1.innerText=""
    
    document.getElementById("outcome").appendChild(h4)
    para.innerText= ""
    para1.innerText=" Computer Selectio: "
    para2.innerText=" Player Selection: "
    
   

    if((playerScore==Scorereach || computerScore==Scorereach)){

      singleRound(playerSelection, computerSelection)
      events;
    }
    
    


  })
  
}

events()

