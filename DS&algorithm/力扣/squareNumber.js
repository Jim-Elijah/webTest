function log() {
  console.log(...arguments)
}
// var numSquares = function (n) {
//   let limit = Math.floor(Math.sqrt(n));
//   let memo = new Array(n).fill(0);
//   for (let i = limit; i >= 1; i--) {
//     let res1 = numSquares(n-limit*limit);
//     let res2 = numSquares(n-(limit-1)*(limit-1));
//     if(res1 < res2){
//       memo
//     }
//   }
// };

var numSquares = function (n) {
  let memo = new Array(n+1).fill(0);
  let res = Infinity;
  return trySquares(n);
  function trySquares(n) {
    let limit = Math.sqrt(n);
    // n是完全平方数
    if (Number.isInteger(limit)) {
      return 1;
    }
    limit = Math.floor(limit);
    if (memo[n]) {
      // log(n, memo[n] + ' found in memo');
      return memo[n];
    }
    // f(n) = min{f(i^2)+f(n-i^2)}
    for (let i = limit; i >= 1; i--) {
      let remain = n - i * i;
      // log('loop', n, i * i, remain)
      res = Math.min(res, trySquares(remain) + 1);
    }
    memo[n] = res;
    // log('res', n, res, '\n------------------------------')
    return res;
  }
}

let n = 12;
// let n = 13;
// let n = 16;
// let n = 1;
log(n + '\n-----------------------------------\n')
log(numSquares(n))