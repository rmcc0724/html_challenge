var bills = [124, 48, 269];
function calcTip(bill) {
switch(true) {
  case bill < 50:
  return " $" + (bill * .2).toFixed(2) + " at 20%";
  case bill >= 50:
  return " $" + (bill * .15).toFixed(2) + " at 15%";
  case bill >= 200:
  return " $" + (bill * .1).toFixed(2) + " at 10%";
}
};

function calcTotal(bill) {
switch(true) {
  case bill < 50:
  return " $" + (bill * 1.2).toFixed(2) + " at 20%";
  case bill >= 50:
  return " $" + (bill * 1.15).toFixed(2) + " at 15%";
  case bill >= 200:
  return " $" + (bill * 1.1).toFixed(2) + " at 10%";
}
};

console.log("Tips are" + bills.map(calcTip) + " \nTotals are" + bills.map(calcTotal));