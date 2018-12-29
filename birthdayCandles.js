function birthdayCakeCandles(ar) {
    var big = 0;
    var count = 0;
    for (let i = 0; i < ar.length; i++){
        if (ar[i] > big) {
            big = ar[i];
            count = 1;
        } else if (ar[i] === big) {
            count += 1;
        }
    }
    return count;

}