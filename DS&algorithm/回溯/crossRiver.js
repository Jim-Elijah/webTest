var canCross = function (stones) {
  let stack = [], target = stones[stones.length - 1]
  let memo = {}
  return tryJump(0, 1)
  // 从pos位置开始，以[k-1,k+1]之间的步数跳跃
  function tryJump(pos, k) {
    memo[pos] = memo[pos] || []
    if (pos === target) {
      return true
    }
    if(memo[pos][k] !== undefined){
      return memo[pos][k]
    }
    let high = pos === 0 ? 1 : k + 1
    let low = k > 1 ? k - 1 : 1
    for (let i = low; i <= high; i++) {
      // 可以jump
      if (stones.indexOf(pos + i) !== -1) {
        stack.push([pos, i])
        if (tryJump(pos + i, i)) {
          return true
        }
        let temp = stack.pop()
      }
      // 不可以jump
      else {
        memo[pos][i] = false
      }
    }
    memo[pos][k] = false
    return false
  }
};
function log() {
  console.log(...arguments)
}

console.time('global')
let stones = [0, 1, 3, 5, 6, 8]
// let stones = [0, 1, 3, 5, 6, 10]


// let stones = [0, 1, 3, 5, 6, 8, 12, 17]
// let stones = [0, 1, 2, 3, 4, 8, 9, 11, 9999999]
// console.log(canCross(stones))

console.log(canCross(stones))
console.timeEnd('global')
// global: 5:12.251 (m:ss.mmm)