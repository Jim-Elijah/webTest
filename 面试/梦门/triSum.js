/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function twoSum(nums, start, target) {
  let map = new Map();
  let rs = []
  for (let i = start, len = nums.length; i < len; i++) {
    let cmpl = target - nums[i];
    if (map.has(cmpl)) {
      rs.push([cmpl, nums[i]]);
    } else {
      map.set(nums[i], i);
    }
  }
  return rs;
}
// function getUnique(array) {
//   let obj = {}
//   return array.filter((item, index) => {
//     // 防止key重复
//     let newItem = item + JSON.stringify(item);
//     return obj.hasOwnProperty(newItem) ? false : obj[newItem] = true;
//   })
// }
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  nums.sort((a, b) => a - b)
  console.log(nums)
  let rs = [], pre = Infinity
  for (let i = 0, len = nums.length; i < len; i++) {
    if (pre === nums[i]) {
      console.log('repeat')
      continue
    }
    pre = nums[i]
    let cmpl = -nums[i];
    let two = twoSum(nums, i + 1, cmpl);
    while (two.length != 0) {
      let arr = two.pop();
      console.log(i, nums[i], arr);
      rs.push([nums[i], ...arr])
    }
  }
  return rs
};

function triSum(nums) {
  if (nums.length < 3) {
    return []
  }
  nums.sort((a, b) => a - b)
  console.log(nums)
  let res = []
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] > 0) {
      return res
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let low = i + 1, high = len - 1
    while (low < high) {
      let sum = nums[i] + nums[low] + nums[high]
      if (sum === 0) {
        if (nums[low] === nums[low + 1] && low + 1 < high) {
          low++
        }
        else if (nums[high] === nums[high - 1] && high - 1 > low) {
          high--
        }
        else {
          res.push([nums[i], nums[low], nums[high]])
          low++
        }
      }
      else if (sum < 0) {
        low++
      }
      else {
        high--
      }
    }

  }
  return res
}

// let nums = [-1, 0, 1, 2, -1, -4]
let nums = [0, 0, 0, 0]
// 输出：[[-1,-1,2],[-1,0,1]]
// console.log(threeSum(nums))
console.log(triSum(nums))