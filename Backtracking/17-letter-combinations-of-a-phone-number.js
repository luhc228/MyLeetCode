/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) {
    return []
  }
  let res = []
  let map = new Map()
  map.set('2', 'abc')
  map.set('3', 'def')
  map.set('4', 'ghi')
  map.set('5', 'jkl')
  map.set('6', 'mno')
  map.set('7', 'pqrs')
  map.set('8', 'tuv')
  map.set('9', 'wxyz')
  search(digits, map, '', 0, res)
  return res
};

function search(digits, map, s, index, res) {
  // terminator
  if (index === digits.length) {
    res.push(s)
    return
  }
  // process
  let letters = map.get(digits.charAt(index));
  for (let i = 0, len = letters.length; i < len; i++) {
    // drill down
    search(digits, map, s + letters.charAt(i), index + 1, res)
  }
}
