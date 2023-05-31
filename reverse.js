reverse = (s) => {
  let len = s.length;
  let arr = []
  let i = 0
  while (i < len) {
    let j = s.indexOf('.', i)
    if (j !== -1) {
      arr.unshift(s.substring(i, j))
      i = j+1
    }
    else {
      arr.unshift(s.substring(i, len))
      break;
    }
  }
  return arr.join('.')
}

let s = 'www.taobao.com.cn'
console.log(s)
console.log(reverse(s))