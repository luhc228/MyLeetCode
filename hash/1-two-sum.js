/**
 * 方法一：两遍循环
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }

  throw new Error('Not Found')
};

/**
 * 方法二：
 * 两遍hash表
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0, len = nums.length; i < len; i++) {
    map.set(nums[i], i)
  }
  for (let i = 0, len = nums.length; i < len; i++) {
    const remain = target - nums[i]
    if (map.has(remain)) {
      const idx = map.get(remain)
      if (idx !== i) {
        return [i, idx]
      }
    }
  }
  throw new Error('Not Found')
};

/**
 * 方法三：一次hash
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0, len = nums.length; i < len; i++) {
    const remain = target - nums[i]
    if (map.has(remain)) {
      const idx = map.get(remain)
      if (idx !== i) {
        return [i, idx]
      }
    } else {
      map.set(nums[i], i)
    }
  }
};