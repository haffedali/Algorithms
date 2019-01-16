
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


arrayAdd(m)

