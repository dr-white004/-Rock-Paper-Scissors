function getComputerChoice(){
    let y = "paper"
    let h = "rock" 
   let z = "scisors" 

 let q = Math.floor((Math.random() * 3) + 1);
   if (q == 3)
   return y;
   else if( q == 1)
   return h;
   else if (q == 2)
    return z;
}


function playRound(playerSelection, computerSelection) {
   let v = prompt("make your choice : ")
   playerSelection = v.toLowerCase()
   computerSelection = getComputerChoice()

   if (playerSelection === computerSelection)
     return "it is a tie";
   else if (playerSelection == "rock" && computerSelection== "paper" || playerSelection== "paper"
    && computerSelection =="scisors"  || playerSelection =="scisors" && computerSelection== "rock")
      return "you loose";

  else if (playerSelection == "paper" && computerSelection== "rock" || playerSelection== "rock"
  && computerSelection =="scisors"  || playerSelection =="scisors" && computerSelection== "paper")
    return "you win";
  
}
let win = 0
let loose = 0

function game(){
  for (let i = 0; i < 5; i++) {
   let resul = playRound();
   let result =resul.toString()

   console.log(result)

   switch (result) {
        case"you loose": 
            loose++;
            break;
        case"you win":
            win++;
            break;
   }

    // if (result == "you loose")
    //   loose=loose + 1;

    // else if (result = "you win")
    //    win= win +1;
  }
  console.log(loose)
  console.log(win)
    if (win > loose)
     return "hurray";

    else if (loose > win) 
      return "loser";

    else if (loose == win)  
    return "you did your best";
    
  
}