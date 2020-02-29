/**
 * 使用hashMap
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hash = new Map()

  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split('').sort().join('')
    if (hash.has(sorted)) {
      let temp = hash.get(sorted)
      temp.push(strs[i])
      hash.set(sorted, temp)
    } else {
      hash.set(sorted, [strs[i]])
    }
  }

  return [...hash.values()]
};