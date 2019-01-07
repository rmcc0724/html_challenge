var nums1 = [2, 4, 6, 8, 10];
var nums2 = [2, 3, 4, 5, 6];

function generalizedGCD(num, arr) {
    var tempHold = [];
    var newArr = arr.map(value => value);
    var newTempArr = newArr.reverse();

    for (var i = 0; i < arr.length; i++) {
        for (var j = newTempArr[i]; j > 0; j--) {
        if(arr[i]%j!==0)
        
        

    }
    return newTempArr;

}

console.log(generalizedGCD(5, nums1));
console.log(generalizedGCD(5, nums2));