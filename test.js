function test(){
    var num = 2/6
    console.log(num.toFixed(6))
}



function plusMinus(arr) {
    var positive = 0;
    var negative = 0;
    var zero = 0;
    var answer = [];
    var count = arr.length;
    for (let i = 0; i < arr.length; i++){
        var x = arr[i]
        if (x>0){
            positive++
        }
        if (x<0){
            negative++
        }
        if (x===0){
            zero++
        }
    }
    answer.push(parseInt((positive/count).toFixed(6)))
    answer.push(parseInt((negative/count).toFixed(6)))
    answer.push(parseInt((zero/count).toFixed(6)))
    return answer
}

// plusMinus([2,-2,3,1,-2,0])


function staircase(n) {
    var step = 0
    for (let i = 0; i < n; i++){
        step++;
        let string = ''
        for (let j = 0; j < n-step; j++){
            string += ' '
        }
        for (let m = 0; m < step; m++){
            string += "#"
        }
        console.log(string)
    }
}

// staircase(100)

function modPractice(n){
    console.log(n[1])
}

modPractice("cutestuff")
