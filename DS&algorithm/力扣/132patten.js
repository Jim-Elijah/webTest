/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  let len = nums.length;
  if (len < 3) {
    return false;
  }
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      if (nums[j] > nums[i]) {
        for (let k = j + 1; k < len; k++) {
          if (nums[k] > nums[i] && nums[k] < nums[j]) {
            return true;
          }
        }
      }
    }
  }
  return false;
};

let a = [
  [1, 2, 3, 4], // false
  [3, 1, 4, 2], // true
  [-1, 3, 2, 0], // true
  [1, 2] //false
]

a.forEach(item => {
  console.log(find132pattern(item))
})