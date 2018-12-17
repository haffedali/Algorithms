function climbingLeaderboard(scores, alice) {
    let scoresUnique = [];
    let ans = [];
    for (let i = 0; i < scores.length; i++){
        if (scoresUnique.indexOf(scores[i]) === -1) {
            scoresUnique.push(scores[i]);
        }
    }

    for (let i = 0; i < alice.length; i++){
        var currentScore = alice[i];
        var len = scoresUnique.length;
        let partCompare = scoresUnique[Math.floor(len/2)]
        let partIndice = Math.floor(len/2)

        let startIndice = 0;
        //Checking if the current score is, BIGGEST, SMALLEST, or EQUAL
        if (currentScore > scoresUnique[0]){
            ans.push(1)
            scoresUnique.push(alice[i])
            scoresUnique.sort(function(a, b){return b-a})

        } else if (currentScore < scoresUnique[len - 1]){
            ans.push(len + 1)
            scoresUnique.push(alice[i])
            scoresUnique.sort(function(a, b){return b-a})

        } else if (scoresUnique.indexOf(currentScore) !== -1){
            ans.push(scoresUnique.indexOf(currentScore) + 1)

        }
        // Else statement triggers if the currentScore is not the biggest, smallest, or equal to any scores
        else{
            if (currentScore > partCompare){
                for (let j = 0; j < len; j++){
                    if (currentScore > scoresUnique[j] && currentScore < scoresUnique[j-1]){
                        //no need to add one, placing to the left
                        ans.push(j + 1)
                        // scoresUnique.push(alice[i])
                        // scoresUnique.sort(function(a, b){return b-a})
                        scoresUnique.splice(j,0,alice[i])
                    }
                }
            }else{
                for (let j = len - 1; j > 0; j--){
                    if (currentScore > scoresUnique[j] && currentScore < scoresUnique[j-1]){
                        //no need to add one, placing to the left
                        ans.push(j + 1)
                        // scoresUnique.push(alice[i])
                        // scoresUnique.sort(function(a, b){return b-a})
                        scoresUnique.splice(j,0,alice[i])
                    }
                }
            }
        }
    }
    return ans
}

function quickSort() {}

climbingLeaderboard([100,90,90,80,75,60],[50,102,77,90,65])