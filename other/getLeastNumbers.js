/**
 * 使用快排
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  quickSort(arr)
  return arr.slice(0, k)
};

function quickSort(arr, left, right) {
  left = typeof left === 'number' ? left : 0
  right = typeof right === 'number' ? right : arr.length - 1
  // 如果左边界大于右边界，不处理
  if (left > right) {
    return
  }
  const pviot = partition(arr, left, right)
  quickSort(arr, left, pviot - 1)
  quickSort(arr, pviot + 1, right)
}

function partition(arr, left, right) {
  let pviot = right
  let counter = left
  for (let i = left; i < right; i++) {
    if (arr[i] < arr[pviot]) {
      let temp = arr[i]
      arr[i] = arr[counter]
      arr[counter] = temp
      counter++
    }
  }

  let temp = arr[pviot]
  arr[pviot] = arr[counter]
  arr[counter] = temp

  return counter
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  mergeSort(arr)
  return arr.slice(0, k)
};

function mergeSort(arr, left, right) {
  left = typeof left === 'number' ? left : 0
  right = typeof right === 'number' ? right : arr.length - 1
  if (left >= right) {
    return;
  }
  let mid = left + ((right - left) >> 1)
  mergeSort(arr, left, mid)
  mergeSort(arr, mid + 1, right)
  merge(arr, left, mid, right)
}

function merge(arr, left, mid, right) {
  let temp = []
  let i = left, j = mid + 1, k = 0
  while (i <= mid && j <= right) {
    temp[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++]
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
}