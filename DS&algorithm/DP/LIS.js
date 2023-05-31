function log() {
  console.log(...arguments);
}

function LIS(arr) {
  let len = arr.length;
  let maxLen = 1;
  // LIS不一定以arr[i]结尾
  for (let i = 0; i < len; i++) {
    let curLen = tryLIS(i);
    if (curLen > maxLen) {
      maxLen = curLen
      // log('set maxLen', i, curLen)
    }
  }
  return maxLen

  // [0,len]区间的LIS以a[len]结尾
  function tryLIS(len) {
    if (len === 0) {
      return 1;
    }
    let maxLen = 1;
    for (let i = 0; i < len; i++) {
      if (arr[i] < arr[len]) {
        maxLen = Math.max(tryLIS(i) + 1, maxLen);
      }
    }
    // log(len, arr[len], maxLen);
    return maxLen;
  }
}

function LIS_memo(arr) {
  let len = arr.length;
  let memo = new Array(len).fill(-1);
  let maxLen = 1;
  // LIS不一定以arr[i]结尾
  for (let i = 0; i < len; i++) {
    let curLen = tryLIS(i);
    if (curLen > maxLen) {
      maxLen = curLen
      // log('set maxLen', i, curLen)
    }
  }
  return maxLen

  function tryLIS(len) {
    if (len === 0) {
      memo[len] = 1
      return 1;
    }
    if (memo[len] !== -1) {
      return memo[len];
    }
    let maxLen = 1;
    for (let i = 0; i < len; i++) {
      if (arr[i] < arr[len]) {
        maxLen = Math.max(tryLIS(i) + 1, maxLen);
      }
    }
    memo[len] = maxLen;
    // log(len, memo.slice(0, len + 1));
    return maxLen;
  }
}

function LIS_DP(arr) {
  let len = arr.length;
  let memo = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    let maxLen = 1;
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        maxLen = Math.max(memo[j] + 1, maxLen);
      }
    }
    memo[i] = maxLen;
    // log(i, memo.slice(0, i + 1));
  }
  // LIS不一定以arr[i]结尾，需要去memo中最大值
  let maxLen = 1
  for (let i = 0; i < len; i++) {
    if (memo[i] > maxLen) {
      maxLen = memo[i]
    }
  }
  return maxLen
}

// let a = [10, 9, 2, 5, 3, 7, 101, 18];
// let a = [10, 9, 2, 5, 3, 7, 101, 4];
let a = [10, 9, 2, 5, 3, 7, 1];
log(a)
// log(LIS_DP(a));
log(LIS_memo(a));
// log(LIS(a))

