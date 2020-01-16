function groupByCommas(n) {
    let string = n.toString();
    let newString = ''
    var count = 0;
    for (let i=string.length - 1; i>0; i--){
        console.log(i)
       if (count < 3){
          count++
       }else {
          //string.splice(i-1,0,",")
          let postComma = ',000'
          newString += postComma
       }
    }
    return newString
}


console.log(groupByCommas(10000))