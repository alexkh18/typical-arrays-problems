
exports.min = function min (array) {
    if(Array.isArray(array) && array.length > 0){
        let minValue = array[0];
        array.forEach(elem => (elem < minValue) ? minValue = elem : minValue);
        return minValue;
    }
    return 0;
}

exports.max = function max (array) {
    if(Array.isArray(array) && array.length > 0){
        let maxValue = array[0];
        array.forEach(elem => (elem > maxValue) ? maxValue = elem : maxValue);
        return maxValue;
    }
    return 0;
}

exports.avg = function avg (array) {
    if(Array.isArray(array) && array.length > 0){
        const counter = array.length;
        let summary = array.reduce((accumulator, currentValue, currentIndex) => (accumulator + currentValue));
        return (summary/counter);
    }
    return 0;
}
