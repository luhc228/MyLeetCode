/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  let map = new Map()
  for (let n of deck) {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1)
  }
  let arr = [...map.values()]
  let res = arr[0]
  return arr.every(i => (res = gcd(res, i)) > 1)
};
// 辗转相除法
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}