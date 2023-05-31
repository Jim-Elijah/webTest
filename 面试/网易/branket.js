// （） 1；[] 2 ; {} 3
function getMatchBracketsNum(str, len) {
  if(len === 0){
    return 0
  }
  let res = new Array(3).fill(0), stack = []
  let weight = [1, 2, 3]
  let left = ['(', '[', '{'], right = [')', ']', '}']
  for (let i = 0; i < len; i++) {
    console.log(str[i])
    // 栈空
    if (stack.length === 0) {
      stack.push(str[i])
    }
    // 是左括号
    else if (left.indexOf(str[i]) !== -1) {
      stack.push(str[i])
    }
    // 是右括号但不匹配
    else if (right.indexOf(str[i]) !== left.indexOf(stack[stack.length - 1])) {
      console.log('not match')
      return -1
    }
    // 匹配
    else {
      stack.pop()
      console.log('match')
      let index = right.indexOf(str[i]);
      console.log('index', index)
      if (!res[index]) {
        console.log('empty')
        res[index] = 1
        console.log(res)
      }
      else {
        console.log('add')
        res[index]++
        console.log(res)
      }
    }
  }
  console.log('res', res)
  if(stack.length){
    return -1
  }
  let count = 0
  res.forEach((val, index) => {
    count += weight[index] * val
  })
  return count
}
// let s = "[({}[])]"
// let s ="[]"
// let s = "(])"
// let s = "({}])"
let s = '{{(()'
console.log(getMatchBracketsNum(s, s.length))
