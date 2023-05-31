function hanoi(n) {
  if (typeof n !== 'number') {
    throw new Error('not a number')
  }
  if (n === 1) {
    return 1;
  }
  return 2 * hanoi(n - 1) + 1;
}

function hanoi_better(n) {
  if (typeof n !== 'number') {
    throw new Error('not a number')
  }
  if (n === 1) {
    return 1;
  }
  let pre = 1;
  for (let i = 1; i < n; i++) {
    pre = 2 * pre + 1;
  }
  return pre;
}

function log() {
  console.log(...arguments);
}
let n = [1, 2, 3, 10];
n.forEach(item => log(hanoi_better(item)));
log('end')