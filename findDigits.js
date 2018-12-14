function findDigits(n) {
    var count = 0;
    const nn = n.toString();
    for (let i = 0; i < nn.length; i++){
        if (n % parseInt(nn[i]) === 0) {
            count++;
        }
    }
    return count;
}

var poop = findDigits(12)
console.log(poop)