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

        getBank: function() {
            console.log(data.bank);
        },
        getBet: function() {
            console.log(data.bet);
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