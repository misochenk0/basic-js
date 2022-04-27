const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((item, i) => {
    return item.map((itemA, idx) => {
      let here = 0;

      if(item[idx + 1] && item[idx + 1] === true) {
        here++
      }
      if(item[idx - 1] && item[idx - 1] === true) {
        here++
      }
      function index(it) {
        if(matrix[i + it]) {
          if(matrix[i + itemA]&& matrix[i + it][idx] === true) {
            here++
          }
          if(matrix[i + itemA] && matrix[i + it][idx + 1] === true) {
            here++
          }
          if(matrix[i + itemA] && matrix[i + it][idx - 1] === true) {
            here++
          }
        }
      }
      index(-1)
      index(+1)
      
      return here
    })
  })
}
// console.log(minesweeper([
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ]))
module.exports = {
  minesweeper
};
