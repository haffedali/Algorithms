// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    let sum = 0;
    for (let i=0;i<ar.length;i++){
        let j = i + 1
        while (j < n){
            if ((ar[i] + ar[j]) % k === 0){
                sum ++
            }
            j++
        }
    }
    return sum
}


let testArr = [1,3,2,6,1,2]
let test = 3
let other = 6

console.log(divisibleSumPairs(other,test,testArr));

console.log()