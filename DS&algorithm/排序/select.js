const selectSort = (arr) => {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    let index = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[index]) {
        index = j
      }
    }
    [arr[i], arr[index]] = [arr[index], arr[i]]
  }
  return arr
}

const heapSort = (arr) => {
  let len = arr.length
  // 从最后一个非叶节点开始
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, i, len)
  }

  // 第一个和最后一个交换, len--，然后对根节点heapify
  for (let j = len - 1; j >= 0; j--) {
    [arr[0], arr[j]] = [arr[j], arr[0]]
    heapify(arr, 0, --len)
  }

  return arr

  // 对以index为根的子树heapify
  function heapify(arr, index, size) {
    let left = index * 2 + 1, max = index
    while (left < size) {
      if (arr[left] > arr[max]) {
        max = left
      }
      if (left + 1 < size && arr[left + 1] > arr[max]) {
        max = left + 1
      }
      if (max === index) {
        break
      }
      [arr[max], arr[index]] = [arr[index], arr[max]]
      index = max
      left = index * 2 + 1
    }
  }
}




const arr = [1, 10, -2, 9, 21, 2, 5, 3, 4, 1, 6]
// const arr = [4, 3, 1, 3, 4, 2, 6]
const arr1 = arr.slice()

console.log('inital arr', arr)
console.time('selectSort')
console.log(selectSort(arr))
console.timeEnd('selectSort')

console.time('heapSort')
console.log(heapSort(arr))
console.timeEnd('heapSort')