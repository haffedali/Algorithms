function scramble(str1, str2) {
    var word = {};
    var state = "true";
    for (let i=0;i<str2.length;i++){
        if (!word[str2[i]]){
            word[str2[i]] = 1;
        }
        else if (word[str2[i]]) {
            word[str2[i]]++
        }
    }
    for (let i=0;i<str1.length;i++){
        if (word[str1[i]]){
            word[str1[i]]--
        }
    }
    var vals = Object.values(word)
    vals.forEach(function(x){
        if (x !== 0){
            state = "false"
        }
    })
    if (state === "true"){
        return true
    }
    if (state === "false"){
        return false
    }
   }

scramble("kcolc", "clodck")