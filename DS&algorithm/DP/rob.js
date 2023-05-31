var rob = function (nums) {
  // memo[i]:考虑偷nums[i...length-1]的最大收获
  let memo = new Array(nums.length).fill(-1);
  let len = nums.length;
  if (len === 0) {
    return 0;
  }
  memo[len - 1] = nums[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    console.log(i)
    for (let j = i; j < len; j++) {
      memo[i] = Math.max(memo[i], nums[j] + (j + 2 < len ? memo[j + 2] : 0));
      console.log(j, memo[i]);
    }
  }
  console.log(memo[0])
  return memo[0];
};
let nums = [1, 2, 3, 1]
rs = rob(nums);
console.log(rs)