function matrix(x){
    var square = Math.pow(x,2)
    var matrix = []
    for (let i=0;i<x;i++){
        matrix.push([])
        for (let j=0;j<x;j++){
            matrix[i].push(null)
        }
    }

    function populate(x, matrix){
        var square = Math.pow(x,2)
        var num = 1
        var peel = 0
        var cap = x - 1
        while (num<=square){
            for (let i=0;i<x;i++){
                if(matrix[peel][i] === null){
                    matrix[peel][i] = num
                    num++
                }

            }
            for (let i=1;i<x;i++){
                if (matrix[i][x- (peel + 1)] === null){
                    matrix[i][x-(peel + 1)] = num
                    num++
                }
            }

            //Still may need debugging, like the (peel + 1), scoping the loops
            for (let i=cap;i>=0;i--) {
                if(matrix[cap][i] === null){
                    matrix[cap][i] = num
                    num++
                }
            }

            for (let i=x-1;i>=0;i--){
                if(matrix[i][peel] === null){
                    matrix[i][peel] = num
                    num++
                }
            }

            peel++
            cap--
        }

        
        return matrix
    }

    matrix = populate(x, matrix)

    console.log(matrix)
}

matrix(10)