function countMax(upRight) {
    // Write your code here

    //grabbing size of grid here
    let upMax = 0
    let rightMax = 0
    for (let i = 0; i < upRight.length; i++){
        if (parseInt(upRight[i][0]) > upMax) {
            upMax = parseInt(upRight[i][0])
        }

        if (parseInt(upRight[i][2]) > rightMax) {
            rightMax = parseInt(upRight[i][2])
        } 
    }

    

    let grid = []
    for (let i = 0; i < upMax; i++){
        let row = []
        for (let j = 0; j < rightMax; j++){
            row.push(0)
        }
        grid.push(row)
    }


    //Now that the 'grid' is set up, I want to start adding values to the correct coordinates (easier said than done)
    // I have 5 minutes left, I wish I had just a little more time to finish this! 
    for (let i = 0; i < upRight.length; i++) { 
        let up = parseInt(upRight[i][0])
        let right = parseInt(upRight[i][2])


    }

}

countMax(["1 2", "3 3", "3 1"])