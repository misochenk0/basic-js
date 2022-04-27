const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  let items = []
  domains.forEach(item => {
    let arr =item.split('.');
    items.push({
      area: arr[arr.length - 1],
      domain: arr.length < 3 ? arr[0] : arr [1],
      subdomain: arr.length === 3 ? arr[0] : null
    })
  })
  let diffAreas = [],
      diffDomains = [],
      subdomains = [];

  let doms = 0;
  items.forEach(item => {
    diffAreas.push(item.area)
    diffDomains.push(item.domain + '.' + item.area)
    if(item.subdomain) {
      subdomains.push(item.subdomain + '.'+  item.domain + '.' + item.area)
    }
    
  })
  diffAreas = [...new Set(diffAreas)];
  diffDomains = [...new Set(diffDomains)];
  subdomains = [...new Set(subdomains)];

  diffAreas.forEach(area => {
    let total = 0;
    domains.forEach(domain => {
      if(domain.indexOf(area) >= 0) {
        total++ 
      }
    })
    let key = '.' + area;
    res[key] = total
  })

  diffDomains.forEach((item, i) => {
    let total = 0;
    domains.forEach(domain => {
      if(domain.indexOf(item) >= 0) {
        total++ 
      }
    })
    let key = '.' + item.split('.').reverse().join('.');
    res[key] = total
  })

  subdomains.forEach((item, i) => {
    let total = 0;
    domains.forEach(domain => {
      if(domain.indexOf(item) >= 0) {
        total++ 
      }
    })
    let key = '.' + item.split('.').reverse().join('.');
    res[key] = total
  })


  return res
}




module.exports = {
  getDNSStats
};
