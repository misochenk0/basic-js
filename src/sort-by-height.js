const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let obj = {};
  arr.forEach((item, i) => {
    if(item === -1) {
      obj[i] = item
    }
  })
  arr = arr.filter(item => item !== -1).sort((a,b) => a-b);
    
  function insert( index, array ) {
    array.splice( index, 0, -1 );
  };

  Object.keys(obj).forEach(item => {
    insert(item, arr)
  })

  return arr
  
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

module.exports = {
  sortByHeight
};
