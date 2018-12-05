function zero(o) {
    if (typeof o === 'undefined'){
        return 0
    } 
    var ans;
    switch (o[0]){
        case "+":
            ans = 0 + o[1];
            return ans;
        case "-":
            ans = 0 - o[1];
            return ans;
        case "*":
            ans = 0 * o[1];
            return ans;
        case "/":
            ans = 0/o[1];
            ans = Math.floor(ans)
            return ans;
    }
}
function one(o) {
    if (typeof o === 'undefined'){
        return 1
    } 
    var ans;
    console.log(o)
    console.log(o[1])
    switch (o[0]){
        case "+":
            ans = 1 + o[1];
            return ans;
        case "-":
            ans = 1 - o[1];
            return ans;
        case "*":
            ans = 1 * o[1];
            return ans;
        case "/":
            ans = 1/o[1];
            ans = Math.floor(ans)
            return ans;
    }
}
function two(o) {
    if (typeof o === 'undefined'){
        return 2
    }
    var ans;
    switch (o[0]){
        case "+":
            ans = 2 + o[1];
            return ans;
        case "-":
            ans = 2 - o[1];
            return ans;
        case "*":
            ans = 2 * o[1];
            return ans;
        case "/":
            ans = 2/o[1];
            ans = Math.floor(ans)
            return ans;
    }
}
function three(o) {
    if (typeof o === 'undefined'){
        return 3
    } 
    var ans;
    switch (o[0]){
        case "+":
            ans = 3 + o[1];
            return ans;
        case "-":
            ans = 3 - o[1];
            return ans;
        case "*":
            ans = 3 * o[1];
            return ans;
        case "/":
            ans = 3/o[1];
            ans = Math.floor(ans)
            return ans;
    }
}
function four(o) {
    if (typeof o === 'undefined'){
        return 4
    } 
    var ans;
    switch (o[0]){
        case "+":
            ans = 4 + o[1];
            return ans;
        case "-":
            ans = 4 - o[1];
            return ans;
        case "*":
            ans = 4 * o[1];
            return ans;
        case "/":
            ans = 4/o[1];
            ans = Math.floor(ans)
            return ans;
    }
}
function five(o) {
    if (typeof o === 'undefined'){
        return 5
    } 
    var ans;
    switch (o[0]){
        case "+":
            ans = 5 + o[1];
            return ans;
        case "-":
            ans = 5 - o[1];
            return ans;
        case "*":
            ans = 5 * o[1];
            return ans;
        case "/":
            ans = 5/o[1];
            ans = Math.floor(ans)
            return ans;
    }
}
function six (o) {
    if (typeof o === 'undefined'){
        return 6
    } 
    var ans;
    switch (o[0]){
        case "+":
            ans = 6 + o[1];
            return ans;
        case "-":
            ans = 6 - o[1];
            return ans;
        case "*":
            ans = 6 * o[1];
            return ans;
        case "/":
            ans = 6/o[1];
            ans = Math.floor(ans)
            return ans;
    }
}
function seven(o) {
    if (typeof o === 'undefined'){
        return 7
    } 
    var ans;
    switch (o[0]){
        case "+":
            ans = 7 + o[1];
            return ans;
        case "-":
            ans = 7 - o[1];
            return ans;
        case "*":
            ans = 7 * o[1];
            return ans;
        case "/":
            ans = 7/o[1];
            ans = Math.floor(ans)
            return ans;
    }
}
function eight(o) {
    if (typeof o === 'undefined'){
        return 8
    } 
    var ans;
    switch (o[0]){
        case "+":
            ans = 8 + o[1];
            return ans;
        case "-":
            ans = 8 - o[1];
            return ans;
        case "*":
            ans = 8 * o[1];
            return ans;
        case "/":
            ans = 8/o[1];
            ans = Math.floor(ans)
            return ans;
    }
}
function nine(o) {
    if (typeof o === 'undefined'){
        return 9
    } 
    var ans;
    switch (o[0]){
        case "+":
            ans = 9 + o[1];
            return ans;
        case "-":
            ans = 9 - o[1];
            return ans;
        case "*":
            ans = 9 * o[1];
            return ans;
        case "/":
            ans = 9/o[1];
            ans = Math.floor(ans)
            return ans;
    }
}

function plus(i) {return ['+', i] }
function minus(i) {return ['-', i]}
function times(i) {return ["*", i]}
function dividedBy(i) {return ["/", i]}



