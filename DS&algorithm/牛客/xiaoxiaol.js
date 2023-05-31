/**
 * 数组res 保存两人得分
 */
function calScore(s) {
  let sNiumei = sNiuniu = 0, isNiumei = true
  while (s.length !== 0) {
    let [score, curStr] = remove(s)
    s = curStr
    if (isNiumei) {
      sNiumei += score
      isNiumei = false
    }
    else {
      sNiuniu += score
      isNiumei = true
    }
  }
  let diff = sNiumei > sNiuniu ? sNiumei - sNiuniu : sNiuniu - sNiumei
  if (sNiumei > sNiuniu) {
    console.log('Niumei')
    console.log(diff)
  }
  else if (sNiumei < sNiuniu) {
    console.log('Niuniu')
    console.log(diff)
  }
  else console.log('Draw')
}
// 0011110
// 111001
function remove(s) {
  let len = s.length
  let start, count = 1, flag = false, hasOne = false, onlyOnePos = 0
  let resStart = 0, resCount = 0
  for (let i = 0; i < len - 1; i++) {
    if (s[i] === '1') {
      hasOne = true
      onlyOnePos = i
    }
    if (s[i] === s[i + 1] && s[i] === '1') {
      count++
      if (!flag) {
        start = i
        flag = true
      }
    }
    else {
      if (flag) {
        // 修改最大的resCount
        if (count > resCount) {
          resStart = start
          resCount = count
        }
        count = 1
        flag = false
      }
    }
  }
  if (flag) {
    // 修改最大的resCount
    if (count > resCount) {
      resStart = start
      resCount = count
    }
  }
  if (s[len-1] === '1') {
    hasOne = true
    onlyOnePos = len-1
  }
  if (!hasOne) {
    return [0, '']
  }
  else if (resCount === 0) {
    let str = s.substring(0, onlyOnePos) + s.substring(onlyOnePos+1, len)
    console.log(1, str)
    return [1, str]
  }
  let resStr = s.substring(0, resStart) + s.substring(resStart + resCount, len)
  console.log(resStart, resCount, resStr)
  return [resCount, resStr]
}

let s = ['110011110', '0011110', '111001', '1110011110', '0011001100']
// let s = ['00110110101', '00110011010101']

s.forEach(val => {
  calScore(val)
})