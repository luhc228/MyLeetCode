/**
 * 方法一 暴力求解法：两层循环
 * 最基础的模板套路，一定要掌握
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  for (let i = 0, len = height.length; i < len - 1; i++) {
    for (let j = i + 1, len = height.length; j < len; j++) {
      const area = (j - i) * Math.min(height[i], height[j])
      max = Math.max(area, max)
    }
  }

  return max;
};

/**
 * 方法二 双指针 两边往中间靠
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0
  for (let i = 0, j = height.length - 1; i < j;) {
    const minHeight = height[i] < height[j] ? height[i++] : height[j--]
    const area = minHeight * (j - i + 1)
    max = Math.max(area, max)
  }

  return max
};
