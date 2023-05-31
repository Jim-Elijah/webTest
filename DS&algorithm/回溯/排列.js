/**
 * 
 * @param {Array} nums 
 * @returns Array
 * time: O()
 * space: O(n)
 */
var permute = function (nums, m = nums.length) {
  let len = nums.length
  if(m > len){
    console.error('m can not be over nums.length')
    return
  }
  let res = [], p = []
  let visited = new Array(len).fill(false)
  if (len === 0) {
    res.push([])
    return res
  }
  genPermutation(0)
  return res

  // p中已有index个元素的全排列，现在将第index+1个元素加入已有的排列p后面
  function genPermutation(index) {
    if (index === m) {
      // p是引用类型，使用res.push(p)，后面p.pop()后res中结果也会改变
      // 生成p的副本，将副本push进res
      let tmp = [...p]
      res.push(tmp)
      return
    }
    for (let i = 0; i < len; i++) {
      if (!visited[i]) {
        p.push(nums[i])
        visited[i] = true
        genPermutation(index + 1)
        p.pop()
        visited[i] = false
      }
    }
    return;
  }
}
let nums = [1, 2, 3]
// let nums = [1]
// let nums = []
console.log(permute(nums))
console.log('---------------------')
console.log(permute(nums, 2))

