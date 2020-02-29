// 1. 两数之和
/**
 * 解法1 暴力解题 使用两层循环
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var solution1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        return [i, j]
      }
    }
  }
};

/**
 * 使用hashMap使用
 * 空间换时间 查找时间为O(n)降为O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var solution2 = function (nums, target) {
  let map = new Map();

  nums.forEach((value, index) => {
    map.set(value, index)
  })

  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i];

    if (map.get(rest) && map.get(rest) !== i) {
      return [i, map.get(rest)]
    }
  }
};

/**
 * 类似于一次hashMap
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var solution3 = function (nums, target) {
  let arr = []

  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i];
    if (arr[rest] !== undefined) {
      return [i, arr[rest]]
    }

    arr[nums[i]] = i
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i]
    if (map.get(rest) !== undefined) {
      return [map.get(rest), i]
    }

    map.set(nums[i], i)
  }
};