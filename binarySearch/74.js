/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) {
    return false
  }
  // let arr = matrix.join(',').split(',').map(item => Number(item));
  let arr = []
  for (let i = 0, len = matrix.length; i < len; i++) {
    arr = arr.concat(matrix[i])
  }

  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    if (arr[mid] === target) {
      return true
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return false
};