function magicCube(s){
    var nums = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
    };
    var correction = [];

    // the array that numbers to be fixed will be stored
    var fixers = []


    //funtion that sorts flags numbers that have been recorded in the square
    for (let i=0;i<3;i++){
        for (let j=0;j<3;j++){
            if (nums[s[i][j]] === false){
                nums[s[i][j]] = true;
            }else {
                correction.push(s[i][j])
            }

        }
    }

    // numKeys is an array of nums keys' 
    // After finding the false values, push into array to be fixed
    var numKeys = Object.keys(nums)
    for (let x of numKeys){
        if (nums[x] === false){
            fixers.push(parseInt(x))
        }
    }

    //Here, I am going through the numbers that need to change, and testing their 'distance' when subtracting to get to the numbers i need
    //I need to figure out how to gather 'weighted' data
    //for instance, when both corrections have the same cost of a switch, the program should look to the next potential cost
    // for example, both 7 and 5 have a 1 cost
    for (let i=0;i<correction.length;i++){
        let distances = [];
        // console.log(distances)
        let dupNum = correction[i];
        console.log(dupNum)
        for (let j=0;j<fixers.length;j++){
            let distance = Math.abs(dupNum - fixers[j])
            distances.push(distance)
        }
        console.log(distances)
    }


    console.log(fixers)
    // console.log(nums)
    // console.log(correction)
}


var cube = [[4,9,2],[7,5,7],[8,8,5]]

magicCube(cube)