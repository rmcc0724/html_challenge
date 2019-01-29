var bankController = (function() {
    var data = {
        dice: {
            die1: 0,
            die2: 0,
        },
        bet: 0,
        bank: 100,
        point: "Off"
    };
    var placeBet = (bet) => {
        if (data.bank > 0 && bet <= data.bank) {
            data.bank -= bet;
            data.bet += bet;
            console.log("Player has placed a bet of " + bet + " with a total bet of " + data.bet + " and bank of " + data.bank);
        }
        else {
            console.log("You don't have enough money!");
        }
    };
    var rollDice = () => {
        if (data.bet > 0) {
            data.dice.die1 = Math.floor(Math.random() * 6) + 1;
            data.dice.die2 = Math.floor(Math.random() * 6) + 1;
            console.log(data.dice.die1);
            console.log(data.dice.die2);
        }
        else {
            console.log("You need to place a bet first");
        }
    };
    var playerWins = () => {
        data.bank += data.bet * 2;
        console.log("Player Wins because you rolled a " + getDiceTotal() + " when the point was " + getPoint() + "\nThe player has the amount of " + getBank() + " left.");
        console.log(data.bank);
        data.bet = 0;
        setPoint("Off");
    };
    var playerLoses = () => {
        console.log("Player Loses because you rolled a " + getDiceTotal() + " when the point was " + getPoint() + "\nThe player has the amount of " + getBank() + " left.");
        data.bet = 0;
        setPoint("Off");
    };
    var setPoint = (point) => {
        data.point = point;
        if (getPoint() === "Off") {
            console.log("Your point is now set to " + getPoint() + " and you must roll a 7 or 11 to win, if you roll 2, 3, or 12 you lose, all else becomes your point.");
        } else {
            console.log("Your point is now set to " + getPoint() + " and you must roll that to win. If you roll a 7 prior to that you lose.");
        }
    };
    var resetGame = () => {
        data = {
            dice: {
                die1: 0,
                die2: 0,
            },
            bet: 0,
            bank: 100,
            point: "Off"
        };
        console.log("Game Reset");
    };
    var resetDice = () => (data.dice.die1 = 0, data.dice.die2 = 0);
    var getDiceTotal = () => parseInt(data.dice.die1) + parseInt(data.dice.die2);
    var getBank = () => data.bank;
    var getBet = () => data.bet;
    var getPoint = () => data.point;
    var checkWinner = () => {
        getBet() > 0 ? rollDice() : console.log("You must first place a bet!!");
        if (getBet() > 0) {
            if (getPoint() === "Off") {
                getDiceTotal() === 2 || getDiceTotal() === 3 || getDiceTotal() === 12 ? playerLoses() :
                    getDiceTotal() === 7 || getDiceTotal() === 11 ? playerWins() : setPoint(getDiceTotal());
            }
            else {
                getDiceTotal() === 7 ? playerLoses() : getDiceTotal() === getPoint() ? playerWins() : (console.log("Roll Again but dont crap out. You rolled a " + getDiceTotal() + "\nTry to hit " + getPoint()));

            }
        }
        resetDice();
    };
    return {
        resetGamePublic: () => resetGame(),
        placeBetPublic: (bet) => placeBet(bet),
        rollDicePublic: (bet) => rollDice(),
        checkWinnerPublic: () => checkWinner(),
        getBankPublic: () => getBank(),
        getBetPublic: () => getBet(),
        getPointPublic: () => getPoint(),
        getDiceTotalPublic: () => getDiceTotal(),
    };
})();


// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        die1Image: '.die__1_image',
        die2Image: '.die__2_image',
        die1: '.die__1',
        die2: '.die__2',
        pointValue: '.point_value',
        betValue: '.bet_value',
        bankValue: '.bank_value',
        bet5Btn: '.bet5__btn',
        rollDiceBtn: '.rolldice__btn',
        resetBtn: '.reset__btn',
        textArea: '.text__area'
    };
    return {
        getDOMstrings: () => DOMstrings

    };
})();

var controller = (function(bankCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlBet5);

        document.querySelector(DOM.container).addEventListener('click', ctrlRollDice);

        document.querySelector(DOM.container).addEventListener('click', ctrlReset);

    };
    var ctrlBet5

    return {
        init: function() {
            console.log('Application has started.');
        }
    };

})(bankController);

controller.init();
