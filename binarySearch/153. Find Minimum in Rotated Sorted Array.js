/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0
  let right = nums.length - 1;
  if (nums[right] > nums[left]) {
    return nums[left]
  }
  while (left < right) {
    let mid = left + ((right - left) >> 1)
    if (nums[0] > nums[mid]) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return nums[left]
};