const insertSort = (arr) => {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    const pivot = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > pivot) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = pivot
  }
  return arr
}

const arr = [1, 10, -2, 9, 21, 2, 5, 3, 4, 1, 6]
// const arr = [4, 3, 1, 3, 4, 2, 6]
const arr1 = arr.slice()

console.log('inital arr', arr)
console.time('insertSort')
console.log(insertSort(arr))
console.timeEnd('insertSort')