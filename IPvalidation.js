function isValidIP(str) {
    var teststr = str.split('.')
    var test = 0
    if (teststr.length !== 4){
        console.log(false)
    }
    console.log(teststr)
    teststr.forEach(function(x){
        var isnum = /^\d+$/.test(x);
        console.log(isnum) 
        x = x.trim()
        if (parseInt(x) < 255 && parseInt(x) >= 0 && x[0] !== '0'){
            test++
        }
        else if (x === '0'){
            test++
        }
    })
    if (test === 4){
        console.log(true)
    }
    if(test < 4){
        console.log(false)
    }
  }

  isValidIP("1.2.3.4");