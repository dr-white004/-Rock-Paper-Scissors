
//variable for scores
 let computerScore = 0;
 let humanScore = 0;


// function to get computer choice
function getComputerChoice(){
    let y = "paper"
    let h = "rock" 
   let z = "scissors" 

 let q = Math.floor((Math.random() * 3) + 1);
   if (q == 3)
   return y;
   else if( q == 1)
   return h;
   else if (q == 2)
    return z;
}

// function to get human choice and play the game
function clickChoice(e){
  let answer = e.target;
  console.log(answer);

 if (answer.id === ('roc')){
        let rock = 'rock';
       let s = playRound(rock)
        //conting scores
        if (s === "you loose"){
          computerScore++;
          console.log(`computerScore : ${computerScore}`)
        }
        else if (s === "you win"){
          humanScore++;
          console.log(`humanScore: ${humanScore}`)
        }
            //declaring winner
        if (computerScore ==5){
          console.log ('computer wins');
          computerScore = 0;
          humanScore = 0;
          const result= document.createElement('p');
          result.classList.add('result');
          result.textContent = `end result:computer wins`;
          result.style.setProperty('border','1px solid black')
          container.appendChild(result);
        }
        
        else if (humanScore == 5){
          console.log('hurray! you are a conqueror');
          computerScore = 0;
          humanScore = 0;
          const result= document.createElement('p');
          result.classList.add('result');
          result.textContent = `end result:hurray! you are a conqueror`;
          result.style.setProperty('border','1px solid black')
          container.appendChild(result);
        }
        //adding dom element for player selection
        const engag= document.createElement('p');
        engag.classList.add('engag');
        engag.textContent = 'playerselection: rock';
        container.appendChild(engag);
          console.log('playerselection: rock');
    }

  else if (answer.id ===('sci')){
          let scissors='scissors';
          let r = playRound(scissors)
            //conting scores
          if (r === "you loose"){
            computerScore++;
            console.log(`computerScore : ${computerScore}`)
          }
          else if (r === "you win"){
            humanScore++;
            console.log(`humanScore: ${humanScore}`)
          }
              //declaring winner
          if (computerScore ==5){
            console.log ('computer wins');
            computerScore = 0;
            humanScore = 0;
            const result= document.createElement('p');
            result.classList.add('result');
            result.textContent = `end result:computer wins`;
            result.style.setProperty('border','1px solid black')
            container.appendChild(result);
          }
          
          else if (humanScore == 5){
          console.log('hurray! you are a conqueror');
            computerScore = 0;
            humanScore = 0;
            const result= document.createElement('p');
            result.classList.add('result');
            result.textContent = `end result:hurray! you are a conqueror`;
            result.style.setProperty('border','1px solid black')
            container.appendChild(result);
          }

          //adding dom element for player selection
        const engag= document.createElement('p');
        engag.classList.add('engag');
        engag.textContent = 'playerselection: scissors';
        container.appendChild(engag);
              console.log('playerselection: scissors');
       }

  else if (answer.id ===('pap')){
          let paper ='paper';  
        let q =  playRound(paper)

        //conting scores
        if (q === "you loose"){
          computerScore++;
          console.log(`computerScore : ${computerScore}`)
        }
        else if ( q === "you win"){
          humanScore++;
          console.log(`humanScore: ${humanScore}`)
        }
          //declaring winner
        if (computerScore ==5){
          console.log ('computer wins');
          computerScore = 0;
          humanScore = 0;
          const result= document.createElement('p');
          result.classList.add('result');
          result.textContent = `end result:computer wins`;
          result.style.setProperty('border','1px solid black')
          container.appendChild(result);
        }
        
        else if (humanScore == 5){
          console.log('hurray! you are a conqueror');
          computerScore = 0;
          humanScore = 0;
          const result= document.createElement('p');
          result.classList.add('result');
          result.textContent = `end result:hurray! you are a conqueror`;
          result.style.setProperty('border','1px solid black')
          container.appendChild(result);
        }

            //adding dom element for player selection
        const engag= document.createElement('p');
        engag.classList.add('engag');
        engag.textContent = 'playerselection: paper';
        container.appendChild(engag);
          console.log('playerselection: paper');

      }
       
}

// funtion that actually plays the game
function playRound(playerSelection, computerSelection) {
   computerSelection = getComputerChoice()
   //adding dom element for computer selection
   const engage= document.createElement('p');
   engage.classList.add('engage');
   engage.textContent = `computerSelection: ${computerSelection}`;
   engage.style.setProperty('border','1px solid black')
   container.appendChild(engage);
   console.log(`computerSelection: ${computerSelection}`);
   
   if (playerSelection === computerSelection){
    //adding dom element for possible result
   const enga= document.createElement('p');
   enga.classList.add('enga');
   enga.textContent = "it is a tie";
   container.appendChild(enga);
   console.log('it is a tie')
     return "it is a tie";
   }     

   else if (playerSelection == "rock" && computerSelection== "paper" || playerSelection== "paper"
    && computerSelection =="scissors"  || playerSelection =="scissors" && computerSelection== "rock"){
        //adding dom element for possible result
      const enga= document.createElement('p');
      enga.classList.add('enga');
      enga.textContent = 'you loose';
      container.appendChild(enga);
     let h = 'you loose'
      console.log(h)
      return h;
    }
  else if (playerSelection == "paper" && computerSelection== "rock" || playerSelection== "rock"
  && computerSelection =="scissors"  || playerSelection =="scissors" && computerSelection== "paper"){
       //adding dom element for possible result
       const enga= document.createElement('p');
       enga.classList.add('enga');
       enga.textContent = 'you win';
       container.appendChild(enga);
       let g = 'you win'
       console.log(g)
        return g;
  }
}


// adding event listeners to all button the page for the to identify as human choice.
      const buttons = document.querySelectorAll('button')
      buttons.forEach(button => button.addEventListener('click',clickChoice))

// converting the parent div to dom element
 const container = document.querySelector("#container")
 

 








//let win = 0
//let loose = 0

// making the playround function go five times

// function game(){
//   for (let i = 0; i < 5; i++) {
//    let resul = playRound();
//    let result =resul.toString()

//    console.log(result)

//    switch (result) {
//         case"you loose": 
//             loose++;
//             break;
//         case"you win":
//             win++;
//             break;
//    }


    // if (result == "you loose")
    //   loose=loose + 1;

    // else if (result = "you win")
    //    win= win +1;
//  // }

//   console.log(loose)
//   console.log(win)
//     if (win > loose)
//      return "hurray";

//     else if (loose > win) 
//       return "loser";

//     else if (loose == win)  
//     return "you did your best";
    
  


