/**
 * 方法一：双指针（从后往前遍历）
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1
  let p2 = n - 1
  let p = m + n - 1
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] < nums2[p2]) {
      nums1[p] = nums2[p2]
      p2 -= 1
    } else {
      nums1[p] = nums1[p1]
      p1 -= 1
    }
    p--
  }

  if (p2 >= 0) {
    for (let i = p; i >= 0; i--) {
      nums1[i] = nums2[p2]
      p2--
    }
  }
};

/**
 * 方法一：排序
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let j = 0
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[j]
    j++
  }
  nums1.sort((a, b) => a - b)
};