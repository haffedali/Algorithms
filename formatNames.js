function list(names){
var string = '';
var separator = ', '
var and = ' & '
var allButTwo = names.length-2
if (names.length === 0){
    return ''
}
if (names.length === 1){
    return names[0].name
}
if (names.length === 2){
    string += names[0].name 
    string += and
    string += names[1].name
    return string
}
//gets all but the last two and adds it to the final string
if(names.length > 2){
    for (let i=0;i<allButTwo;i++){
        string += names[i].name
        string += separator
    }
    string += names[(allButTwo)].name
    string += and
    string += names[(allButTwo + 1)].name
    return string
}

}

list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'haffed'}])