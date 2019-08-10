
function climbingLeaderboard(scores, alice) {
    let scoresUnique = [];
    let ans = [];
    for (let i = 0; i < scores.length; i++) {
        if (scoresUnique.indexOf(scores[i]) === -1) {
            scoresUnique.push(scores[i]);
        }
    }

    for (let i = 0; i < alice.length; i++) {
        var currentScore = alice[i];

        //Checking if the current score is, BIGGEST, SMALLEST, or EQUAL
        if (currentScore > scoresUnique[0]) {
            ans.push(1)
            scoresUnique.push(alice[i])
            scoresUnique.sort(function (a, b) { return b - a })

        } else if (currentScore < scoresUnique[scoresUnique.length - 1]) {
            ans.push(scoresUnique.length + 1)
            scoresUnique.push(alice[i])
            scoresUnique.sort(function (a, b) { return b - a })

        } else if (scoresUnique.indexOf(currentScore) !== -1) {
            ans.push(scoresUnique.indexOf(currentScore) + 1)
            scoresUnique.push(alice[i])
            scoresUnique.sort(function (a, b) { return b - a })

        } else {
            for (let j = 0; j < scoresUnique.length; j++) {
                if (currentScore > scoresUnique[j] && currentScore < scoresUnique[j - 1]) {
                    //no need to add one, placing to the left
                    ans.push(j + 1)
                    scoresUnique.push(alice[i])
                    scoresUnique.sort(function (a, b) { return b - a })
                }
            }
        }
    }
    console.log(ans)
}
// climbingLeaderboard([100,90,90,80,75,60],[50,102,77,90,65])


var m= [[0,2,0], 
 [2,0,2], 
 [0,2,0]]


function arrayAdd(n){
    var sum = n[0][0] + n[2][1]
    console.log(sum)
}


function testRadio(){
    var answer = 100 / (Math.pow(Math.E, ((0.693*100)/70)))
    // var answer = 100 * Math.log((-0.693*100)/70)
    console.log(((0.693*152.4)/38.7))
    console.log(answer)
}

function testMath(){
    var answer = Math.floor(77 / 5)
    console.log(answer)
}

function fib(n) {
    let array = [0,1]
    if (n==0){
        return 0
    }
    if (n==1 || n==2){
        return 1
    }
    // only relevant because we take care of first 2 elements
    n = n - 1
    for (let i=0;i<n;i++){
        let newFib = array[(array.length) - 1] + array[(array.length - 2)]
        array.push(newFib)
    }
    return(array[array.length-1])
}

function peeker(){
    let thing = []
    if (thing[0]){
        console.log('bleh')
    }
}


Array.method('reduce', function (f,value) {
    var i;
    for (i = 0; i<this.length; i+=1){
        value = f(this[i], value)
    }
    return value;
})


function thisIsEasy(){
    let first = "shadow"
    let second = "Golden retriever"
    console.log(first)
    console.log(second)
}