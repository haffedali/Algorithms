/**
 * INCOMPLETE
 * INCOMPLETE
 * INCOMPLETE
 * INCOMPLETE
 * INCOMPLETE
 * INCOMPLETE
 * INCOMPLETE
 */
function acute(n){
    var triangles = []
    var c = Math.floor(n/2)
    for (let i=c;i>0;i--){
        if ((Math.pow(2,1) + Math.pow(2,i)) === (Math.pow(2,i) + Math.pow(2,1))) {
            triangles.push([1,i,i])
        }
        if ((Math.pow(2,i)+1) % 5 === 0){
            for (j=2;j<i;j++){
                
            }
        }
    }

    console.log(triangles)

}

acute(21)