/**
 * 冒泡排序
 * @param {number[]} nums
 * @return {number[]}
 */
var bubbleSortArray = function (nums) {
  if (nums.length === 1) {
    return nums
  }

  for (let i = 0; i < nums.length - 1; i++) {
    // 有序的标志位
    let flag = false
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j + 1]
        nums[j + 1] = nums[j]
        nums[j] = temp
        flag = true
      }
    }

    if (!flag) {
      break
    }
  }

  return nums
};

/**
 * 插入排序
 * @param {number[]} nums
 * @return {number[]}
 */
var insertSortArray = function (nums) {
  if (nums.length === 1) {
    return nums
  }

  for (let i = 1; i < nums.length; i++) {
    let current = nums[i]
    let j = i - 1
    for (; j >= 0; j--) {
      if (nums[j] > current) {
        nums[j + 1] = nums[j]
      } else {
        break
      }
    }

    nums[j + 1] = current
  }

  return nums
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var selectionSortArray = function (nums) {
  if (nums.length === 1) {
    return nums
  }
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j
      }
    }
    const temp = nums[minIndex]
    nums[minIndex] = nums[i]
    nums[i] = temp
  }

  return nums
};