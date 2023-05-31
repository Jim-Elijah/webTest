// eg: 12213242  => 3242
function removeRepeated(str) {
  let len = str.length
  let res = [], hasRepeated = false
  // 记录重复数字出现的起始位置和长度,flag是设置修改start的标识
  let start = 0, count = 1, flag = false
  let repeated = []
  let i = 0
  while (i < len - 1) {
    if (str[i] === str[i + 1]) {
      if (!flag) {
        start = i
        flag = true
        hasRepeated = true
      }
      count++
    }
    else {
      if (flag) {
        repeated.push([start, count])
        flag = false
        count = 1
      }
    }
    i++
  }
  // 处理末尾不是字母的情况
  if (flag) {
    repeated.push([start, count])
  }
  console.log('repeated', repeated)
  // 没有重复元素，直接返回str
  if (!hasRepeated) {
    return str
  }
  let nonRepeated = 0, repeatedLen = repeated.length
  repeated.forEach((val, index) => {
    let [s, c] = [...val]
    if (nonRepeated !== s) {
      res.push(str.substring(nonRepeated, s))
    }
    nonRepeated = s + c
    if (index === repeatedLen - 1 && nonRepeated !== len) {
      res.push(str.substring(nonRepeated, len))
    }
  })
  console.log('res', res)
  return removeRepeated(res.join(''))
}

// let s = '12213242'    // 3242
// let s = '122132442'    // 3
// let s = '122132444' // 32
// let s = '222132444' // 132
let s = '43122213252' // 4252
console.log(removeRepeated(s)) 