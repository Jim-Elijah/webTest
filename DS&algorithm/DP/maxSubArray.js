function maxSubArray(nums) {
  let len = nums.length
  if (len === 1) {
    return nums[0]
  }
  let memo = new Array(len).fill(-Infinity)
  let res = -Infinity
  tryMemo(len - 1)
  return res
  // memo[n]记录[0,n]内包含nums[n]的最大子数组的和
  function tryMemo(n) {
    if (n === 0) {
      res = memo[n] = nums[0]
      return nums[0]
    }
    if (memo[n] !== -Infinity) {
      return memo[n]
    }
    let temp = Math.max(tryMemo(n - 1) + nums[n], nums[n])
    // res是[0,len-1]中最大子数组的和，并不一定包含nums[len-1]
    res = Math.max(res, temp)
    memo[n] = temp
    // if (n === len - 1) {
    //   console.log(memo)
    // }
    return temp
  }
}

// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// let nums = [-2, 1, -3]
let nums = [-1, -2, 1]
console.log(maxSubArray(nums))

