function getComputerChoice() {
    let choice = Math.floor(Math.random() * (3) + 1);
    if(choice === 1){
        return 'Rock';
    }
    else if(choice === 2){
        return 'Paper'
    }
    else{
        return 'Scissors';
    }
}

function winningDecision(playerChoice){
    let choice = beautify(playerChoice);
    let compChoice = getComputerChoice();

     if(choice !== 'Rock' && choice !== 'Scissors' && choice !== 'Paper'){
         console.log("Please pick a valid choice...");
     }
     else if(choice === 'Rock' && compChoice === 'Rock' || choice === 'Scissors' && compChoice === 'Scissors' || choice === 'Paper' && compChoice === 'Paper'){
         console.log(`Wow!! What a match - you both tied with ${choice}.`);
    }
    else if(choice === 'Rock' && compChoice === 'Scissors' || choice === 'Paper' && compChoice === 'Rock' || choice === 'Scissors' && compChoice === 'Paper'){
        console.log(`Congratulations!! You won. ${choice} beats ${compChoice}.`);
    }
    else{
        console.log(`Sorry - try again next time! ${compChoice} beats ${choice}.`);
    }
}

function beautify(playerChoice){
    let firstLetter = (playerChoice.charAt(0)).toUpperCase();
    let restOfWord = (playerChoice.slice(1, playerChoice.length)).toLowerCase();
    return firstLetter + restOfWord;
}

winningDecision(prompt("Rock, paper or scissors?"));
