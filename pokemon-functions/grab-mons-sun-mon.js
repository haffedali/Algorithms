// import https from ('https');
// import axios from 'axios';

const axios = require('axios')
const fs = require('fs');

let queryString = 'https://www.serebii.net/swordshield/pokemon/';


for (let i = 1; i<891; i++){
    let dexNumber = ''
    if (i < 10){
        dexNumber = '00'
    }
    else if (i < 100){
        dexNumber = '0'
    }
    
    let queryString = `https://www.serebii.net/swordshield/pokemon/${dexNumber}${i}.png\n` 
    
    // axios.get(queryString)
    // .then( (response) => {
    //     console.log(response)
    // })
    // .catch( (err) => {
    //     console.log(err)
    // })

    fs.appendFileSync("./image-list.txt",queryString)
    console.log(queryString)
}


