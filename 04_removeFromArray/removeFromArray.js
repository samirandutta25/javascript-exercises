const removeFromArray = function() {
    let inputArray = arguments[0];
    const removalArray = [];
    for( let i = 1 ; i < arguments.length; i++){
        removalArray.push(arguments[i]);
    }
    for( let r of removalArray){
        inputArray = inputArray.filter( ele => ele !== r);
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
