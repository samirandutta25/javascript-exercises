const repeatString = function( repeatingString, timesRepeated) {
    let stringWithRepetition = '';
    
    if( timesRepeated < 0 ) return "ERROR";

    while(timesRepeated--){
        stringWithRepetition +=  repeatingString;
    }
    return stringWithRepetition;
};

// Do not edit below this line
module.exports = repeatString;
