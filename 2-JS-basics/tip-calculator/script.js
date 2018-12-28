var JohnFamily = {
  bills: [124, 48, 268, 180],
  tipCalc: function() { 
    this.tips = this.bills.map((bill)=> bill < 50 ? (bill*.2).toFixed(2) : bill >= 50 ? (bill * .15).toFixed(2) : (bill * .1).toFixed(2));
    this.total = this.bills.map((bill)=> bill < 50 ? (bill*1.2).toFixed(2) : bill >= 50 ? (bill * 1.15).toFixed(2) : (bill * 1.1).toFixed(2));
    this.average = this.tips.reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value)) / this.bills.length;
}
};

var MarkFamily = {
  bills: [77, 375, 110, 45],
  tipCalc: function() { 
    this.tips = this.bills.map((bill)=> bill < 100 ? (bill*.2).toFixed(2) : bill >= 100 && bill <= 300 ? (bill * .1).toFixed(2) : (bill * .25).toFixed(2));
    this.total = this.bills.map((bill)=> bill < 100 ? (bill*1.2).toFixed(2) : bill >= 100 && bill <= 300 ? (bill * 1.1).toFixed(2) : (bill * 1.25).toFixed(2));
    this.average = this.tips.reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value)) / this.bills.length;
}
};

JohnFamily.tipCalc();
MarkFamily.tipCalc();
console.log( "John's family spent an average of $" + JohnFamily.average.toFixed(2) + " per meal in tips and Mark's family spent $" + MarkFamily.average.toFixed(2)); 
console.log(JohnFamily.average > MarkFamily.average ? "John's family spent more tips on average than Mark's." : "Mark's family spent more tips on average than John's.")
