function alternatingCharacters(s) {
    let count = 0;
    for (let i = 0; i < (s.length - 1); i++){
        let first = s[i]
        if (first != s[i + 1]) {
            
        }
        else {
            count++
        }
    }
    console.log(count)
}

alternatingCharacters("ABABBBABA")