/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 自顶向下
// var canJump = function (nums) {
//   const len = nums.length
//   if (!len) {
//     return false
//   }
//   // f(i)表示从位置i能否跳到最后位置
//   // 0是初始值，true可以跳到最后，false不可以跳到最后
//   const memo = Array(len).fill(0)
//   memo[len - 1] = true

//   function tryMemo(i) {
//     if (memo[i] !== 0) {
//       return memo[i]
//     }
//     const maxJump = Math.min(i + nums[i], len - 1)
//     // f(i)=f(i+1)||f(i+2)||...||f(maxJump)
//     for (let j = i + 1; j <= maxJump; j++) {
//       const tmp = tryMemo(j)
//       if (tmp) {
//         memo[i] = true
//         return true
//       }
//     }
//     memo[i] = false
//     return false
//   }
//   return tryMemo(0)
// };

// 自底向上
// var canJump = function (nums) {
//   const len = nums.length
//   if (!len) {
//     return false
//   }
//   // f(i)表示从位置i能否跳到最后位置
//   const memo = Array(len).fill(false)
//   memo[len - 1] = true

//   for (let i = len - 2; i >= 0; i--) {
//     const maxJump = Math.min(i + nums[i], len - 1)
//     // f(i)=f(i+1)||f(i+2)||...||f(maxJump)
//     for (let j = i + 1; j <= maxJump; j++) {
//       if (memo[j]) {
//         memo[i] = true
//         break
//       }
//     }
//   }
//   return memo[0]
// };

// 贪心
var canJump = function (nums) {
  const len = nums.length
  if (!len) {
    return false
  }
  // 下标在[i~len-1]区间内，能到达最后位置的最小下标
  let minIndex = len - 1
  for (let i = len - 2; i >= 0; i--) {
    if (i + nums[i] >= minIndex) {
      minIndex = i
    }
  }
  return !minIndex
};

// const arr = [2,3,1,1,4]
const arr = [3,2,1,0,4]
console.log(canJump(arr))