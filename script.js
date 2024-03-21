const Choice=["rock","paper","scissor"]

 
 
 function getComputerChoice(){

    let Computerchoice= Choice[Math.floor(Math.random() * Choice.length)];
    console.log(Computerchoice);
 }

 getComputerChoice()