// function sum2(nums, target) {
//   let len = nums.length;
//   for (let i = 0; i < len; i++) {
//     rem = target - nums[i];
//     j = nums.indexOf(rem);
//     if (j != -1) {
//       return [i, j];
//     }
//   }
// }

// function twoSum(nums, target) { // 不建议
//   let temp = [];
//   let len = nums.length;
//   for (let i = 0; i < len; i++) {
//     let dif = target - nums[i];
//     // dif可能为负数，而且，temp下标是dif，当dif过大时浪费空间
//     if (temp[dif] != undefined) {
//       console.log(temp);
//       return [temp[dif], i];
//     }
//     temp[nums[i]] = i;
//   }
//   console.log(temp);
// }

let nums = [11, 15, 1, 2, 4, 7, 10], target = 9;
