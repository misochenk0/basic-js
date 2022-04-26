const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  let arrNew = [];

  if(!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  
  
  arrNew = arr.map((item, i ) => {
    if(item === '--double-next') {
      return arr[i+1]
    } else if (item === '--double-prev') {
      if(arr[i-2] === '--discard-next') {
        return null
      }
      return arr[i-1]
    } else return item
  })
  arrNew = arrNew.filter((item, i) => {
    if(arrNew[i] === '--discard-prev' || arrNew[i + 1] === '--discard-prev') {
      return null
    } else if(arrNew[i] === '--discard-next' || arrNew[i - 1] === '--discard-next'){
      return null
    }else {
      return item
    }
  })
  console.log(arrNew);
  return arrNew
}


module.exports = {
  transform
};
