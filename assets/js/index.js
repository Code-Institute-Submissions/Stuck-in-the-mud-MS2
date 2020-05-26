var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

dice1 = Math.floor(Math.random() * 7);
dice2 = Math.floor(Math.random() * 7);
dice3 = Math.floor(Math.random() * 7);
dice4 = Math.floor(Math.random() * 7);
dice5 = Math.floor(Math.random() * 7);


document.getElementById('diceA').textContent = dice1;
document.getElementById('diceB').textContent = dice2;
document.getElementById('diceC').textContent = dice3;
document.getElementById('diceD').textContent = dice4;
document.getElementById('diceE').textContent = dice5;
