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
class DepthCalculator {


  constructor() {
    this.myDepth =  1;
    this.depth = [1];
  }

  calculateDepth(arr, depthA = this.myDepth) {
    let parentDepth = depthA;
    let once = false;
    arr.forEach(item =>{
      if(item instanceof Array) {
        if(!once) {
          parentDepth++
          once = true
        }
        this.depth.push(+parentDepth)
        this.calculateDepth(item, parentDepth)
      }
    })
    if(arr.every((item) => !(item instanceof Array))) {
      console.log(this.depth);
      return Math.max(...this.depth)
    }
    
  }
}


const instance = new DepthCalculator();
const calculateDepth = instance.calculateDepth.bind(instance);

calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]])


module.exports = {
  DepthCalculator
};
