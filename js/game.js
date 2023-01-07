let diceOne = 0;
let diceTwo = 0;

let shutNumbers = new Array();

function setDiceOptions(style){
    document.getElementById("useTotal").style.display = style;
    document.getElementById("useSplit").style.display = style;
}

function updateAttempts(){
    if(localStorage.attempts){
        localStorage.setItem("attempts",parseInt(localStorage.getItem("attempts")) + 1);
        document.getElementById("attemptNumber").innerHTML = localStorage.getItem("attempts");
    }
    else{
        localStorage.setItem("attempts",1);
        document.getElementById("attemptNumber").innerHTML = localStorage.getItem("attempts");
    }
}

function updateWins(){
    if(localStorage.wins){
        localStorage.setItem("wins",parseInt(localStorage.getItem("wins"))+1);
        document.getElementById("wonGames").innerHTML = localStorage.getItem("wins");
    }
    else{
        localStorage.setItem("wins",1);
        document.getElementById("wonGames").innerHTML = localStorage.getItem("wins");
    }
}

function rollDice(){
    document.getElementById("rollDice").style.display = "none";

    diceOne = Math.floor(Math.random()*6) + 1;
    diceTwo = Math.floor(Math.random()*6) + 1;

    document.getElementById("dice1").innerHTML = diceOne;
    document.getElementById("dice2").innerHTML = diceTwo;

    if(checkLossPotential()){
        document.getElementById("winLoss").innerHTML = "You Lost!";
        updateAttempts();
        endGame();
    }
    else if(checkWinPotential()){
        document.getElementById("winLoss").innerHTML = "You Won!";
        updateAttempts();
        updateWins();
        endGame();
    }
    else{
        document.getElementById("winLoss").innerHTML = "Pick Your Option!";
    }
}

function useTotal(){
    shutNumbers.push(diceOne + diceTwo);
    updateAfterSelection();
}

function useSplit(){
    shutNumbers.push(diceOne);
    shutNumbers.push(diceTwo);
    updateAfterSelection();
}

function updateAfterSelection(){
    setDiceOptions("none")
    document.getElementById("rollDice").style.display = "inline";
    document.getElementById("winLoss").innerHTML = "Roll the Dice!";
    updateNumberDisplay();

}

function updateNumberDisplay(){
    for(let i=0;i<shutNumbers.length;i++){
        document.getElementById(shutNumbers[i]+"").setAttribute("style","color:#00FF00;");
    }
}

function clearNumberDisplay(){
    for(let i=1;i<=9;i++){
        document.getElementById(i+"").setAttribute("style","color:#000000;");
    }
}

function checkLossPotential(){
    let total = diceOne + diceTwo;
    let totalImpossible = false;
    let splitImpossible = false;

    if(shutNumbers.indexOf(total)!=-1 || total>9){
        totalImpossible = true;
    }
    else{
        document.getElementById("useTotal").style.display = "inline";
        
    }

    if(shutNumbers.indexOf(diceOne)!=-1||shutNumbers.indexOf(diceTwo)!=-1 || diceOne == diceTwo){
        splitImpossible = true;
    }
    else{
        document.getElementById("useSplit").style.display = "inline";
    }

    if(totalImpossible&&splitImpossible){
        return true;
    }
    return false;
}

function checkWinPotential(){
    let won = true;
    for(let i=1;i<=9;i++){
        if(shutNumbers.indexOf(i) == -1){
            won = false;
        }
    }
    return won;
}

function endGame(){
    document.getElementById("rollDice").style.display = "none";
    setDiceOptions("none");


    document.getElementById("playAgain").style.display = "inline";
}

function playAgain(){
    document.getElementById("playAgain").style.display = "none";
    document.getElementById("rollDice").style.display = "inline";
    document.getElementById("dice1").innerHTML = "X";
    document.getElementById("dice2").innerHTML = "X";
    document.getElementById("winLoss").innerHTML = "Roll The Dice!";
    shutNumbers = new Array();
    clearNumberDisplay();
}

function loadAttemptsAndWins(){
    if(localStorage.attempts){
        document.getElementById("attemptNumber").innerHTML = localStorage.getItem("attempts");
    }
    else{
        document.getElementById("attemptNumber").innerHTML = 0;
    }
    if(localStorage.wins){
        document.getElementById("wonGames").innerHTML = localStorage.getItem("wins");
    }
    else{
        document.getElementById("wonGames").innerHTML = 0;
    }
}

loadAttemptsAndWins();
setDiceOptions("none");