var largestDivisibleSubset = function (nums) {
  let len = nums.length
  if (len === 1) {
    return nums
  }
  // memo保存[0,i]中的最大子数组，maxLen为其长度
  let memo = [nums[0]], maxLen = 1
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if()
    }
  }
};