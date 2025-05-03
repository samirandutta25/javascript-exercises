const sumAll = function (startRange, endrange) {
    if (typeof startRange !== 'number' || Math.floor(startRange) !== startRange || startRange < 0) {
        return "ERROR";
    }
    if (typeof endrange !== 'number' || Math.floor(endrange) !== endrange || endrange < 0) {
        return "ERROR";
    }

    if (startRange > endrange) {
        let t = startRange;
        startRange = endrange;
        endrange = t;
    }

    let inclusiveRangeSum = 0;
    for (let j = startRange; j <= endrange; j++) {
        inclusiveRangeSum += j;
    }
    return inclusiveRangeSum;
};

// Do not edit below this line
module.exports = sumAll;
