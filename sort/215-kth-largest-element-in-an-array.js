/**
 * 方法一：类快排思想
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return quickSort(nums, 0, nums.length - 1, nums.length - k)
};

function quickSort(nums, lo, hi, k) {
  const pivot = partition(nums, lo, hi);
  if (pivot === k) {
    return nums[pivot]
  }
  return pivot > k ? quickSort(nums, lo, pivot - 1, k) : quickSort(nums, pivot + 1, hi, k)
}

function partition(nums, lo, hi) {
  let pivot = hi
  let counter = lo

  for (let i = lo; i < hi; i++) {
    if (nums[i] < nums[pivot]) {
      const temp = nums[counter]
      nums[counter] = nums[i]
      nums[i] = temp
      counter++
    }
  }
  const temp = nums[counter]
  nums[counter] = nums[pivot]
  nums[pivot] = temp
  return counter
}