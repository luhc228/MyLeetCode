// 插入排序

function insertSort(arr) {
  let len = arr.length;
  let preIndex, current;

  for (let i = 1; i < len; i++) {
    // 记录前一个数的下标
    preIndex = i - 1
    // 记录当前的操作的目标数
    current = arr[i]

    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }

    arr[preIndex + 1] = current;
  }

  return arr
}

const arr = [7, 6, 1, 3, 0]
console.log(insertSort(arr));


function insertSort(arr) {
  let len = arr.length;

  let preIndex;
  let current;

  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i]
    while (preIndex >= 0 && current < arr[preIndex]) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--;
    }

    arr[preIndex + 1] = current
  }

  return arr;
}