var nums = [5, 10, 7, 45, 8, 36];

const findPair = function(arr, total) {
  for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
// console.log('Comparing i '  + i + ' +j ' + j);
// console.log(arr[i] + arr[j]);
// console.log(arr[i] + arr[j] === total);

      if(arr[i] + arr[j] === total) {
        console.log(arr[i] + " and " + arr[j] + " equal the sum of " + total);
      }
    }
  }
  
};


