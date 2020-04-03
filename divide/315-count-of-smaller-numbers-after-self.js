/**
 * 方法一：归并排序
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  let res = new Array(nums.length).fill(0)
  let indexes = Array.from({ length: nums.length }, (v, i) => i)
  mergeSort(nums, indexes, 0, nums.length - 1, res)
  return res
};

function mergeSort(nums, indexes, left, right, res) {
  let mid = left + ((right - left) >> 1)
  if (left >= right) {
    return
  }
  mergeSort(nums, indexes, left, mid, res)
  mergeSort(nums, indexes, mid + 1, right, res)
  merge(nums, indexes, left, mid, right, res)
}

function merge(nums, indexes, left, mid, right, res) {
  let temp = []
  let k = 0
  let i = left
  let j = mid + 1
  while (i <= mid && j <= right) {
    if (nums[indexes[i]] <= nums[indexes[j]]) {
      // temp[k++] = indexes[i++]
      temp[k++] = indexes[j++]
    } else {
      res[indexes[i]] += right - j + 1
      // temp[k++] = indexes[j++]
      temp[k++] = indexes[i++]
    }
  }
  while (i <= mid) {
    temp[k++] = indexes[i++]
  }
  while (j <= right) {
    temp[k++] = indexes[j++]
  }
  for (let i = 0; i < k; i++) {
    indexes[left + i] = temp[i]
  }
}