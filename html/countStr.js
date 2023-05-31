function count(str) {
  let res = {};
  let len = str.length;
  for (let i = 0; i < len; i++) {
    let value = str[i];
    if (!res[value]) {
      console.log(i, value)
      if (value !== ' ') {
        console.log('set value')
        res[value] = 1;
      }
    } else {
      res[value] += 1;
    }
  }
  return res;
}
let s = 'hello world';
console.log(count(s))