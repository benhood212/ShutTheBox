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

    setDiceOptions("inline");
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

setDiceOptions("none")