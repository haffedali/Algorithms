let last;

var mySqrt = function(x) {
    l = last
    let start = Math.floor(x/2);
    let startSq = Math.pow(start, start)
    if (startSq > x){
        mySqrt(start)
    }
    if (startSq < x){
        mySqrt(start)
    }
    if (startSq){
        
    }
};
