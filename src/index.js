// You should implement your task here.

module.exports = function towelSort(matrix) {
    return matrix ? matrix.reduce((accum, current, index) => {
        if (index % 2 == 0) {
            return accum.concat(current);
        } else {
            return accum.concat(current.reverse());
        }
    }, []) : [];
}