// function threeSum(arr) {
//   const len = arr.length
//   if (len < 3) {
//     return []
//   }
//   arr.sort((a, b) => a - b)
//   let res = []
//   for (let i = 0; i <= len - 3; i++) {
//     if (!i || arr[i] !== arr[i - 1]) {
//       let left = i + 1, right = len - 1
//       while (left < right) {
//         const sum = arr[i] + arr[left] + arr[right]
//         if (!sum) {
//           res.push([arr[i], arr[left], arr[right]])
//           left++
//           right--
//           while (left < right && arr[left] === arr[left - 1]) {
//             left++
//           }
//           while (left < right && arr[right] === arr[right + 1]) {
//             right--
//           }
//         } else if (sum > 0) {
//           right--
//         } else {
//           left++
//         }
//       }
//     }
//   }
//   console.log(arr)
//   return res
// }

function threeSum(arr) {
  const len = arr.length
  arr.sort((a, b) => a - b)
  let res = []
  for (let i = 0; i <= len - 3; i++) {
    // arr[i]大于0，后面找不到满足条件的二元组
    if (arr[i] > 0) {
      break
    }
    // 跳过相同的元素（arr[i - 1]已经判断了，和它相等的跳过）
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue
    }
    // 固定i，移动left和right
    let left = i + 1, right = len - 1
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right]
      if (!sum) {
        res.push([arr[i], arr[left], arr[right]])
        while (left < right && arr[left] === arr[++left]) { }
        while (left < right && arr[right] === arr[--right]) { }
      } else if (sum > 0) {
        while (left < right && arr[right] === arr[--right]) { }
      } else {
        while (left < right && arr[left] === arr[++left]) { }
      }
    }
  }
  return res
}

let arr = [-1, 0, -1, 0, 2, -3, 1, 2, -1, -4]
console.log(threeSum(arr))