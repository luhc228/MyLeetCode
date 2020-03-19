/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  mergeSort(nums)
  return nums
};

function mergeSort(nums, left, right) {
  left = typeof left === 'number' ? left : 0;
  right = typeof right === 'number' ? right : nums.length - 1;
  if (left < right) {
    let mid = (left + right) >> 1;

    mergeSort(nums, left, mid)
    mergeSort(nums, mid + 1, right)
    merge(nums, left, mid, right)
  }
}

function merge(nums, left, mid, right) {
  // 创建一个新的数组存储排序的元素
  let temp = []
  let i = left, j = mid + 1, k = 0

  while (i <= mid && j <= right) {
    temp[k++] = nums[i] < nums[j] ? nums[i++] : nums[j++]
  }
  // 把剩下还没排序的元素也依次排序进去temp
  while (i <= mid) {
    temp[k++] = nums[i++]
  }
  while (j <= right) {
    temp[k++] = nums[j++]
  }

  for (let i = 0; i < k; i++) {
    nums[left + i] = temp[i]
  }
}
