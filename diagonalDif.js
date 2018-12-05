function diagonalDifference(arr) {
    var countSubOne = arr.length-1
    var firstSum = 0;
    var secondSum = 0;
    //var firstSum = arr[0][0] + arr[1][1] + arr[2][2];
    for (let i = 0; i < arr.length; i++){
        firstSum += arr[i][i]
    }
    for (let i = 0; i < arr.length; i++){
        secondSum += arr[i][count - i]
    }
    //var secondSum = arr[0][2] + arr[1][1] + arr[2][0];
    var dif = firstSum - secondSum
    console.log(Math.abs(dif))
    // return Math.abs(dif)
}

diagonalDifference([[1,5,17,6,7],[2,3,1,45,3],[12,63,72,12,5],[5,7,55,2,2],[2,22,12,52,9]])