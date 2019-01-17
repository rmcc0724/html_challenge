function countingValleys(n, s) {
    var count = 0, total = 0;


    for (var i = 0; i < s.length; i++) {
        if (s[i] === 'U') {
            if (count === -1) { 
                total++;
            }
            count++;
        } else {
            count--;
        }
        console.log(total);
    }
    return total;
}