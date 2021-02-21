
exports.min = function min (array) {
    let result;
    if (!array || array.length === 0) {
        result = 0;
    } else {
        let sortArray = array.sort(function(a,b) {
            return a - b;
        });
        result = sortArray[0];
    }
    return result;
}

exports.max = function max (array) {
    let result;
    if (!array || array.length === 0) {
        result = 0;
    } else {
        let sortArray = array.sort(function(a,b) {
            return a - b;
        });
        result = sortArray[array.length -1];
    }
    return result;
}

exports.avg = function avg (array) {
    let result;
    if (!array || array.length === 0) {
        result = 0;
    } else {
    let sumArray = array.reduce(function(sum, current) {
        return sum + current;
    }, 0);
    result = sumArray / array.length;
    }

    return result;
}
