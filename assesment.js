
function fibonachi(n){
    let fibonacciNum = 0

    for(let i=0; i++; i<= n){

        for(let j = i; j++; j<= n){
            fibonacciNum = i+j
        }
    }

    return fibonacciNum
}


function gcd(a,b) {
    if(a < b){
        let remainder =  b / a

        if( remainder > 0 ){
            
            for (let i= remainder; i / a; i < 0 ){
                remainder = i
            }

            return remainder
        }else {
            return a
        }
    
    }else {
        let remainder =  a / b

        if( remainder > 0 ){
            
            for (let i= remainder; i / b; i < 0 ){
                remainder = i
            }

            return remainder
        }else {
            return b
        }
    }
}

// console.log(fibonachi(5));
console.log(gcd(4,2));
