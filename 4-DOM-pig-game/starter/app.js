/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, gamePlaying, twoSixes, winningScore, gameStarted;
init();
document.getElementById('displayWinValue').textContent = 'The winning score is ' + winningScore + ".";
document.querySelector('.btn-roll').addEventListener('click', function() {
    gameStarted = true;
    if (gamePlaying) {

        //1. Random Number

        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        twoSixes[0] = dice1;
        twoSixes[1] = dice2;
        var diceDOM1 = document.querySelector('.dice1');
        var diceDOM2 = document.querySelector('.dice2');
        diceDOM1.style.display = 'block';
        diceDOM2.style.display = 'block';

        diceDOM1.src = 'dice-' + dice1 + '.png';
        diceDOM2.src = 'dice-' + dice2 + '.png';
        console.log(twoSixes);
        console.log(checkTwoSixes());
        //3. Update the round IF the rolles numner was NOT 1


        if (checkTwoSixes()) {
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }
        else if (dice1 !== 1 && dice2 !== 1) {
            //Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else {
            //Next Player
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {


    if (gamePlaying) {
        //Add current score to the GLOBAL score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //Check if the player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else {
            //Next Player
            twoSixes = [0, 0];
            nextPlayer();
        }
    }
});

function nextPlayer() {
    //Next Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    winningScore = 100;
    twoSixes = [0, 0];
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gameStarted = false;
    gamePlaying = true;
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('displayWinValue').textContent = "The winning score is " + winningScore;
    document.getElementById('win-value').value = '';
}

function checkTwoSixes() {
    return twoSixes[0] === 6 && twoSixes[1] === 6;
}

function setWinValue() {

    if (!gameStarted) {
        winningScore = document.getElementById('win-value').value;
        if (winningScore < 1 || isNaN(winningScore)) {
            document.getElementById('displayWinValue').textContent = "The winning score must be a positive number greater than 0!";
        }
        else {
            document.getElementById('displayWinValue').textContent = "The winning score is " + winningScore;
        }
    }
}

///1. Player looses entire score when two 6's in a row are rolled.

///2. Add field property where users can enter the winning score

///3. Add another dice to the game
