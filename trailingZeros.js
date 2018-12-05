
function zeros (n) {
    var result = n;
    if (n === 0 || n === 1) 
      return 0; 
    while (n > 1) { 
      n--;
      result *= n;
    }
    var string = result.toString()
    
    string = string.split("").reverse().join("")
    
    var zeroCount = 0;
    for (var i=0;i<string.length;i++){
        if (string[i] === "0"){
            zeroCount++;
        }
        else{
            break;
        }
    }
    console.log(zeroCount)
  }


zeros(19)
  