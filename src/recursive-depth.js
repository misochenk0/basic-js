const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

class DepthCalculator {
  // calculateDepth(array) {
  //   return Array.isArray(array) ? 1 + Math.max(0, ...array.map(calculateDepth)) : 0; 
  // }
  calculateDepth(arr){
    if(arr.filter(item => item.constructor.name === "Array").length !== 0){

        return 1 + this.calculateDepth([].concat(...arr.filter(item => {
          return item.constructor.name === "Array"
        })));

    } else {
        return 1;
    }
  }
}


module.exports = {
  DepthCalculator
};
