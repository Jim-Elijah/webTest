function isCap(s) {
  if ((s >= 'a' && s <= 'z') || (s >= 'A' && s <= "Z")) {
    return true
  }
  return false
}
function countAndReplace(str) {
  let len = str.length
  let res = []
  // 记录非字母出现的起始位置和长度,flag是设置start的标识
  let start = 0, count = 0, flag = false
  let nonCap = []
  let i = 0
  while (i < str.length) {
    if (!isCap(str[i])) {
      if (!flag) {
        start = i
        flag = true
      }
      count++
    }
    else {
      if (flag) {
        nonCap.push([start, count])
        flag = false
        count = 0
      }
    }
    i++
  }
  // 处理末尾不是字母的情况
  if (flag) {
    nonCap.push([start, count])
  }
  let firstCap = 0, nonLen = nonCap.length
  str = str.toLowerCase()
  nonCap.forEach((val, index) => {
    let [s, c] = [...val]
    if (firstCap !== s) {
      res.push(str.substring(firstCap, s))
    }
    firstCap = s + c
    if (index === nonLen - 1 && firstCap !== len) {
      res.push(str.substring(firstCap, len))
    }
  })
  // console.log(nonCap)
  res = new Set(res)
  return [...res]
}
function fn(str) {
  let len = str.length
  for (let i = 0; i < len; i++) {
    if (!isCap(str[i])) {
      str = str.replace(str[i], ' ')
    }
  }
  str = str.replace(/\s+/g, ',')
  str = str.toLowerCase()
  let res = str.split(',')
  if (res[res.length - 1] === '') {
    res.pop()
  }
  if (res[0] === '') {
    res.shift()
  }
  res = new Set(res)
  return [...res]
}
function removeNum(s) {
  let pattern = /[^a-zA-Z]+/g
  s = s.replace(pattern, ' ')
  s = s.replace(/\s+/g, ',')
  s = s.toLowerCase()
  let res = s.split(',')
  if (res[res.length - 1] === '') {
    res.pop()
  }
  if (res[0] === '') {
    res.shift()
  }
  res = new Set(res)
  return Array.from(res)
}
// let s = "a 12ds3a 13a1 3A1 3ab1 3 aa jj2"
// let s = '212a12 23 A12 1AdfS fd382abc111'
let s = 'ab d12f 1ui'
// let s = '12ab ASD1 fd1'
console.log(s)
console.log(removeNum(s))
console.log(fn(s))
console.log(countAndReplace(s))
