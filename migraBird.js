/**
 * INCOMPLETE
 * INCOMPLETE
 * INCOMPLETE
 * INCOMPLETE
 * INCOMPLETE
 * INCOMPLETE
 * INCOMPLETE
 */

function mostSighted(arr){
    var typeArr = [];
    var countArr = [];
    function sort(x){
        //in this ifstate, index.of() vs typeArr[x], which is faster?
        if (typeArr.indexOf(x) === -1){
            typeArr.push(x)
            countArr.push(1)
        }else{
            var pos = typeArr.indexOf(x)
            let num = countArr[pos] + 1
            countArr[pos] = num;
        }
    }
    function check(array){
        for (let i=0;i<array.length;i++){
            let king;
            let kingPos;
            if (array[i] > array[i+1]){
                king = array[i]
                kingPos = array.indexOf(king)
            }else{
                //
            }
        }
    }
    for (let i=0;i<arr.length;i++){
        //gotta check if the number is new
        sort(arr[i])
    }
}