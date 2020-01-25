function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let smallestNext;
    let max = 0;
    let positiveInts = {}
    for (let i=0;i<A.length;i++){
        if (A[i] > 0){
            let numIndex = A[i].toString()
            positiveInts[numIndex] = true
            if (A[i] > max){
                max = A[i]
            }
        }
    }

    if (max <= 0) {
        return 1
    }

    for (let i=1;i<=max+1;i++){
        let numIndex = i.toString()
        if (positiveInts[numIndex]){
        }
        else{
            return i
        }
    }
    
    return smallestNext

}



const test1=[1,2,3]

const test2=[-1,-3]

const test3=[1, 3, 6, 4, 1, 2]

console.log(solution(test3))