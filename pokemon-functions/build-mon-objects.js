const fs = require('fs')

const nameArray = fs.readFileSync('pokemon-name-list.txt').toString().split('\n');

const imageArray = fs.readFileSync('image-list.txt').toString().split('\n');

// console.log(nameArray);
// console.log(imageArray);
// nameArray.forEach( (name) => {
//     console.log(name)
// })

for (let i =0;i<nameArray.length;i++){
    let pokemonObject = {id: i, name: nameArray[i], image: imageArray[i]}
    pokemonObject = JSON.stringify(pokemonObject);
    fs.appendFileSync("./pokemon-object.txt",pokemonObject + ',\n')
}