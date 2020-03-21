/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map()
  for (let i = 0, len = strs.length; i < len; i++) {
    const sortedStr = strs[i].split('').sort().join('')
    if (map.has(sortedStr)) {
      let temp = map.get(sortedStr)
      temp.push(strs[i])
      map.set(sortedStr, temp)
    } else {
      map.set(sortedStr, [strs[i]])
    }
  }

  return [...map.values()]
};