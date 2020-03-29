/**
 * 方法一：双指针
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0 || nums.length === 1) {
    return nums.length
  }
  let j = 1
  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[j++] = nums[i]
    }
  }
  return j
};