/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 将原数组排好序
  nums.sort((a, b) => a - b)
  let result = []
  // 对数组进行循环
  let len = nums.length
  for (let k = 0; k < len - 2; k++) {
    // 1. 如果nums[k] > 0， 则不可能再得到结果了的
    if (nums[k] > 0) {
      break
    }
    // 2. 如果当前的值和前一个值相等，则最后得到的结果都是一样的，最后结果会出现重复项
    if (nums[k] === nums[k - 1]) {
      continue
    }
    // 3. 双指针法
    let i = k + 1, j = len - 1
    for (let i = k + 1, j = len - 1; i < j;) {
      let s = nums[i] + nums[j] + nums[k]
      if (s > 0) {
        j--
        while (i < j && nums[j] === nums[j + 1]) {
          j--
        }
      } else if (s < 0) {
        i++
        while (i < j && nums[i] === nums[i - 1]) {
          i++
        }
      } else {
        result.push([nums[k], nums[i], nums[j]])
        i++
        j--
        while (i < j && nums[i] === nums[i - 1]) {
          i++
        }
        while (i < j && nums[j] === nums[j + 1]) {
          j--
        }
      }
    }
  }

  return result
};