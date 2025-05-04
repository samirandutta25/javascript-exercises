const fibonacci = function( n ) {
    // return nth fibbonacci
    n = Number(n); 
    if( n < 0 ){
        return "OOPS";
    }
    let first = 0;
    let second = 1;
    if( n === 0 ) return first;
    for ( let i = 0; i < (n-1); i++ ){
        let t = second;
        second += first;
        first = t;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
