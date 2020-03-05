/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    if (nums[i] > 0) {
      break
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    while (j < k) {
      if (-nums[i] < nums[j] + nums[k]) {
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--
        }
      } else if (-nums[i] > nums[j] + nums[k]) {
        j++;
        while (j < k && nums[j] === nums[j - 1]) {
          j++
        }
      } else {
        res.push([nums[i], nums[j], nums[k]])
        j++;
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--
        }
        while (j < k && nums[j] === nums[j - 1]) {
          j++
        }
      }
    }
  }

  return res
}