var scores, roundScore, activePlayer, roundCounter, unstuckDice, previousRound, roundNumber, previousStuck, roundStuck, gameActive;

scores = [0,0];
roundScore = 0;
activePlayer = 0;
unstuckDice = 5;
previousStuck = 0;
roundNumber = 0; 

$(document).ready(function() {
  $('.dice').css('display','none');
  $('#unstuckNumber').css('display','none');
  $('#round-counter').css('display','none');
});

// Random Number Generator Function 

function roll() {
    return (Math.floor(Math.random() * 6) + 1);
};

//New Game - Init - Reset

$('#newGameButton').on('click', function(){

// Reset scores
    roundScore = 0;
    roundCounter = 1;
    scores=[0,0];
    unstuckDice = 5;
    previousStuck = 0;
    gameActive = true;
    activePlayer = 0;

//hide elements
    $('.dice').css('display','none');
    $('#round-counter').css('display' , 'block');
    $('#unstuckNumber').css('display' , 'none');
   

//Reset Visual Scores

    $('#score-box-0').text('0');
    $('#score-box-1').text('0');
    $('#player-score-0').text('0');
    $('#player-score-1').text('0');
    $('#round-counter').text('Round ' + roundCounter);

//Set Player 0 as Active , Enable Roll Button

$('.player-header-1').addClass('active');
$('#roll-button').attr('disabled' , 'false');
});














//Start Game 
$('#roll-button').on('click', function() {
   
    $('#roundCounter').text('Round ' + (roundCounter + 1)); 

    $('#roundCounter').css('display','block');   


// Get 5 dice with a random number & display to round score

    var dice1 = roll();
        if (dice1 === 2 || dice1 === 5) {
            $('#dice1').attr('src' , 'assets/images/dots-block.png');
            $('#dice1').css('display','block');
            previousStuck += 1;
        } else if (dice1 === 1) {
            $('#dice1').attr('src' , 'assets/images/dots-1.png');
            $('#dice1').css('display','block');
            roundScore += dice1;
        } else if (dice1 === 3) {
            $('#dice1').attr('src' , 'assets/images/dots-3.png');
            $('#dice1').css('display','block');
            roundScore += dice1;
        } else if (dice1 === 4) {
            $('#dice1').attr('src' , 'assets/images/dots-4.png');
            $('#dice1').css('display','block');
            roundScore += dice1;
        } else {
            $('#dice1').attr('src' , 'assets/images/dots-6.png');
            $('#dice1').css('display','block');
            roundScore += dice1;
        };

    var dice2 = roll();
        if (dice2 === 2 || dice2 === 5) {
            $('#dice2').attr('src' , 'assets/images/dots-block.png');
            $('#dice2').css('display','block');
            previousStuck += 1;
        } else if (dice2 === 1) {
            $('#dice2').attr('src' , 'assets/images/dots-1.png');
            $('#dice2').css('display','block');
            roundScore += dice2;
        } else if (dice2 === 3) {
            $('#dice2').attr('src' , 'assets/images/dots-3.png');
            $('#dice2').css('display','block');
            roundScore += dice2;
        } else if (dice2 === 4) {
            $('#dice2').attr('src' , 'assets/images/dots-4.png');
            $('#dice2').css('display','block');
            roundScore += dice2;
        } else {
            $('#dice2').attr('src' , 'assets/images/dots-6.png');
            $('#dice2').css('display','block');
            roundScore += dice2;
        };

    var dice3 = roll();
        if (dice3 === 2 || dice3 === 5) {
            $('#dice3').attr('src' , 'assets/images/dots-block.png');
            $('#dice3').css('display','block');
            previousStuck += 1;
        } else if (dice3 === 1) {
            $('#dice3').attr('src' , 'assets/images/dots-1.png');
            $('#dice3').css('display','block');
            roundScore += dice3;
        } else if (dice3 === 3) {
            $('#dice3').attr('src' , 'assets/images/dots-3.png');
            $('#dice3').css('display','block');
            roundScore += dice3;
        } else if (dice3 === 4) {
            $('#dice3').attr('src' , 'assets/images/dots-4.png');
            $('#dice3').css('display','block');
            roundScore += dice3;
        } else {
            $('#dice3').attr('src' , 'assets/images/dots-6.png');
            $('#dice3').css('display','block');
            roundScore += dice3;
        };

       

    var dice4 = roll();
        if (dice4 === 2 || dice4 === 5) {
            $('#dice4').attr('src' , 'assets/images/dots-block.png');
            $('#dice4').css('display','block');
            previousStuck += 1;
        } else if (dice4 === 1) {
            $('#dice4').attr('src' , 'assets/images/dots-1.png');
            $('#dice4').css('display','block');
            roundScore += dice4;
        } else if (dice4 === 3) {
            $('#dice4').attr('src' , 'assets/images/dots-3.png');
            $('#dice4').css('display','block');
            roundScore += dice4;
        } else if (dice4 === 4) {
            $('#dice4').attr('src' , 'assets/images/dots-4.png');
            $('#dice4').css('display','block');
            roundScore += dice4;
        } else {
            $('#dice4').attr('src' , 'assets/images/dots-6.png');
            $('#dice4').css('display','block');
            roundScore += dice4;
        };

        var dice5 = roll();
        if (dice5 === 2 || dice5 === 5) {
            $('#dice5').attr('src' , 'assets/images/dots-block.png');
            $('#dice5').css('display','block');
            previousStuck += 1;
        } else if (dice5 === 1) {
            $('#dice5').attr('src' , 'assets/images/dots-1.png');
            $('#dice5').css('display','block');
            roundScore += dice5;
        } else if (dice5 === 3) {
            $('#dice5').attr('src' , 'assets/images/dots-3.png');
            $('#dice5').css('display','block');
            roundScore += dice5;
        } else if (dice5 === 4) {
            $('#dice5').attr('src' , 'assets/images/dots-4.png');
            $('#dice5').css('display','block');
            roundScore += dice5;
        } else {
            $('#dice5').attr('src' , 'assets/images/dots-6.png');
            $('#dice5').css('display','block');
            roundScore += dice5;
        };

        var roundStuck = (unstuckDice - previousStuck);
            $('#score-box-'+ activePlayer).text(roundScore);
            $('#unstuckNumber').text('Unstuck Dice '+ roundStuck);
            $('#unstuckNumber').css('display','block');

console.log(dice1);
console.log(dice2);
console.log(dice3);
console.log(dice4);
console.log(dice5);
console.log(roundScore);

//Ending the Round

        if (roundStuck <= 0) {
            switchPlayer();
      };
});

// Swtich Player Function 

function switchPlayer() { 
    scores[activePlayer] += roundScore;
    $('#player-score-'+ activePlayer).text(roundScore);
    $('#score-box-0').text('0');
    $('#score-box-1').text('0');
console.log(scores[activePlayer]); 

        if (activePlayer === 0) {
            activePlayer = 1; 
        } else {
            activePlayer = 0;
            roundCounter += 1;
            $()
        }; 
    unstuckDice = 5;
    $('#unstuckNumber').text('Unstuck Dice '+ unstuckDice);
      roundScore = 0;
}
//Update round score function 

