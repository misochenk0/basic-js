const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str, count = 1) {
  return str.split('').reduce(((prev, current, i) => {
    if(prev[prev.length - 1] === current) {
      count++
      if(i === str.length - 1) {
        prev = prev.substring(0, prev.length-1) + count + prev.substring(prev.length - 1, prev.length) 
      }
      return prev
    } else {
      if(count > 1) {
        prev = prev.substring(0, prev.length-1) + count + prev.substring(prev.length - 1, prev.length) 
      }
      count = 1
    }
    return prev + current
  }), '')
}

console.log(encodeLine('aaaatttt'))

module.exports = {
  encodeLine
};
