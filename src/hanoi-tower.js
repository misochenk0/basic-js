const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let prev = 1;
  let total = 0;
  for(let i = 0; i< disksNumber; i++) {
    total+=prev;
    prev*=2
  }

  let oneTurn = 3600/turnsSpeed 

  return {
    turns: total,
    seconds: Math.floor(oneTurn*total)
  }

}
module.exports = {
  calculateHanoi
};
