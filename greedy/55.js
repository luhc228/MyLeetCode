/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const len = nums.length
  let lastReachIndex = len - 1
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] + i >= lastReachIndex) {
      lastReachIndex = i
    }
  }

  return lastReachIndex === 0
};


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let k = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    if (i > k) {
      return false
    } else {
      k = Math.max(k, i + nums[i])
    }
  }

  return true
};