function sockMerchant(n, ar) {
    var total = 0,
        count = 1,

    //1. reorder the array from lowest number to highest
    newArr = ar.sort(function(a, b) { return a - b });
//    console.log(newArr);
    //2. check the index of i
    for (var i = 0; i < newArr.length; i++) {

        //3.  if the next index value matches the current add 1 to the counter and go to the next
        //console.log(newArr[i] === newArr[i + 1]);

        if (newArr[i] === newArr[i + 1]) {
            //4. count is increased by 1
            count++;
        }
        else {
  //          console.log(count);

            if (count > 1) {
                total += parseInt(count/2);
            }
            //Reset the counter
            count = 1;
        }


        //6. else go to the next index and repeat the loop over
    }
    console.log(total);
    return total;

}
