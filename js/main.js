const choices = ['scissors', 'paper', 'rock'];
const userInput = document.querySelector('#userInput');
const result = document.querySelector('#result');
const computerPlay = () =>{
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return(computerSelection);
}

const userPlay = () => {
    let playerSelection = userInput.value;
    return(playerSelection);
}

const playRound = (playerSelection ,computerSelection) => {
    if(playerSelection !== computerSelection){
        result.style.backgroundColor = "limegreen";
        result.innerHTML= `You win! ${playerSelection} beats ${computerSelection}­`;
        console.log(`You win! ${playerSelection} beats ${computerSelection}­`);
    }
    else if(playerSelection === computerSelection){
        result.style.backgroundColor = "gray";
        result.innerHTML= `Its a draw! ${computerSelection}­ & ${playerSelection}`;
        console.log("Its a draw");
    }

    else{
        result.style.backgroundColor = "crimson";
        result.innerHTML= `You Lose! ${computerSelection}­ beats ${playerSelection}`;
        console.log(`You Lose! ${computerSelection}­ beats ${playerSelection}`);
    }
}

document.querySelector('#submit').addEventListener('submit', function(e){
    e.preventDefault();    
    let player = userPlay().toLowerCase();
    let computer = computerPlay();
    if(choices.includes(player)){        
        playRound( player ,computer );
    }else{
        result.style.backgroundColor = "crimson";
        result.innerHTML= `You Lose! Please enter a valid options`;
        console.log(`You Lose! Please enter any of the above options`);
    }
});
