
function fibonachi(n){
    let fibonacciNum = 0

    for(let i=0; i++; i<= n){

        for(let j = i+1; j++; j<= n){
            fibonacciNum = i+j
        }
    }

    return fibonacciNum
}


function gcd(a, b) {
    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

console.log(fibonachi(5));
