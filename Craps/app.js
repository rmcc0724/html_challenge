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
            if (data.bet > 0) {
                data.dice.die1 = Math.floor(Math.random() * 6) + 1;
                data.dice.die2 = Math.floor(Math.random() * 6) + 1;
                console.log(data.dice.die1);
                console.log(data.dice.die2);
            }
            else {
                console.log("You need to place a bet first");
            }
        },
        getDiceTotal: function() {
            return data.dice.die1 + data.dice.die2;
        },  
        resetDice: function() {
            data.dice.die1 = 0, data.dice.die2 = 0;
            
        },
        checkWinner: function() {
            //Check to see if a bet was placed and if yes roll the dice if not alert the user to place a bet first
            this.getBet() > 0 ? this.rollDice() : console.log("You must first place a bet!!");
            if (this.getBet() > 0) {
                if (this.getPoint() === "Off") {
                    this.getDiceTotal() === 2 || this.getDiceTotal() === 3 || this.getDiceTotal() === 12 ? this.playerLoses() :
                        this.getDiceTotal() === 7 || this.getDiceTotal() === 11 ? this.playerWins() : this.setPoint(this.getDiceTotal());
                }
                else {
                    this.getDiceTotal() === 7 ? this.playerLoses() : (this.setPoint(this.getDiceTotal()), console.log("Roll Again but dont crap out"));
                }
            }
             console.log("The point is " + this.getPoint());
             console.log("The dice total is " + this.getDiceTotal());
             this.resetDice();
        },
        playerWins: function() {
            data.point = "Off";
            data.bank += data.bet*2;
            console.log("Player Wins and has the amount of " + data.bank + " left.");
            console.log(data.bank);
            data.bet = 0;
        },
        playerLoses: function() {
            data.point = "Off";
            console.log("Player Loses and has the amount of " + data.bank + " left.");
            data.bet = 0;
        },
        getBank: function() {
            return data.bank;
        },
        getPoint: function() {
            return data.point;
        },
        setPoint: function(point) {
            data.point = point;
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
