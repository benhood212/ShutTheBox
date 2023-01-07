let diceOne = 0;
let diceTwo = 0;

let shutNumbers = new Array();

function setDiceOptions(style){
    document.getElementById("useTotal").style.display = style;
    document.getElementById("useSplit").style.display = style;
}

function rollDice(){
    diceOne = Math.floor(Math.random()*6) + 1;
    diceTwo = Math.floor(Math.random()*6) + 1;

    document.getElementById("dice1").innerHTML = diceOne;
    document.getElementById("dice2").innerHTML = diceTwo;

    if(checkLossPotential()){
        document.getElementById("winLoss").innerHTML = "You Lost!";
        endGame();
    }
    else if(checkWinPotential()){
        document.getElementById("winLoss").innerHTML = "You Won!";
        endGame();
    }
}

function useTotal(){
    shutNumbers.push(diceOne + diceTwo);
    setDiceOptions("none");
    updateNumberDisplay();
}

function useSplit(){
    shutNumbers.push(diceOne);
    shutNumbers.push(diceTwo);
    setDiceOptions("none")
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
    diceOne = 0;
    diceTwo = 0;
    document.getElementById("dice1").innerHTML = diceOne;
    document.getElementById("dice2").innerHTML = diceTwo;
    shutNumbers = new Array();
    clearNumberDisplay();

}

setDiceOptions("none");