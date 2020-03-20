/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 0) {
    return -1
  }
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    let mid = (left + right) >> 1
    if (nums[0] <= nums[mid] && (target > nums[mid] || target < nums[0])) {
      left = mid + 1
    } else if (target > nums[mid] && target < nums[0]) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left === right && nums[left] === target ? left : -1
};