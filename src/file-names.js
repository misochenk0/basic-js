const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names, obj={}) {

  return names.reduce((prev, el) => {
    console.log(prev);
    function checkIfHas(name) {
      return prev.some(item => item === name)
    }
    if(!checkIfHas(el)) {
      return prev = [...prev, el]
    } else {
      if(obj[el]) {
        obj[el] += 1
      } else {
        obj[el] = 1
      }
      return prev = [...prev, `${el}(${obj[el]})`]
      
    }      
  },[])
}
module.exports = {
  renameFiles
};
