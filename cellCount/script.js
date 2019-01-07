var cells = [1, 0, 0, 0, 0, 1, 0, 0];
var cells2 = [1, 1, 1, 0, 1, 1, 1, 1];

function cellCompete(states, days) {
    var newArr = [];
    var temp = states.map(value => value);
    for (var i = 0; i < days; i++) {

        for (var j = 0; j < temp.length; j++) {
            if (j === 0 || j === temp.length - 1) {

                if (j === 0 && temp[1] === 0) {
                    newArr.push(0);
                }
                else if (j === 0 && temp[1] === 1) {
                    newArr.push(1);
                }

                if (j === temp.length - 1 && temp[temp.length - 2] === 0) {
                    newArr.push(0);
                }
                else if (j === temp.length - 1 && temp[temp.length - 2] === 1) {
                    newArr.push(1);
                }
            }
            else if (j !== 0 || j !== temp.length - 1) {
                if (temp[j - 1] === temp[j + 1]) {
                    newArr.push(0);
                }
                else {
                    newArr.push(1);
                }
            }
        }
        temp = newArr.map(value => value);
        newArr = [];
    }
    return temp;
}
console.log(cellCompete(cells, 1));
console.log(cellCompete(cells2, 2));