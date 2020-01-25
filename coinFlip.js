

function countAdjaceny(arrayOfNums){
    let adjacencys = 0;
    let deltaAdjaceny = -2;
    let position = -2;
    for (let i=0;i<arrayOfNums.length;i++){
        if (i === 0) {
            let deltaCount = 0;
            let current = arrayOfNums[i]
            let next = arrayOfNums[i + 1]
            if (current !== next){
                deltaCount++;
            }else {
                deltaCount--;
            }

            if (deltaCount > deltaAdjaceny){
                deltaAdjaceny = deltaCount
                position = i
            }
        }
        else if (i === arrayOfNums.length-1) {
            let deltaCount = 0;
            let prev = arrayOfNums[i - 1]
            let current = arrayOfNums[i]
            if (prev !== current){
                deltaCount++
            }else {
                deltaCount--;
            }

            if (deltaCount > deltaAdjaceny){
                deltaAdjaceny = deltaCount
                position = i
            }
        }
        else {
            let deltaCount = 0
            let prev = arrayOfNums[i - 1]
            let current = arrayOfNums[i]
            let next = arrayOfNums[i + 1]
            if (current !== next){
                deltaCount++
            }
            else {
                deltaCount--
            }
            if (current !== prev){
                deltaCount++
            }
            else {
                deltaCount--
            }

            if (deltaCount > deltaAdjaceny){
                deltaAdjaceny = deltaCount
                position = i
            }
        }

    }
    console.log(deltaAdjaceny, position)
}

function countDeltas(arrayOfNums){
    let deltaAdjaceny = -2;
    let position = -2;
    for (let i=0;i<arrayOfNums.length;i++){
        if (i === 0) {
            let current = arrayOfNums[i]
            let next = arrayOfNums[i + 1]
            if (current !== next){
                deltaAdjaceny++;
                position
            }
            // console.log(`start : ${current}, ${next}`)
        }
        else if (i === arrayOfNums.length-1) {
            let prev = arrayOfNums[i - 1]
            let current = arrayOfNums[i]
            if (prev !== current){
                deltaAdjaceny++
            }
            // console.log(`end : ${prev}, ${current}`)
        }
        else {
            let prev = arrayOfNums[i - 1]
            let current = arrayOfNums[i]
            let next = arrayOfNums[i + 1]
            if (current !== next){
                deltaAdjaceny++
            }
            // console.log(prev,current, next)
        }

    }
}

function solution(A) {
    var n = A.length;
    var result = 0;
    var i;
    // accumulates adjacencies
    for (i = 0; i < n - 1; i++) {
        if (A[i] == A[i + 1])
            result = result + 1;
    }
    console.log(result)
    var r = 0;
    for (i = 0; i < n; i++) {
        var count = -2;
        // not first, within starting bounds
        if (i > 0) {
            // If prev isn't a match, +1 to adj-count
            if (A[i - 1] != A[i])
                count = count + 1;
            // if it is a match, -1 to adj-count
            else
                count = count - 1;
        }
        // not final, within ending bounds
        if (i < n - 1) {
            if (A[i + 1] != A[i])
                count = count + 1;
            else
                count = count - 1;
        }
        r = Math.max(r, count);
    }
    return result + r;
}



const testArrayOne = [0,1,1,0,1,1];
const testArrayTwo = [];

console.log(solution(testArrayOne))
// countAdjaceny(testArrayOne);
// countDeltas(testArrayOne);
