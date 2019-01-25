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
            return data.dice.die1 + data.dice.die2;
        },
        checkWinner: function() {
         
         //Check to see if a bet was placed and if yes roll the dice if not alert the user to place a bet first
         data.bet > 0 ? this.rollDice() : console.log("You must first place a bet!!");
         
         if(data.bet > 0) {
         //If point is off do the following
         data.point === "Off" ? 
            this.getDiceTotal() === 2 || this.getDiceTotal() === 3 || this.getDiceTotal() === 12 ? this.playerLoses() : 
            this.getDiceTotal() === 7 || this.getDiceTotal() === 11 ? this.playerWins() : console.log("Roll Again") : console.log("Roll Again");
            
        // this.getDiceTotal() === 7 ? this.playerLoses() : (data.point = this.getDiceTotal(), console.log("Roll Again but dont crap out"))
        //                       : (data.point = this.getDiceTotal(), console.log("Roll Again but dont crap out"));
          }                        
        
        //  console.log("The point is " + this.getPoint());
        //  console.log("The dice total is " + this.getDiceTotal());
                //if the dice value is 2,3 or 12 , if true then set bet to 0, do nothing to point and tell the user they crapped out
                //else if the value is 7 or 11 set add the bet to the bank total, set the bet to 0 , do nothing with point
                         
         //Else do the following
                //if dice total is 7 ? set bet to 0, set the point to 0, tell the user they crapped out
                //else if dice total is equal to the point ? add the bet to the bank total, tell the user they won , set the bet to 0 , set the point to 0
                //else display the dice total and tell the user to roll again and attampt to hit the point
        },
        playerWins: function() {
            data.point = "Off";
            data.bank += data.bet;
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