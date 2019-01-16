function duplicateEncode(word){
    var letters = {};
    var paras = '';

    // First step here is to log all the characters as either a dup or sing
    for (let i=0;i<word.length;i++){
        if (word[i].toLowerCase() in letters){
            letters[word[i].toLowerCase()] = "duplicate";
        }else{
            letters[word[i].toLowerCase()] = "single";
        }
    }

    // After letters is populated, I use it as a reference to building paras
    for (let i=0;i<word.length;i++){
        if (letters[word[i].toLowerCase()] === "single"){
            paras += "("
        }else{
            paras += ")"
        }
    }
    return paras
}

duplicateEncode("Success")