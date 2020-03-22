/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 对数组进行排序
  nums.sort((a, b) => a - b)

  let result = []

  const len = nums.length;
  for (let k = 0; k < len - 2; k++) {
    if (nums[k] > 0) {
      break
    }

    if (nums[k] === nums[k - 1]) {
      continue
    }

    let i = k + 1
    let j = len - 1
    for (; i < j;) {
      const s = nums[k] + nums[i] + nums[j]

      if (s < 0) {
        i++
        while (i < j && nums[i] === nums[i - 1]) {
          i++
        }
      } else if (s > 0) {
        j--
        while (i < j && nums[j] === nums[j + 1]) {
          j--
        }
      } else {
        result.push([nums[k], nums[i], nums[j]])
        i++
        j--
        while (i < j && nums[i] === nums[i - 1]) {
          i++
        }

        while (i < j && nums[j] === nums[j + 1]) {
          j--
        }
      }
    }
  }

  return result
};