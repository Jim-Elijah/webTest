function flushWall(s) {
  // let n = parseInt(readline());
  // let lines = readline().split("")
  let lines = s.split('').map(item => parseInt(item));
  let n = lines.length;
  console.log(lines, n)
  let countOne = 0
  for (let i = 0; i < n; i++) {
    if (lines[i]) {
      countOne++;
    }
  }
  if (countOne <= n / 2) {
    return countOne;
  }
  return n - countOne;
}

let a = '001'
console.log(flushWall(a))
