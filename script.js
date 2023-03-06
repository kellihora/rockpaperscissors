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

function playRound(playerChoice, compChoice, score){
    let choice = beautify(playerChoice);

     if(choice !== 'Rock' && choice !== 'Scissors' && choice !== 'Paper'){
         alert("Please pick a valid choice...Round wasted.");
         return score;
     }
     else if(choice === 'Rock' && compChoice === 'Rock' || choice === 'Scissors' && compChoice === 'Scissors' || choice === 'Paper' && compChoice === 'Paper'){
         alert(`Wow!! What a match - you both tied with ${choice}.\nScore: ${score}`);
         return score;
    }
    else if(choice === 'Rock' && compChoice === 'Scissors' || choice === 'Paper' && compChoice === 'Rock' || choice === 'Scissors' && compChoice === 'Paper'){
        score++;
        alert(`Congratulations!! You won. ${choice} beats ${compChoice}.\nScore: ${score}`);
        return score;
    }
    else{
        alert(`Sorry - try again next time! ${compChoice} beats ${choice}. \nScore: ${score}`);
        return score;
    }
}

function beautify(playerChoice){
    let firstLetter = (playerChoice.charAt(0)).toUpperCase();
    let restOfWord = (playerChoice.slice(1, playerChoice.length)).toLowerCase();
    return firstLetter + restOfWord;
}

function game(){
    let compChoice = getComputerChoice();
    let score = 0;
    let playerChoice;

   for(let i = 0; i <5; i++ ){
        playerChoice = prompt("Rock, Paper, Scissors?");
        score = playRound(playerChoice, compChoice, score);
   }
    
    if(score >=3){
        alert(`Game over!! Your final score was: ${score}. Great job!`);
    }
    else{
        alert(`Game over!! Your final score was: ${score}. Try again next time.`);
    }
}

game();
