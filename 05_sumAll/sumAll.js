const sumAll = function(startNum, finishNum) {
    let start, finish;
    if (typeof(startNum) != 'number' || typeof(finishNum) != 'number') return 'ERROR';
    if (startNum < 0 || finishNum < 0) return 'ERROR';
    if (startNum > finishNum) {
    start = finishNum;
    finish = startNum;
    } else {
        start = startNum;
        finish = finishNum;
    }
    let totalSum = 0;
    for (var i = start; i <= finish; i++) {
        totalSum += i;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
