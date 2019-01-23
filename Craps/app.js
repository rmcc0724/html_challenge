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
    return {
        placeBet: function(bet) {
            if (data.bank > 0) {
                data.bet = bet;
                data.bank -= data.bet;
                console.log(data.bank);
            }
            else {
                console.log("You don't have enough money!");
            }
        },
        getBet: function() {
            console.log(data.bet);
        },
        rollDice: function() {
            if(data.bet > 0) {
          data.dice.die1 = Math.floor(Math.random() * 6) + 1;  
          data.dice.die2 = Math.floor(Math.random() * 6) + 1;  
          console.log(data.dice.die1);
          console.log(data.dice.die2);
            } else { 
                console.log("You need to place a bet first");
            }
        },
        getDiceTotal: function() {
            console.log(data.dice.die1 + data.dice.die2);
        },
        checkWinner: function() {}
        
        ,
        playerWins: function() {
            data.bank += data.bet;
            console.log(data.bank);
        },
        getBank: function() {
            console.log(data.bank);
        }
    };
})();

var controller = (function(bankCtrl) {

    return {
        init: function() {
            console.log('Application has started.');
        }
    };

})(bankController);

controller.init();