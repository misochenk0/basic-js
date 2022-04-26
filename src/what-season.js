const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) {
    return 'Unable to determine the time of year!'
  }
  if(date.getMonth && typeof date.getMonth === 'function') {
    if(date.hasOwnProperty('toString')) {
      throw new Error('Invalid date!')
    }
    let currentMonth = date.getMonth();
    if(+currentMonth < 2 || +currentMonth === 11) {
      return 'winter'
    } else if (currentMonth >= 2 && currentMonth < 5) {
      return 'spring'
    } else if (currentMonth >= 5 && currentMonth < 8) {
      return 'summer'
    } else {
      return 'autumn'
    }
  } else {
    throw new Error('Invalid date!')
  }
}



module.exports = {
  getSeason
};
