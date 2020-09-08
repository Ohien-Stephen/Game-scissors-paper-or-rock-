const choices = ['scissors', 'paper', 'rock'];

const computerPlay = () =>{
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return(computerSelection);
}


const userPlay = () => {
    let playerSelection = prompt("scissors, paper or rock - Please enter your choice");
    return(playerSelection);
}

let player = userPlay().toLowerCase();;
let computer = computerPlay();

const playRound = (playerSelection ,computerSelection) => {

    if(playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log(`You win! ${playerSelection} beats ${computerSelection}­`);
    }

        else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log(`You win! ${playerSelection} beats ${computerSelection}­`);
        }

        else if(playerSelection === 'paper' && computerSelection === 'rock'){
        console.log(`You win! ${playerSelection} beats ${computerSelection}­`);
        }

        else if(playerSelection === computerSelection){
        console.log("Its a draw");
        }

        else{
        console.log(`You Lose! ${computerSelection}­ beats ${playerSelection}`);
        }
}
playRound( player ,computer );