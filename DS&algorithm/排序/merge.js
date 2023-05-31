const mergeSort = (arr) => {
  const len = arr.length
  merge(0, len - 1)
  return arr

  function merge(left, right) {
    if (left >= right) {
      return
    }
    const mid = Math.floor(left + (right - left) / 2)
    merge(left, mid)
    merge(mid + 1, right)

    // 已排序的左、右部分遍历指针i和j
    let [i, j] = [left, mid + 1]
    let k = 0
    const tmp = []
    // 同时遍历左、右部分，小的那个放到tmp
    while (i <= mid && j <= right) {
      tmp[k++] = arr[i] < arr[j] ? arr[i++] : arr[j++]
    }
    // 左边已遍历完，遍历右边
    while (j <= right) {
      tmp[k++] = arr[j++]
    }
    // 右边已遍历完，遍历左边
    while (i <= mid) {
      tmp[k++] = arr[i++]
    }
    // 重置tmp指针
    k = 0
    // 从tmp复制到arr
    while (k <= right - left) {
      arr[left + k] = tmp[k++]
    }
  }
}

// const arr = [1, 10, -2, 9, 21, 2, 5, 3, 4, 1, 6]
const arr = [4, 3, 1, 3, 4, 2, 6]
// const arr = [2, 4, 1, 5]

console.log('inital arr', arr)
console.time('mergeSort')
console.log(mergeSort(arr))
console.timeEnd('mergeSort')