const fs = require('fs')

const nameArray = fs.readFileSync('pokemon-name-list.txt').toString().split('\n');

const imageArray = fs.readFileSync('image-list.txt').toString().split('\n');

// console.log(nameArray);
// console.log(imageArray);
// nameArray.forEach( (name) => {
//     console.log(name)
// })

// for (let i=0;i<nameArray.length;i++){
//     let pokemonObject = {id: i, name: nameArray[i], image: imageArray[i]}
//     pokemonObject = JSON.stringify(pokemonObject);
//
// }

// function pokemonTypeCheck(){

// }

class PokemonFactory{
    constructor(){
        this.pokemon = []
    }
}

PokemonFactory.prototype.typeCheck = function() {

}

PokemonFactory.prototype.init = function() {
    for (let i=0;i<nameArray.length;i++){
        let pokemonObject = {id: i, name: nameArray[i], image: imageArray[i]}
        pokemonObject.name.trim();
        pokemonObject = JSON.stringify(pokemonObject);
        this.pokemon.push(pokemonObject);
    }
}

PokemonFactory.prototype.showMons = function (){
    this.pokemon.forEach((mon)=>{
        console.log(mon)
    })
}

PokemonFactory.prototype.writeFile = function(){
    this.pokemon.forEach((mon) => {
        fs.appendFileSync("./pokemon-object.txt",mon + ',\n')
    })
}

const mons = new PokemonFactory();

mons.init();

mons.writeFile();

//
