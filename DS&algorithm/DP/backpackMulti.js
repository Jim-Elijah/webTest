/**
 * 
 * @param {value} v 
 * @param {weight} w 
 * @param {number} n 
 * @param {capacity} c 
 */
function backpackMulti(v, w, n, c) {
  if (v.length !== w.length || v.length !== n.length) {
    throw new Error('length of v, w, n is not equal');
  }
  let len = v.length;
  // 将[0,i]类物品放入容量为c的背包，其中第n个物品还剩余数量remain
  return tryBackpack(c, len - 1, n[len - 1]);

  function tryBackpack(c, len, remain) {
    if (c <= 0 || len < 0) {
      return 0;
    }
    // 第i类物品没有剩余
    if (remain <= 0) {
      // i是最后一类物品
      if (len === 0) {
        return 0;
      }
      // 从[0,i-1]类物品中选
      len--;
      remain = n[len];
      return tryBackpack(c, len, remain);
    }
    if( c < w[len]){
      return tryBackpack(c, len - 1, len - 1 < 0 ? 0 : n[len - 1]);
    }
    // 不选                              // len-1<0时下标越界
    let res1 = tryBackpack(c, len - 1, len - 1 < 0 ? 0 : n[len - 1]);
    // 选择第i个物品
    let res2 = v[len] + tryBackpack(c - w[len], len, remain - 1);
    let res = Math.max(res1, res2);
    log('(' + c, len, remain, '),', res1, res2, res, '\n-------------------------------');
    return res;
  }
}
function backpackMulti_memo(v, w, n, c) {
  if (v.length !== w.length || v.length !== n.length) {
    throw new Error('length of v, w, n is not equal');
  }
  let len = v.length;
  // 将[0,i]类物品放入容量为c的背包，其中第n个物品还剩余数量remain
  return tryBackpack(c, len - 1, n[len - 1]);

  function tryBackpack(c, len, remain) {
    if (c <= 0 || len < 0) {
      return 0;
    }
    // 第i类物品没有剩余
    if (remain <= 0) {
      // i是最后一类物品
      if (len === 0) {
        return 0;
      }
      // 从[0,i-1]类物品中选
      len--;
      remain = n[len];
      return tryBackpack(c, len, remain);
    }
    // 不选                              // len-1<0时下标越界
    let res1 = tryBackpack(c, len - 1, len - 1 < 0 ? 0 : n[len - 1]);
    // 选择第i个物品
    let res2 = v[len] + tryBackpack(c - w[len], len, remain - 1);
    let res = Math.max(res1, res2);
    log('(' + c, len, remain, '),', res1, res2, res, '\n-------------------------------');
    return res;
  }
}

// let v = [6, 10, 12], w = [1, 2, 3], n = [1, 1, 1], c = 5; // 22
let v = [2, 4, 4, 5], w = [1, 2, 3, 4], n = [3, 1, 3, 2], c = 6; // 10

log(backpackMulti(v, w, n, c));
function log() {
  console.log(...arguments);
}

