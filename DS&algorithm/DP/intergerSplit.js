// var integerBreak = function (n) {
//   let res = 1;
//   let memo = new Array(n).fill(0);
//   memo[0] = 1;
//   return tryBreak(n);
//   function tryBreak(n) {
//     if (memo[n - 1]) {
//       return memo[n - 1];
//     }
//     let limit = Math.floor(n / 2);
//     for (let i = 1; i <= limit; i++) {
//       let res1 = tryBreak(i);
//       let res2 = tryBreak(n - i);
//       res = Math.max(res, res1*res2, res1 * (n - i), res2 * i, i*(n-i));
//       // console.log(i, n - i, res1, res2, res);
//     }
//     memo[n - 1] = res;
//     // console.log(n + '---------------------------------')
//     return res;
//   }
// };

// botom-up
var integerBreak = function (n) {
  let res = 1;
  let memo = new Array(n + 1).fill(0);
  memo[1] = 1;
  for (let i = 2; i <= n; i++) {
    let limit = Math.floor(i / 2);
    // 将i分割成至少两部分
    for (let j = 1; j <= limit; j++) {
      // memo[j] * memo[i - j], memo[j] * (i - j),
      res = Math.max(res,  memo[i - j] * j, j * (i - j));
    }
    memo[i] = res;
  }
  return memo[n];
};

console.log(integerBreak(5));
console.log(integerBreak(8));
console.log(integerBreak(10));
