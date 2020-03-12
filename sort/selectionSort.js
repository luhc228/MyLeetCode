// 选择排序

function selectionSort(arr) {
  let len = arr.length;
  let minIndex, temp;

  for (let i = 0; i < len; i++) {
    minIndex = i

    for (let j = i + 1; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }

    temp = arr[i];
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }

  return arr
}

const arr = [3, 6, 1, 2, 8]
console.log(selectionSort(arr))