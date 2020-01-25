function adjacency(arrayOfNums){
    let adjacency = 0;
    let previous = -1;

    for (let i=0;i<arrayOfNums.length;i++){
        if(previous == arrayOfNums[i]){
            adjacency++;
        }
        previous = arrayOfNums[i];
    }
    return adjacency;
}

function max(x,y){
    if (x > y){
        return x;
    }
    return y;
}


function maximumDeltaAdjacency(arrayOfNums){
    let maximum;
    let lastPosition = arrayOfNums.length - 1;
    maximum = arrayOfNums[0] == arrayOfNums[1] ? -1 : 1;
    maximum = max(arrayOfNums[lastPosition] === arrayOfNums[lastPosition -1] ? 1 : -1, maximum)
    const middle= [ [ [-2, 0], [2, 0] ], [ [0, 2], [0, -2] ] ];
    for (let i=1;i<lastPosition;i++){
        maximum = max(middle[arrayOfNums[i-1]][arrayOfNums[i]][arrayOfNums[i+1]], maximum);
    }
    return maximum;
}

function solution(arrayOfNums){
    if (arrayOfNums.length === 1){
        return 0;
    }
    return adjacency(arrayOfNums) + maximumDeltaAdjacency(arrayOfNums);
}




const testArrayOne = [1,1,1,1,1];
// console.log(solution(testArrayOne));





// console.log(maximumDeltaAdjacency(testArrayOne));


// adjacency(testArrayOne);




//simpler version

function solve(array){
    let pairs = 0;
    let improve = -1;
    let a, b, c;
    let cap = array.length - 1;
    for (let i=1; i< array.length; i++){
        a = b;
        b = c;
        if (i < cap){
            c = array[i]
        }
    }
}