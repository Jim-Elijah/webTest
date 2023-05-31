/**
 * 
 * @param {values} v 
 * @param {weights} w 
 * @param {capacity} c 
 */
function backpack01(v, w, c) {
  if (v.length !== w.length) {
    throw new Error('length of v and w is not equal');
  }
  let len = v.length;
  return tryBackpack(c, len - 1);

  function tryBackpack(c, len) {
    if (c <= 0) {
      return 0;
    }
    if (len === 0) {
      return w[len] > c ? 0 : v[len];
    }
    let res1 = tryBackpack(c, len - 1);
    let res2 = v[len] + tryBackpack(c - w[len], len - 1);
    let res = Math.max(res1, res2);
    log('(' + c, len, '),', res1, res2, res, '\n-------------------------------');
    return res;
  }
}
function backpack01_memo(v, w, c) {
  if (v.length !== w.length) {
    throw new Error('length of v and w is not equal');
  }
  let len = v.length;
  let memo = new Array(2).fill(-1).map(item => new Array(c + 1).fill(-1))
  return tryBackpack(c, len - 1);

  function tryBackpack(c, len) {
    if (c <= 0) {
      return 0;
    }
    if (len === 0) {
      return w[len] > c ? 0 : v[len];
    }
    if (memo[len % 2][c] !== -1) {
      return memo[len % 2][c];
    }
    let res1 = tryBackpack(c, len - 1);
    let res2 = v[len] + tryBackpack(c - w[len], len - 1);
    memo[len % 2][c] = Math.max(res1, res2);
    log('(' + c, len, '),', res1, res2, memo[len % 2][c], '\n-------------------------------');
    return memo[len % 2][c];
  }
}
function backpack01_DP(v, w, c) {
  if (v.length !== w.length) {
    throw new Error('length of v and w is not equal');
  }
  let len = v.length;
  // 此处初始化为零
  let memo = new Array(2).fill(0).map(item => new Array(c + 1).fill(0))
  return tryBackpack(c, len);

  function tryBackpack(c, len) {
    for (let i = 1; i < c + 1; i++) {
      memo[0][i] = w[0] > c ? 0 : v[0];
    }
    log(memo, '\n--------------------------')
    for (let i = 1; i < len; i++) {
      for (let j = 0; j < c + 1; j++) {
        let res1 = memo[(i - 1) % 2][j];
        // 此处有bug，当第i个物品放不进容量为j的包时，res2=w[i]
        // let col = j - w[i] < 0 ? 0 : j - w[i];
        // console.log('col', col)
        // let res2 = v[i] + memo[(i - 1) % 2][col];
        let res2 = -1;
        if (j >= w[i]) {
          let col = j - w[i] < 0 ? 0 : j - w[i];
          console.log('col', col)
          res2 = v[i] + memo[(i - 1) % 2][col];
        }
        memo[i % 2][j] = Math.max(res1, res2);
        log('(', i, j, '),', res1, res2, memo[i % 2][j], '\n--------------------------');

      }
      log(memo[i % 2], '\n-------------------------------');
    }
    log(memo)
    return memo[(len-1) % 2][c];
  }
}

let v = [6, 10, 12], w = [1, 2, 3], c = 5;

log(backpack01_DP(v, w, c));
function log() {
  console.log(...arguments);
}