/**
 * 1. 将写有数字m的卡片放到编号为n的盒子，其中n等于m的各个数字之和
 * 2. 有一组卡片，上面的数字从start到end，含有end-start+1个数，求装有卡片数最多的盒子编号
 */

let sum = (n) => {
  let s = 0;
  while (n) {
    s += n % 10;
    n = parseInt(n / 10);
  }
  return s;
}
let maxNum = (start, end) => {
  let m = new Map();
  for (let i = start; i <= end; i++) {
    let n = sum(i);
    if (m.has(n)) {
      let val = m.get(n);
      m.set(n, val + 1);
    } else {
      m.set(n, 1);
    }
  }
  let tag = 1, count = 1, i = 0, size = m.size;;
  while (i < size) {
    let n = m.get(i);
    if (n > count) {
      tag = i;
      count = n;
    }
    i++;
  }
  console.log(m);
  return [tag, count];
}
console.log(maxNum(198, 777))