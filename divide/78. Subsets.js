/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [[]]
  for (let i = 0; i < nums.length; i++) {
    const currentResultLen = result.length;
    for (let j = 0; j < currentResultLen; j++) {
      const temp = result[j]
      result.push([...temp, nums[i]])
    }
  }

  return result

};