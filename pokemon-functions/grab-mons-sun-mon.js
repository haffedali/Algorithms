const fs = require('fs');


function queryStringGenerator(){
    for (let i = 1; i<891; i++){
        let dexNumber = ''
        if (i < 10){
            dexNumber = '00'
        }
        else if (i < 100){
            dexNumber = '0'
        }
        
        let queryString = `https://www.serebii.net/swordshield/pokemon/${dexNumber}${i}.png\n` 
        
    
        fs.appendFileSync("./image-list.txt",queryString)
        console.log(queryString)
    }
}

queryStringGenerator();


