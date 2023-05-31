/**
 * 
 * @param {Array} nums 
 * @returns Array
 * time: O()
 * space: O(n)
 */
var combination = function (nums, m = nums.length) {
  let len = nums.length
  if (m > len) {
    console.error('m can not be over nums.length')
    return
  }
  // m === len, 只有一种组合，即nums
  if (m === len) {
    return [nums]
  }
  let res = [], p = []
  if (len === 0) {
    res.push([])
    return res
  }
  getcombination(0, 0)
  return res

  // p中已有index个元素的组合，现在从[start,len]中选一个元素作为第index+1加入已有的组合p后面
  function getcombination(start, index) {
    if (index === m) {
      // p是引用类型，使用res.push(p)，后面p.pop()后res中结果也会改变
      // 生成p的副本，将副本push进res
      let tmp = [...p]
      res.push(tmp)
      console.log('get one', tmp)
      return
    }
    for (let i = start; i < len; i++) {
      p.push(nums[i])
      // console.log('push', nums[i])
      getcombination(i+1, index + 1)
      let n = p.pop()
      // console.log('pop', n)
    }
    // console.log(res, p)
    return;
  }
}
let nums = [1, 2, 3, 4]
// let nums = [1, 2, 3]
// let nums = [1, 2]
// let nums = []
console.log(combination(nums, 3))
