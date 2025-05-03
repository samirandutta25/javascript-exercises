const reverseString = function(inputString) {
    let reversedString = '';
    for( let char of inputString){
        reversedString = char.concat(reversedString);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
