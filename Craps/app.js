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
            console.log(data.bank);
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
        data.point = "Off";
        data.bank += data.bet * 2;
        console.log("Player Wins and has the amount of " + data.bank + " left.");
        console.log(data.bank);
        data.bet = 0;
    };
    var playerLoses = () => {
        data.point = "Off";
        console.log("Player Loses and has the amount of " + data.bank + " left.");
        data.bet = 0;
    };
    var setPoint = (point) => {
        data.point = point;
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
    var resetDice = () => {
        data.dice.die1 = 0, data.dice.die2 = 0;
    };
    var getDiceTotal = () => {
        return parseInt(data.dice.die1) + parseInt(data.dice.die2);
    };
    var getBank = () => {
        return data.bank;
    };
    var getBet = () => {
        return data.bet;
    };
    var getPoint= () => {
        return data.point;
    };

    var checkWinner = () => {
        getBet() > 0 ? rollDice() : console.log("You must first place a bet!!");
        if (getBet() > 0) {
            if (getPoint() === "Off") {
                getDiceTotal() === 2 || getDiceTotal() === 3 || getDiceTotal() === 12 ? playerLoses() :
                    getDiceTotal() === 7 || getDiceTotal() === 11 ? playerWins() : setPoint(getDiceTotal());
            }
            else {
                getDiceTotal() === 7 ? playerLoses() : getDiceTotal() === getPoint() ? playerWins() : (console.log("Roll Again but dont crap out. Try to hit " + getPoint()));
            }
        }
        console.log("The dice total was " + getDiceTotal());
        console.log("The point is " + getPoint());
        resetDice();
        console.log("Now the dice total is " + getDiceTotal());
    };
    return {
        resetGamePublic: function() {
            return resetGame();
        },
        placeBetPublic: function(bet) {
            return placeBet(bet);
        },
        rollDicePublic: function(bet) {
            return rollDice();
        },
        checkWinnerPublic: function() {
            return checkWinner();
        },
        getBankPublic: function() {
            return getBank();
        },
        getBetPublic: function() {
            return getBet();
        },
        getPointPublic: function() {
            return getPoint();
        },
        getDiceTotalPublic: function() {
            return getDiceTotal();
        }
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
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();

var controller = (function(bankCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlBet5);

        document.querySelector(DOM.container).addEventListener('click', ctrlRollDice);

        document.querySelector(DOM.container).addEventListener('click', ctrlReset);

    };

    return {
        init: function() {
            console.log('Application has started.');
        }
    };

})(bankController);

controller.init();
