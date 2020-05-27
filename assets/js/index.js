var scores, roundScore, activePlayer, roundCounter, dice1, dice2, dice3, dice4, dice5;

scores = [0,0];
roundScore = 88;
activePlayer = 1;
roundCounter = 0;

document.getElementById('score-box-' + activePlayer).textContent = roundScore;
// document.querySelectorAll('.dice').style.display = 'none';
/*
dice1 = Math.floor(Math.random() * 6) + 1;
dice2 = Math.floor(Math.random() * 6) + 1;
dice3 = Math.floor(Math.random() * 6) + 1;
dice4 = Math.floor(Math.random() * 6) + 1;
dice5 = Math.floor(Math.random() * 6) + 1;

document.getElementById('dice1').textContent = dice1;
document.getElementById('dice2').textContent = dice2;
document.getElementById('dice3').textContent = dice3;
document.getElementById('dice4').textContent = dice4;
document.getElementById('dice5').textContent = dice5;

*/

if (dice1 === 1) {
    diceInput = getElementById('dice1').innerHTML.src('')
}