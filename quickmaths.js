function sum(n){
    let num = n;
    let sum = 0
    while (num > 0){
        let digit;
        digit = num%10;
        num -= digit;
        num = num/10
        sum += digit
    }
    
    console.log(sum) 
}


sum(3)