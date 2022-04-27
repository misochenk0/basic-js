const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((prev, curentValue, idx) => {
    curentValue.forEach((item, i) => {
      if(!matrix[idx - 1]) {
        prev += item
      } else {
        matrix[idx + -1][i] !== 0 ? prev+= item : null 
      }
    })
    return prev
  }, 0)
}


module.exports = {
  getMatrixElementsSum
};
