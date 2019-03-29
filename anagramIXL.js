function getMinimumDifference(a, b) {
    // I am going to use this answer key; which will allow me to just send back every answer after comparing the strings
    let ans = []
 
    for (let i=0;i<a.length;i++){
        // Because I am just applying the same logic to every anagram, we will reuse the code and just filter in the next string pair
        let checkA = a[i];
        let checkB = b[i];

        // To be frank, I didn't read closely enough and thought I would be comparing one string at a time to another
        // this done is a flag to let my function know not to push an answer into the ans array 
        // for times sake, I will leave this 'pathwork', but I would have liked to have more time to come up with a cleaner solution
        let done = false;

        // Checking for the first edge case, an impossible anagram
        if (checkA.length != checkB.length) {
            ans.push(-1)
            done = true
        }
    
        checkA = checkA.split('');
        checkB = checkB.split('');
        checkA.sort();
        checkB.sort();
    
        //Second edge case, recieving A perfect anagram
        if (checkA.join() === checkB.join()) {
            if (done !== true){
                ans.push(0)
                done = true
            }
        }
    
        // Now with both sorted and edge case out of the way, we will traverse 'A' and check every node of 'B', counting the differences
        var diffCount = 0
        var bank = {}
    
        for (let j = 0; j < checkA.length; j++){
            if (!(checkA[j] in bank)){
                bank[checkA[j]] = true
            }
        }

        for (let j=0; j<checkA.length;j++){
            if (!(checkB[j] in bank)){
                diffCount++
            }
            if (checkB[j] in bank){
                delete bank[checkB[j]]
            }
        }
    
        // Now for our favorite part, after the traversal we push the differences we counted on this string pair and push it to our ans
        if (done !== true){
            ans.push(diffCount)
        }

    
    }
    console.log(ans)
}

getMinimumDifference(['abb', 'tv', 'aaa', 'bag'], ['bbc', 't', 'aaa', 'hag'])