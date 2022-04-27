const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let arr = [];
  let separators = [];
  if(options.additionRepeatTimes) {
    for(let i =0; i < options.additionRepeatTimes; i++) {
      let str = options.addition === null ? 'null' :  options.addition 
      separators.push(str);
    }
  } else {
    if(options.addition === null ? 'null' :  options.addition ) {
      separators.push(options.addition === null ? 'null' :  options.addition )
    }
  }
  if(options.repeatTimes) {
    for(let i = 0; i < options.repeatTimes; i++) {
      let strI = str
      arr.push(strI)
    }
  } else {
    arr.push(str)
  }
  if(options.additionSeparator) {
    arr = arr.map(item => item + separators.join(options.additionSeparator))
  } else {
    arr = arr.map(item => item + separators.join('|'))
  }
  if(options.separator) {
    console.log(arr.join(options.separator));
    return arr.join(options.separator)
  } else {
    console.log(arr.join('+'));
    return arr.join('+')
  }

}

repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' })

module.exports = {
  repeater
};
