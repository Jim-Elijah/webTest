const quickSort = (arr) => {
  const len = arr.length
  if (len <= 1) {
    return arr
  }

  tryQuickSort(0, len - 1)
  return arr

  function tryQuickSort(l, r) {
    if (l > r) {
      return
    }
    // 选中间位置的值作为pivot
    const mid = Math.floor(l + (r - l) / 2);
    [arr[l], arr[mid]] = [arr[mid], arr[l]];

    const index = partition(l, r)
    tryQuickSort(l, index - 1)
    tryQuickSort(index + 1, r)
  }

  // 解法一
  function partition(left, right) {
    if (left > right) {
      return
    }
    // 以arr[left]为pivot，将左边大于pivot的第一个元素arr[i]和右边小于pivot的第一个元素arr[j]交换
    const pivot = arr[left]
    let i = left, j = right
    while (i <= j) {
      // 寻找大于midVal的位置
      while (i <= j && arr[i] <= pivot) {
        i++
      }
      // 寻找小于midVal的位置
      while (i <= j && arr[j] >= pivot) {
        j--
      }
      if (i < j) {
        // 交换
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }

    [arr[left], arr[j]] = [arr[j], arr[left]]
    return j
  }

  // 解法二
  // function partition(left, right) {
  //   if (left > right) {
  //     return
  //   }
  //   const pivot = arr[left]
  //   // arr[left, i-1] <= midVal, arr[hightStart, right] >= midVal
  //   let highStart = right + 1, i = left
  //   while (i < highStart) {
  //     if (arr[i] <= pivot) {
  //       i++
  //     } else {
  //       highStart--
  //       [arr[i], arr[highStart]] = [arr[highStart], arr[i]]
  //     }
  //   }
  //   i -= 1;
  //   [arr[left], arr[i]] = [arr[i], arr[left]];
  //   return i
  // }

  // 解法三
  // function partition(left, right) {
  //   if (left > right) {
  //     return
  //   }
  //   const pivot = arr[left]
  //   // arr[left, i] <= midVal, arr[i+1, j-1] >= midVal
  //   let i = left - 1, j = left
  //   while (j <= right) {
  //     if (arr[j] <= pivot) {
  //       i++;
  //       [arr[i], arr[j]] = [arr[j], arr[i]]
  //     }
  //     j++
  //   }
  //   [arr[left], arr[i]] = [arr[i], arr[left]];
  //   return i
  // }
}

const bubbleSort = (arr) => {
  const len = arr.length
  let flag = false
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
    if (!flag) {
      break
    }
  }
  return arr
}

// const arr = [1, 10, -2, 9, 21, 2, 5, 3, 4, 1, 6]
const arr = [4, 3, 1, 3, 4, 2, 6]
const arr1 = arr.slice()

console.log('inital arr', arr)
console.time('quickSort')
console.log(quickSort(arr))
console.timeEnd('quickSort')

console.time('bubbleSort')
console.log(bubbleSort(arr1))
console.timeEnd('bubbleSort')
