var bankController = (function() {
    let data = {
        dice: {
            die1: 0,
            die2: 0,
        },
        bet: 0,
        bank: 100,
        point: "Off",
        message: ""
    };
    let placeBet = () => {
        if (data.bank > 0 && 5 <= data.bank) {
            data.bank -= 5;
            data.bet += 5;
            console.log("Player has placed a bet of 5$ with a total bet of " + getBet() + " and bank of " + getBank());
        }
        else {
            console.log("You don't have enough money!");
        }
    };
    let rollDice = () => {
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
    let playerWins = () => {
        data.bank += data.bet * 2;
        console.log("Player Wins because you rolled a " + getDiceTotal() + " when the point was " + getPoint() + "\nThe player has the amount of " + getBank() + " left.");
        console.log(data.bank);
        data.bet = 0;
        setPoint("Off");
    };
    let playerLoses = () => {
        console.log("Player Loses because you rolled a " + getDiceTotal() + " when the point was " + getPoint() + "\nThe player has the amount of " + getBank() + " left.");
        data.bet = 0;
        setPoint("Off");
    };
    let setPoint = (point) => {
        data.point = point;
        if (getPoint() === "Off") {
            console.log("Your point is now set to " + getPoint() + " and you must roll a 7 or 11 to win, if you roll 2, 3, or 12 you lose, all else becomes your point.");
        }
        else {
            console.log("Your point is now set to " + getPoint() + " and you must roll that to win. If you roll a 7 prior to that you lose.");
        }
    };
    let resetGame = () => {
        data = {
            dice: {
                die1: 0,
                die2: 0,
            },
            bet: 0,
            bank: 100,
            point: "Off"
        };
        setPoint("Off");
        console.log("Game Reset");
    };
    let resetDice = () => (data.dice.die1 = 0, data.dice.die2 = 0);
    let getDiceTotal = () => parseInt(data.dice.die1) + parseInt(data.dice.die2);
    let getBank = () => data.bank;
    let getBet = () => data.bet;
    let getPoint = () => data.point;
    let checkWinner = () => {
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
        placeBetPublic: () => placeBet(),
        rollDicePublic: (bet) => rollDice(),
        checkWinnerPublic: () => checkWinner(),
        getBankPublic: () => getBank(),
        getBetPublic: () => getBet(),
        getPointPublic: () => getPoint(),
        getDiceTotalPublic: () => getDiceTotal(),
    };
})();


// UI CONTROLLER
let UIController = (function() {

    var DOMstrings = {
        bet5Btn: '.btn-bet',
        btnRoll: '.btn-roll',
        btnNew: '.btn-new',
        textArea: '.text__area'
    };

    var placeBet = (bet) => {
        document.getElementById("bet").innerHTML = bet;
    };

    var updateBank = (bank) => {
        document.getElementById("bank").innerHTML = bank;
    };

    var updatePoint = (point) => {
        document.getElementById("point").innerHTML = point;
    };

    var updateDice = (die1, die2) => {
        document.getElementById("die-1-img").src = "dice-" + die1 + ".png";
        document.getElementById("die-2-img").src = "dice-" + die2 + ".png";
        document.getElementById("score-1").src = die1;
        document.getElementById("score-2").src = die2;
    };


    return {
        getDOMstrings: () => DOMstrings,
        placeBetPublic: (bet) => placeBet(bet),
        updateBankPublic: (bank) => updateBank(bank),
        updatePointPublic: (point) => updatePoint(point)
    };
})();

let controller = (function(bankCtrl, UICtrl) {

    let setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.bet5Btn).addEventListener('click', ctrlBet5);
        //     document.querySelector(DOM.rollDiceBtn).addEventListener('click', ctrlRollDice);
        document.querySelector(DOM.btnNew).addEventListener('click', ctrlReset);
    };
    let ctrlBet5 = () => {
        //1. When the bet 5 button is clicked we call the public placeBet function
        bankCtrl.placeBetPublic();

        //2. We update the UI controller using the public getBet function
        UICtrl.placeBetPublic(bankCtrl.getBetPublic());

        //3. Update the Bank UI controller to reflect the total
        UICtrl.updateBankPublic(bankCtrl.getBankPublic());
    };

    let ctrlReset = () => {
        //1. When the new game button is clicked we call the resetGamePublic function
        bankCtrl.resetGamePublic();

        //2. We update the UI controller using the public getBet function
        UICtrl.placeBetPublic(bankCtrl.getBetPublic());

        //3. Update the Bank UI controller to reset the bank to 100
        UICtrl.updateBankPublic(bankController.getBankPublic());
        
        //4. Update the Point UI controller to "Off"
        UICtrl.updateBankPublic(bankController.getBankPublic());
    };

    return {
        init: () => (console.log('Application has started.'),
            setupEventListeners()),
    };

})(bankController, UIController);

controller.init();
