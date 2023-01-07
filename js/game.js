let diceOne = 0;
let diceTwo = 0;

function rollDice(){
    diceOne = Math.floor(Math.random()*6) + 1;
    diceTwo = Math.floor(Math.random()*6) + 1;

    document.getElementById("dice1").innerHTML = diceOne;
    document.getElementById("dice2").innerHTML = diceTwo;
}