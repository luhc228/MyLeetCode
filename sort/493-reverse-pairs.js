/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (arr) {
  return mergeSort(arr)
};

function mergeSort(arr, left, right) {
  left = typeof left === 'number' ? left : 0;
  right = typeof right === 'number' ? right : arr.length - 1;
  if (left >= right) {
    return 0
  }
  let mid = (left + right) >> 1;
  let count = mergeSort(arr, left, mid) + mergeSort(arr, mid + 1, right)

  for (let i = left, j = mid + 1; i <= mid; i++) {
    while (j <= right && arr[i] > 2 * arr[j]) {
      j++
    }
    count += j - (mid + 1);
  }

  let temp = []
  let i = left
  let j = mid + 1
  let k = 0
  while (i <= mid && j <= right) {
    temp[k++] = arr[i] < arr[j] ? arr[i++] : arr[j++]
  }
  while (i <= mid) {
    temp[k++] = arr[i++]
  }
  while (j <= right) {
    temp[k++] = arr[j++]
  }

  for (let i = 0; i < k; i++) {
    arr[left + i] = temp[i]
  }
  return count
}