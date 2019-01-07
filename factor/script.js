var nums1 = [2, 4, 6, 8, 10];
var nums2 = [2, 3, 4, 5, 6];

function generalizedGCD(num, arr) {
    var newArr = arr.map(value => value).reverse();
    var mod = true;

    for (var i = newArr[0]; i > 0; i--) {
        mod = true;
        
        for (var j = 0; j < newArr.length; j++) {
            // console.log(newArr[j] + ' ' + i);
            // console.log(newArr[j]%i);
            if(newArr[j]%i!== 0) {
                mod = false;
            } 
         }
         if(mod) {
             return i;
         }

        }
    }
console.log(generalizedGCD(5, nums1));
