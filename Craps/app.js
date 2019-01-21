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
        placeBet: function() {
            // if (data.bank > 0) {
               // data.bet = bet;
                data.bank++;
                
                console.log(data.bank);
            // } else {
  //              console.log("You don't have enough money!");
//            }
        },
        
        getBank: function(){
            console.log(this.data.bank);
        },        
        getBet: function(){
            console.log(this.data.bet);
        }
    };
})();

