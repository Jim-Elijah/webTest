/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  const n = matrix.length
  if (!n) {
      return false
  }
  const m = matrix[0].length
  return tryFind([0, 0], [n - 1, m - 1])

  function tryFind(startPos, endPos) {
      const [start_i, start_j] = startPos
      const [end_i, end_j] = endPos
      if (start_i < 0 || end_i < 0 || start_j < 0 || end_j < 0) {
          return false
      }
      if (start_i > n - 1 || end_i > n - 1 || start_j > m - 1 || end_j > m - 1) {
          return false
      }
      if (matrix[start_i][start_j] > target || matrix[end_i][end_j] < target) {
          return false
      }
      if (start_i === end_i && start_j === end_j) {
          return matrix[start_i][start_j] === target
      }
      const mid_i = Math.floor((start_i + end_i) / 2)
      const mid_j = Math.floor((start_j + end_j) / 2)
      const val = matrix[mid_i][mid_j]
      if (val === target) {
          return true
      }
      if (val > target) {
          return tryFind([start_i, start_j], [mid_i, mid_j]) || tryFind([start_i, mid_j + 1], [mid_i - 1, end_j]) || tryFind([mid_i + 1, start_j], [end_i, mid_j - 1])
      }
      return tryFind([mid_i + 1, start_j], [end_i, mid_j]) || tryFind([start_i, mid_j + 1], [mid_i, end_j])
          || tryFind([mid_i + 1, mid_j + 1], [end_i, end_j])
  }
};
const arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]
const target = 5
console.log(findNumberIn2DArray(arr, target))
// console.log(findNumberIn2DArray(arr, 20))
// console.log(findNumberIn2DArray(arr, 120))
// console.log(findNumberIn2DArray(arr, -1))
