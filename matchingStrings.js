//https://www.hackerrank.com/challenges/sparse-arrays/problem?isFullScreen=true

function matchingStrings(stringList, queries){
    let queryBank = {}
    const results = new Array(queries.length).fill(0)
    for (let i=0;i<queries.length;i++){
        queryBank[queries[i]] = i
    }
    for (let i=0;i<stringList.length;i++){
        let resultIndex = queryBank[stringList[i]]
        if (resultIndex || resultIndex === 0){
            results[resultIndex]++
        }
    }
    return results
}

// let test = matchingStrings(['cat','cat','cat'],['cat','dog'])


module.exports = matchingStrings;