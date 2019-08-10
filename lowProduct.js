function lowestProduct(input) {
    let lowProduct = null;
    let product = null;
    let firstChunk = true;
    let firstDiv = null;
    let chunk = []

    if (input.length < 4){
        return "Number is too small"
    }

    for (let i=0;i<input.length;i++){
        if (chunk.length < 4){
            chunk.push(parseInt(input[i]))
        }
        
        else if (chunk.length === 4 && product === null){

            console.log(chunk)
            
            product = 1

            for (let j=0;j<chunk.length;j++){
                product = chunk[j] * product
            }

            if (product < lowProduct || lowProduct === null){
                lowProduct = product
            }

            firstDiv = chunk[0]
            chunk.shift()
            chunk.push(parseInt(input[i]))

        }

        else {
            console.log(chunk)
            if (firstChunk === true){
                product /= firstDiv
                product *= chunk[3]
                firstChunk = false;
            }
            else {
                product /= parseInt(chunk[0])
                chunk.shift()
                chunk.push(parseInt(input[i]))
                product *= chunk[3]
    
                if (product < lowProduct){
                    lowProduct = product
                }
            }
        }
    }

    return lowProduct
}



console.log(lowestProduct("2345611117899"))
