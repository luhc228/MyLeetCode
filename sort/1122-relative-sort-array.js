/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let arr = new Array(1001).fill(0)
  let ans = []

  for (let i = 0, len = arr1.length; i < len; i++) {
    arr[arr1[i]]++
  }

  for (let i = 0, len = arr2.length; i < len; i++) {
    while (arr[arr2[i]] > 0) {
      ans.push(arr2[i])
      arr[arr2[i]]--
    }
  }

  for (let i = 0, len = arr.length; i < len; i++) {
    while (arr[i] > 0) {
      ans.push(i)
      arr[i]--
    }
  }

  return ans
};
