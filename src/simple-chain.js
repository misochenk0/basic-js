const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chainArr: [],
  chainStr: '',

  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    if(value === null) {
      this.chainArr.push('null');
    } else if (value === false) {
      this.chainArr.push('false');      
    } else if (typeof value === 'number' &&  isNaN(value)) {
      this.chainArr.push("NaN");
    } else {
      this.chainArr.push(value.toString());
    }

    return this
  },
  removeLink(position) {
    if(position <= 0 || typeof position !== 'number' || +position > this.chainArr.length) {
      console.log('error');
      this.chainArr = [];
      throw new Error("You can't remove incorrect link!")
    }
    this.chainArr = this.chainArr.filter((item, i) => {
      if(i + 1 === position) {
        return null
      } else {
        return item
      }
    })
    return this

  },
  reverseChain() {
    this.chainArr = this.chainArr.reverse();
    return this
  },
  finishChain() {
    let arr =this.chainArr;
    this.chainArr = [];

    return'( ' + arr.join(' )~~( ') + ' )'
  }
};

module.exports = {
  chainMaker
};